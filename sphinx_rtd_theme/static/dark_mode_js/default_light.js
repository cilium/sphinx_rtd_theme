// Adapted from: https://github.com/MrDogeBro/sphinx_rtd_dark_mode

const loadTheme = () => {
  let theme = localStorage.getItem('theme');

  if (theme !== null) {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      document.body.setAttribute('data-theme', 'dark');
    }
  } else {
    localStorage.setItem('theme', 'light');
    document.documentElement.setAttribute('data-theme', 'light');
    document.body.setAttribute('data-theme', 'light');
  }
  
  switchPygments(localStorage.getItem('theme') || 'light');
};

loadTheme();
