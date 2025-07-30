const switchPygments = (theme) => {
  const lightCSS = document.querySelector('link[href*="pygments.css"]:not([id])');
  const darkCSS = document.getElementById('pygments_dark_css');
  
  if (lightCSS && darkCSS) {
    if (theme === 'dark') {
      lightCSS.media = 'not all';
      darkCSS.media = 'screen';
    } else {
      lightCSS.media = 'screen';
      darkCSS.media = 'not all';
    }
  }
};
