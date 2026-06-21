document.addEventListener('DOMContentLoaded', function() { 
    // Handle project type selection 
    const projectTypeCards = document.querySelectorAll('.type-card'); 
    let selectedType = null; 
 
    projectTypeCards.forEach(card => { 
        card.addEventListener('click', function() { 
            // Remove selected class from all cards 
            projectTypeCards.forEach(c => c.classList.remove('selected')); 
             
            // Add selected class to clicked card 
            this.classList.add('selected'); 
             
            // Store the selected type 
            selectedType = this.querySelector('h3').textContent; 
        }); 
    }); 
 
    // Handle form submission 
    const projectForm = document.getElementById('projectForm');
    projectForm.addEventListener('submit', function(e) { 
        e.preventDefault();
        const projectName = document.getElementById('project-name').value; 
        const projectDescription = document.getElementById('project-description').value; 
         
        // Validate form 
        if (!projectName) { 
            alert('Please enter a project name'); 
            return; 
        } 
         
        if (!selectedType) { 
            alert('Please select a project type'); 
            return; 
        } 
         
        // Store project data (in a real app, this would be sent to a server) 
        const projectData = { 
            name: projectName, 
            description: projectDescription, 
            type: selectedType, 
            createdAt: new Date().toISOString() 
        }; 
         
        // For demo purposes, store in localStorage 
        const projects = JSON.parse(localStorage.getItem('projects') || '[]'); 
        projects.push(projectData); 
        localStorage.setItem('projects', JSON.stringify(projects)); 
         
        // Redirect to dashboard with success message 
        alert(`Success! Your "${projectName}" ${selectedType} project has been created.`); 
        window.location.href = 'indexacc.html'; 
    }); 
}); 
js/theme-toggle.js
document.addEventListener('DOMContentLoaded', function() { 
    // Theme Toggle Logic 
    const themeToggle = document.getElementById('theme-toggle'); 
    const themeIconPath = document.getElementById('theme-icon-path'); 
    const body = document.documentElement; 
 
    const moonPath = "M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-3.03 0-5.5-2.47-5.5-5.5 0-1.82.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z"; 
    const sunPath = "M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41l-1.06-1.06zm1.06-12.37c-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06c.39-.38.39-1.02 0-1.41zM7.05 18.36c.39-.39.39-1.03 0-1.41l-1.06-1.06c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0z"; 
 
    const currentTheme = localStorage.getItem('theme') || 'light'; 
    if (currentTheme === 'dark') { 
        body.setAttribute('data-theme', 'dark'); 
        if (themeIconPath) themeIconPath.setAttribute('d', sunPath); 
    } 
 
    if (themeToggle) {
        themeToggle.addEventListener('click', () => { 
            const isDark = body.getAttribute('data-theme') === 'dark'; 
            if (isDark) { 
                body.removeAttribute('data-theme'); 
                if (themeIconPath) themeIconPath.setAttribute('d', moonPath); 
                localStorage.setItem('theme', 'light'); 
            } else { 
                body.setAttribute('data-theme', 'dark'); 
                if (themeIconPath) themeIconPath.setAttribute('d', sunPath); 
                localStorage.setItem('theme', 'dark'); 
            } 
        }); 
    }
}); 