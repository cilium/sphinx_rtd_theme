// Adapted from: https://github.com/MrDogeBro/sphinx_rtd_dark_mode

const loadTheme = () => {
  let theme = localStorage.getItem('theme');

  if (theme !== null) {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      document.body.setAttribute('data-theme', 'dark');
    }
  } else {
    localStorage.setItem('theme', 'dark');
    document.documentElement.setAttribute('data-theme', 'dark');
    document.body.setAttribute('data-theme', 'dark');
  }
  
  switchPygments(localStorage.getItem('theme') || 'dark');
};

loadTheme();
