function toggleDarkMode() { // toggle dark mode
    const style = document.getElementById('style');
    const currentHref = style.getAttribute('href');
    const darkMode = './styles_dark.css';

    if (currentHref === './styles.css') {
        style.setAttribute('href', darkMode);
    } else {
        style.setAttribute('href', './styles.css');
    }
}