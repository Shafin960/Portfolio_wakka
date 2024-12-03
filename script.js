// script.js

(function () {
  // Check if it's the first visit in the sessionStorage
  const hasVisited = sessionStorage.getItem('firstVisit') === 'true';

  // If the user has visited before, hide splash screen immediately and show body content
  if (hasVisited) {
    document.body.style.visibility = 'visible';
    document.getElementById('splash-screen').style.display = 'none'; // Hide splash screen
    return;
  }

  // First visit logic
  document.addEventListener('DOMContentLoaded', () => {
    const splashScreen = document.getElementById('splash-screen');
    const typedOutput = document.getElementById('typed-output');

    // Mark the site as visited for the current session
    sessionStorage.setItem('firstVisit', 'true');

    // Make body visible and ensure the splash screen can show
    document.body.style.visibility = 'visible';
    splashScreen.style.visibility = 'visible'; // Show splash screen

    // Create a new Typed instance for the splash screen text
    const typed = new Typed('#typed-output', {
      strings: ['Hello There'],
      typeSpeed: 150,
      backSpeed: 150,
      backDelay: 1000,
      startDelay: 500,
      showCursor: true,
      loop: true,
      cursorWidth: 6
    });

    // After typing finishes, slide up the splash screen
    setTimeout(() => {
      splashScreen.classList.add('slide-up');
    }, 3000);

    // When animation ends, hide splash screen
    splashScreen.addEventListener('animationend', () => {
      splashScreen.style.display = 'none';
    });
  });
})();



// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// GSAP animation for scrolling effect
gsap.timeline({
  scrollTrigger: {
    trigger: ".achievement-section",
    start: "top top", // Start when the section hits the top
    end: "+=100%", // End after scrolling 100% of the section
    scrub: true, // Smooth scrubbing
    pin: true, // Lock the section
  },
})
  .to(".award-image", {
    y: "-100%", // Move the image up into view
    duration: 1,
  });


document.addEventListener("DOMContentLoaded", function () {
  new Splide(".splide", {
    type: "loop", // Enable infinite scrolling
    perPage: 10,   // Show 5 logos at a time
    gap: "130px", // Maintain the spacing
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
        perPage: 5,
        gap: "50px",
      },
    },
  }).mount(window.splide.Extensions);
});


const container = document.querySelector('.scrolling-location-container');
const content = document.querySelector('.scrolling-location');

// Clone the content for seamless scrolling
content.innerHTML += content.innerHTML;

let position = 0;
const speed = 1; // Adjust speed as needed (pixels per frame)

function scroll() {
  position -= speed;

  // Reset position when first set is fully scrolled
  if (-position >= content.offsetWidth / 2) {
    position = 0;
  }

  content.style.transform = `translateX(${position}px)`;
  requestAnimationFrame(scroll);
}

// Start the animation
scroll();

const containerlogo = document.querySelector('.bottom-home');

// Clone the content for seamless scrolling
content.innerHTML += content.innerHTML;






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