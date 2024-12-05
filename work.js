(function () {
  // Check if it's the first visit in the sessionStorage
  const hasVisited = sessionStorage.getItem('firstVisit') === 'true';

  // If the user has visited before, hide splash screen immediately and show body content
  if (hasVisited) {
    document.body.style.visibility = 'visible';
    return;
  }
})();

document.querySelectorAll('.each-container').forEach(container => {
  const imgContainer = container.querySelector('.img-container');
  const viewProject = container.querySelector('.view-project');

  // Add a console log to help debug
  if (!imgContainer || !viewProject) {
    console.error('Missing .img-container or .view-project:', container);
    return; // Skip this iteration if elements are missing
  }

  imgContainer.addEventListener('mousemove', function (e) {
    const rect = imgContainer.getBoundingClientRect();

    // Calculate relative mouse position within the container
    const x = e.clientX - rect.left + 20; // Offset 20px to the right
    const y = e.clientY - rect.top + 20; // Offset 20px down

    // Position the button
    viewProject.style.left = `${x}px`;
    viewProject.style.top = `${y}px`;
    viewProject.style.display = 'block';
  });

  imgContainer.addEventListener('mouseleave', function () {
    viewProject.style.display = 'none';
  });
});

document.addEventListener("DOMContentLoaded", function () {
  new Splide(".scrolling-footer", {
    type: "loop", // Enable infinite scrolling
    perPage: 4,   // Show 5 logos at a time
    gap: "0px", // Maintain the spacing
    drag: false,  // Disable dragging if not needed
    pagination: false, // Remove pagination dots
    arrows: false,     // Remove navigation arrows
    autoScroll: {
      speed: 1, // Adjust the speed of scrolling
      pauseOnHover: false,
      pauseOnFocus: false,
    },
    breakpoints: {
      768: { // Adjust for smaller screens
        perPage: 2,
        gap: "0px",
      },
    },
  }).mount(window.splide.Extensions);
});