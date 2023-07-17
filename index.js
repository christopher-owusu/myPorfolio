let theme = localStorage.getItem('theme');

if (theme === null) {
    setTheme('light');
} else {
    setTheme(theme);
}

let themeDot = document.getElementsByClassName('theme-dot');

for (let i = 0; i < themeDot.length; i++) {
    themeDot[i].addEventListener('click', function() {
        let mode = this.dataset.mode;
        console.log('option clicked:', mode);
        setTheme(mode);
    });
}

function setTheme(mode) {
    let themeStyle = document.getElementById('theme-style');

    switch (mode) {
        case 'light':
            themeStyle.href = 'style.css';
            break;
        case 'aqua':
            themeStyle.href = 'aqua.css';
            break;
        case 'green':
            themeStyle.href = 'green.css';
            break;
        case 'purple':
            themeStyle.href = 'purple.css';
            break;
        default:
            themeStyle.href = 'style.css';
    }

    localStorage.setItem('theme', mode);
}
