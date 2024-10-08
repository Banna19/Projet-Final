const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;
let currentIndex = 0;

function updateCarousel() {
    const carouselInner = document.getElementById('carouselInner');
    const offset = -currentIndex * 100; // Chaque item prend 100% de la largeur
    carouselInner.style.transform = `translateX(${offset}%)`;
}

document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateCarousel();
});

document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel();
});

// Initialiser le carousel
updateCarousel();
