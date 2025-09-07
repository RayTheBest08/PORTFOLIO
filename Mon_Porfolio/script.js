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

