# Adapted from: https://github.com/MrDogeBro/sphinx_rtd_dark_mode
# Simplified for Cilium theme usecase

from pathlib import Path


class DarkModeLoader:
    def __init__(self):
        self.config = None

    def configure(self, app, config):
        self.config = config

        self.check_sphinx_theme()

        if not self.config.html_static_path:
            self.config.html_static_path = [
                str(Path.joinpath(Path(__file__).resolve().parent, "static"))
            ]
        else:
            self.config.html_static_path.append(
                str(Path.joinpath(Path(__file__).resolve().parent, "static"))
            )

        # Note: JavaScript files are loaded manually in layout.html immediately after <body> tag to prevent theme flashing and ensure correct theme styles for content.
        self.load_css()

    def check_sphinx_theme(self):
        # Modified to work with Cilium theme - don't override if already set correctly
        if not self.config.html_theme == "sphinx_rtd_theme_cilium":
            # Only warn, don't force change the theme since we want to keep Cilium theme
            from sphinx.util.logging import getLogger
            logger = getLogger(__name__)
            logger.warning(
                f"Dark mode is designed for sphinx_rtd_theme_cilium, "
                f"but current theme is '{self.config.html_theme}'. "
                f"Some styling may not work as expected."
            )

    def load_css(self):
        css_files = [
            "dark_mode_css/general.css",
            "dark_mode_css/dark.css",
        ]

        if "css_files" in self.config.html_context:
            for css_file in css_files:
                self.config.html_context["css_files"].append(f"_static/{css_file}")
        else:
            if not self.config.html_css_files:
                self.config.html_css_files = css_files
            else:
                self.config.html_css_files.extend(css_files)
