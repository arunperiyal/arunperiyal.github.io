/**
 * Carousel Auto-Rotation
 * Automatically cycles through carousel slides every 3 seconds
 * Used on homepage and research page
 */

document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector('.carousel-track');

    if (track) {
        let index = 0;
        const slideCount = track.children.length;

        // Auto-rotate every 3 seconds
        setInterval(() => {
            index = (index + 1) % slideCount;
            track.style.transform = `translateX(-${index * 100}%)`;
        }, 3000);
    }
});
