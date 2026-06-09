document.addEventListener('DOMContentLoaded', function() { 
    const themeToggle = document.getElementById('theme-toggle'); 
    const body = document.documentElement; 
 
    const currentTheme = localStorage.getItem('theme') || 'light'; 
    if (currentTheme === 'dark') { 
        body.setAttribute('data-theme', 'dark'); 
    } 
 
    if (themeToggle) {
        themeToggle.addEventListener('click', () => { 
            const isDark = body.getAttribute('data-theme') === 'dark'; 
            if (isDark) { 
                body.removeAttribute('data-theme'); 
                localStorage.setItem('theme', 'light'); 
            } else { 
                body.setAttribute('data-theme', 'dark'); 
                localStorage.setItem('theme', 'dark'); 
            } 
        }); 
    }
}); 