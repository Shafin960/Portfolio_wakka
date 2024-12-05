(function () {
    // Check if it's the first visit in the sessionStorage
    const hasVisited = sessionStorage.getItem('firstVisit') === 'true';

    // If the user has visited before, hide splash screen immediately and show body content
    if (hasVisited) {
        document.body.style.visibility = 'visible';
        return;
    }
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
        type: "loop",
        drag: false,
        drag: "free",
        focus: "center",
        perPage: 3,
        autoScroll: {
            speed: 1,
            pauseOnHover: false,
            pauseOnFocus: false,
        },
        arrows: false,
        pagination: false,
        gap: "20px",
        breakpoints: {
            768: {
                perPage: 1.5,
                gap: "15px",
            },
        },
    }).mount(window.splide.Extensions);
});



function changeImageSrc() {
    var img = document.getElementById('awardImage');
    if (window.innerWidth <= 767) {  // Mobile view
        img.src = './Assets/mobileaward.svg';
    }
}

// Call the function initially to set the correct image
changeImageSrc();


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


// Add an event listener to adjust the image on window resize
window.addEventListener('resize', changeImageSrc);
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
const contentlogo = document.querySelector('.clients-container');

// Clone the content for seamless scrolling
content.innerHTML += content.innerHTML;

let positionlogo = 0;
const speedlogo = 1; // Adjust speed as needed (pixels per frame)

function scrolllogo() {
    positionlogo -= speedlogo;

    // Reset position when first set is fully scrolled
    if (-positionlogo >= contentlogo.offsetWidth / 2) {
        positionlogo = 0;
    }

    contentlogo.style.transform = `translateX(${positionlogo}px)`;
    requestAnimationFrame(scrolllogo);
}

// Start the animation
scrolllogo();

document.querySelectorAll('.each-container').forEach(container => {
    const viewProject = container.querySelector('.view-project img');

    container.addEventListener('mousemove', (e) => {
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Calculate offsets to center the image
        const offsetX = viewProject.offsetWidth / 2;
        const offsetY = viewProject.offsetHeight / 2;

        // Apply transform with offsets
        viewProject.style.transform = `translate(${x - offsetX}px, ${y - offsetY}px)`;
    });

    container.addEventListener('mouseenter', () => {
        viewProject.style.display = 'block';
    });

    container.addEventListener('mouseleave', () => {
        viewProject.style.display = 'none';
    });
});

