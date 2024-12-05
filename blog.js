// script.js
(function () {
    // Check if it's the first visit in the sessionStorage
    const hasVisited = sessionStorage.getItem('firstVisit') === 'true';

    // If the user has visited before, hide splash screen immediately and show body content
    if (hasVisited) {
        document.body.style.visibility = 'visible';
        return;
    }
})();
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
