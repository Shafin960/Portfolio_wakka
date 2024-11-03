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
  
  