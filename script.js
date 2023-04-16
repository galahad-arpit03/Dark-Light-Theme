const themeToggleBtn = document.querySelector('.theme-toggle');

const theme = localStorage.getItem('theme');


theme && document.body.classList.add(theme);


handleThemeToggle = () => {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
                localStorage.setItem('theme', 'dark-mode');
        } else {
                localStorage.removeItem('theme');
        }
        
}

themeToggleBtn.addEventListener('click', handleThemeToggle);