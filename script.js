const images = [
  { src: "images/BrownM.png", alt: "Image display 1" },
  { src: "images/chocolateM.png", alt: "Image display 2" },
  { src: "images/GoldM.png", alt: "Image display 3" },
  { src: "images/whiteM.png", alt: "Image display 4" }
];

const track = document.querySelector(".hero-section-img .slide-track");

const imageWidth = 450;
const imageGap = 60;
const totalSlideWidth = imageWidth + imageGap;

// Dynamically add images to the track
images.forEach(imgObj => {
  const img = document.createElement("img");
  img.src = imgObj.src;
  img.alt = imgObj.alt;
  track.appendChild(img);
});

let index = 0;

// Corrected template literal usage
function slideTo(idx) {
  track.style.transform = `translateX(-${idx * totalSlideWidth}px)`;
}

setInterval(() => {
  index = (index + 1) % images.length;
  slideTo(index);
}, 3000);

slideTo(index);

const CardData = [
  {
    bigImg: "images/wood1.png",
    smallImg: "images/small1.png",
    badge:"01",
    title:"Premium Quality Materials",
    desc:"We use only solid hardwood — no MDF, no particle board. Every NiVeda mandir is built to last, using hand-selected, durable wood that ensures both beauty and longevity. Our finishes are stain-resistant and crafted to retain their elegance for years, making your sacred space truly timeless.",
  },
  {
    bigImg:"images/wood2.png",
    smallImg:"images/small2.png",
    badge:"02",
    title:"Handcrafted, Custom-Made Temples",
    desc:"Every NiVeda mandir is meticulously handcrafted by skilled artisans with a deep understanding of tradition and design. From intricate carvings to personalized features like bell holders, drawers, and domes — your temple is built just for you, blending spiritual significance with elegant craftsmanship.",
  },
  {
    bigImg:"images/wood3.png",
    smallImg:"images/small3.png",
    badge:"03",
    title:"Personalize Every Detail",
    desc:"Why settle for a standard temple when you can design your own? With NiVeda, choose the dimensions, design elements, and storage features that work for you. Whether traditional or modern, simple or ornate — we bring your perfect pooja setup to life.",
  },
  {
    bigImg:"images/wood4.png",
    smallImg:"images/small4.png",
    badge:"04",
    title:"Delivered With Care",
    desc:"Your sacred space deserves a sacred delivery. Each NiVeda mandir is securely packed and delivered in parts for safe transit and easy self-assembly with just a screwdriver. We ensure damage-free delivery, right to your doorstep — with clear instructions and attentive support.",
  }
];

const container = document.getElementById("card-container");

CardData.forEach(({bigImg,smallImg,title,badge,desc}) => {
  const card = document.createElement("div");
  card.className = "card";
  

  card.innerHTML = `
  
     <div class="card-left">
     <img src="${bigImg}" class="main-image" alt="Big Image"/>
     <img src="${smallImg}" class="overlay-image" alt="Small Image"/>
  </div>

  <div class="card-right">
  <div class="header-row">
    <div class="badge">${badge}</div>
    <h3>${title}</h3>
    </div>
    <p>${desc}</p>
  </div>
  
  `;

  container.appendChild(card);

 });
 // --- NEW 3D CAROUSEL JAVASCRIPT LOGIC ---
        
        const cards = Array.from(document.querySelectorAll('.card'));
        const totalCards = cards.length;
        let cardIndex = 0;

        function updateCarousel() {
            cards.forEach((card, i) => {
                // Remove all previous positional classes
                card.classList.remove('active', 'prev', 'next');

                // Calculate indices for previous and next cards
                const prevIndex = (cardIndex - 1 + totalCards) % totalCards;
                const nextIndex = (cardIndex + 1) % totalCards;

                // Apply new classes based on the current index
                if (i === cardIndex) {
                    card.classList.add('active');
                } else if (i === prevIndex) {
                    card.classList.add('prev');
                } else if (i === nextIndex) {
                    card.classList.add('next');
                }
            });
        }
        // --- ANIMATION INTERVAL (Your logic, calling the new function) ---
        setInterval(() => {
            cardIndex = (cardIndex + 1) % totalCards;
            updateCarousel();
        }, 3000);

        // Set the initial state of the carousel
        updateCarousel();

 


document.addEventListener('DOMContentLoaded', () => {
    const stage = document.querySelector('.carousel__stage');

    // List of your image sources
    const images = [
        'images/door1.png',
        'images/door2.png',
        'images/door3.png',
        'images/door4.png',
        'images/door5.png'
    ];

    let currentIndex = 0;

    // Create slide elements from the image array
    function createSlides() {
        images.forEach((src, i) => {
            const slide = document.createElement('div');
            slide.className = 'carousel__slide';
            const img = document.createElement('img');
            img.src = src;
            img.alt = `Carousel image ${i + 1}`;
            slide.appendChild(img);
            stage.appendChild(slide);
        });
    }

    // Update slide positions and styles
    function updateCarousel() {
        const slides = document.querySelectorAll('.carousel__slide');
        const numSlides = slides.length;

        slides.forEach((slide, i) => {
            const offset = (i - currentIndex + numSlides) % numSlides;
            let transform = '';
            let opacity = 0;
            let zIndex = 0;

            if (offset === 0) { // Active slide (center)
                transform = 'translateX(0) scale(1)';
                opacity = 1;
                zIndex = 5;
            } else if (offset === 1) { // Next slide (right)
                transform = 'translateX(60%) scale(0.75)';
                opacity = 1;
                zIndex = 4;
            } else if (offset === numSlides - 1) { // Previous slide (left)
                transform = 'translateX(-60%) scale(0.75)';
                opacity = 1;
                zIndex = 4;
            } else { // Hidden slides
                transform = `translateX(${offset > numSlides / 2 ? '-120%' : '120%'}) scale(0.5)`;
                opacity = 0;
                zIndex = 1;
            }

            slide.style.transform = transform;
            slide.style.opacity = opacity;
            slide.style.zIndex = zIndex;
        });
    }

    // Advance to the next slide
    function showNextSlide() {
        currentIndex = (currentIndex + 1) % images.length;
        updateCarousel();
    }

    // Initialize carousel
    createSlides();
    updateCarousel();
    setInterval(showNextSlide, 3000); // Auto-slide every 3 seconds
});

document.addEventListener('DOMContentLoaded', () => {
    const optionsWrapper = document.querySelector('.options-wrapper');
    const titleElement = document.getElementById('dynamic-title');
    
    // Store the initial title text
    const defaultTitle = titleElement.textContent;

    // Add mouseenter event listeners to each option
    document.querySelectorAll('.option-item').forEach(item => {
        item.addEventListener('mouseenter', () => {
            // Get the title from the data-title attribute
            const newTitle = item.getAttribute('data-title');
            titleElement.textContent = newTitle;
        });
    });

    // Add a mouseleave event to the parent container
    optionsWrapper.addEventListener('mouseleave', () => {
        // Reset the title to the default when the mouse leaves the entire area
        titleElement.textContent = defaultTitle;
    });
});



const feedback = [
  {
    name: "Priya S",
    feedback: "Elegant craftsmanship with a divine touch. I loved how I could choose everything — doors, bells, even tray style!",
    image: "images/priya.png",
    rating: 5
  },
  {
    name: "Kavita & Ramesh",
    feedback: "This mandir is not just furniture — it’s a sacred experience. Thank you NiVeda for making it so special",
    image: "images/ramesh.png",
    rating: 4
  },
  {
    name: "Meena R.",
    feedback: "Delivery was fast, packaging was solid, and the instructions made it super simple to put together. The finish is premium",
    image: "images/meena.png",
    rating: 4
  },
];
const feedbackContainer = document.getElementById("feedback-container");

feedback.forEach(({ name, feedback, image, rating }) => {
  const feedbackCard = document.createElement("div");
  feedbackCard.className = "feedback-card";

  // Generate star rating
  const fullStar = "★";
  const emptyStar = "☆";
  const starsHTML = fullStar.repeat(rating) + emptyStar.repeat(5 - rating);

  feedbackCard.innerHTML = `
    <img src="${image}" alt="${name}">
    <h3>${name}</h3>
    <div class="stars">${starsHTML}</div>
    <p>${feedback}</p>
  `;

  feedbackContainer.appendChild(feedbackCard);
});

// Arrow navigation
const leftArrow = document.querySelector(".arrow.left");
const rightArrow = document.querySelector(".arrow.right");

rightArrow.addEventListener("click", () => {
  feedbackContainer.scrollBy({ left: 300, behavior: "smooth" });
});

leftArrow.addEventListener("click", () => {
  feedbackContainer.scrollBy({ left: -300, behavior: "smooth" });
});




