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

