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


document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.books-slider');
    
    // Function to reset animation smoothly
    function resetAnimation() {
        if (-slider.getBoundingClientRect().left >= slider.scrollWidth / 2) {
            slider.style.animation = 'none';
            slider.offsetHeight; // Trigger reflow
            slider.style.animation = 'slideLeft 20s linear infinite';
        }
    }

    // Check position periodically
    setInterval(resetAnimation, 50);

    // Optional: Add touch support
    let startX;
    let scrollLeft;
    let isDown = false;

    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        slider.style.animationPlayState = 'paused';
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.style.animationPlayState = 'running';
    });

    slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.style.animationPlayState = 'running';
    });

    slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2;
        slider.scrollLeft = scrollLeft - walk;
    });
});