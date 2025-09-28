document.addEventListener('DOMContentLoaded', () => {
    // Select all list items with a 'data-percentage' attribute.
    const skillItems = document.querySelectorAll('.hard-skills-list li[data-percentage]');

    // Loop through each skill item.
    skillItems.forEach(item => {
        const percentageDiv = item.querySelector('.pourcentage');
        const percentageValue = item.getAttribute('data-percentage');

        // Add a mouseover event listener to make the bar and text appear.
        item.addEventListener('mouseover', () => {
            percentageDiv.style.display = 'block'; // Ensure the bar is visible
            percentageDiv.style.width = `${percentageValue}%`;
            percentageDiv.textContent = `${percentageValue}%`;
            percentageDiv.style.opacity = '1';
        });

        // Add a mouseout event listener to hide the bar and reset its width.
        item.addEventListener('mouseout', () => {
            percentageDiv.style.width = '0%';
            percentageDiv.style.opacity = '0';
        });
    });
});

    document.addEventListener('DOMContentLoaded', () => {
        // 1. Get references to the buttons and skill containers
        const softSkillsBtn = document.querySelector('.btn-competences:nth-child(1)'); // The first button
        const hardSkillsBtn = document.querySelector('.btn-competences:nth-child(2)'); // The second button
        
        // Containers for skills (you might want to group the hard skills)
        const softSkillsContainer = document.querySelector('.cpts-soft');
        const hardSkillsContainers = [
            document.querySelector('.cpts-hard-frontend'),
            document.querySelector('.cpts-hard-backend'),
            document.querySelector('.competences-hard-design')
        ];
        
        // --- Helper function to show/hide elements ---
        const toggleVisibility = (showContainer, hideContainers) => {
            // Show the selected container
            showContainer.style.display = 'block'; // Or 'flex', depending on your CSS layout
            
            // Hide the others
            hideContainers.forEach(container => {
                container.style.display = 'none';
            });
        };

        // --- Event Listener for Soft Skills Button ---
        softSkillsBtn.addEventListener('click', () => {
            // Show soft skills and hide all hard skills
            toggleVisibility(softSkillsContainer, hardSkillsContainers);
            // Optional: Add an 'active' class to the button for styling
            softSkillsBtn.classList.add('active');
            hardSkillsBtn.classList.remove('active');
        });

        // --- Event Listener for Hard Skills Button ---
        hardSkillsBtn.addEventListener('click', () => {
            // Show all hard skills and hide the soft skills container
            const allHardSkills = [softSkillsContainer, ...hardSkillsContainers.slice(0, -1)]; // All except the one to show
            
            // NOTE: Since Hard Skills are spread across multiple divs, 
            // you should show all hard skill divs and hide only the soft skill div.
            
            softSkillsContainer.style.display = 'none'; // Hide Soft Skills
            hardSkillsContainers.forEach(container => {
                container.style.display = 'block'; // Or 'flex', show all Hard Skills
            });
            
            // Optional: Add an 'active' class to the button for styling
            hardSkillsBtn.classList.add('active');
            softSkillsBtn.classList.remove('active');
        });

        // --- Initial State (e.g., show Soft Skills by default) ---
        // This ensures a view is loaded when the page opens.
        softSkillsBtn.click(); // Simulate a click to set the initial state
    });


