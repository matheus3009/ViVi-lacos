let currentIndex = 0;
let autoSlideInterval;

function moveCarousel(direction) {
    const imagesContainer = document.querySelector('.carousel-images');
    const totalImages = document.querySelectorAll('.carousel-images img').length;

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalImages - 1;
    } else if (currentIndex >= totalImages) {
        currentIndex = 0;
    }

    const offset = -currentIndex * 100;
    imagesContainer.style.transform = `translateX(${offset}%)`;
}

function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        moveCarousel(1);
    }, 3000); // Muda a imagem a cada 3 segundos
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

document.addEventListener('DOMContentLoaded', () => {
    startAutoSlide();

    const carousel = document.querySelector('.carousel');
    carousel.addEventListener('mouseenter', stopAutoSlide);
    carousel.addEventListener('mouseleave', startAutoSlide);

    carousel.addEventListener('touchstart', handleTouchStart);
    carousel.addEventListener('touchmove', handleTouchMove);
    carousel.addEventListener('touchend', handleTouchEnd);
});
