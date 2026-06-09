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
            selectedType = this.dataset.type; 
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