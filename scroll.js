// Function to handle movie scrolling with loop
function scrollMovies(containerId, scrollAmount) {
    const container = document.getElementById(containerId);
    container.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
    });

    // Check if scrolled to the end (right)
    if (scrollAmount > 0 && container.scrollLeft + container.clientWidth >= container.scrollWidth) {
        // Scroll to the beginning (left) with no animation
        container.scrollTo({
            left: 0,
            behavior: 'auto'
        });
    } else if (scrollAmount < 0 && container.scrollLeft <= 0) {
        // Scroll to the end (right) with no animation
        container.scrollTo({
            left: container.scrollWidth,
            behavior: 'auto'
        });
    }
}

// Attach event listeners to scroll buttons
document.getElementById('scrollLeft').addEventListener('click', () => {
    scrollMovies('movieScroll', -200); // Scroll left by 200px
});

document.getElementById('scrollRight').addEventListener('click', () => {
    scrollMovies('movieScroll', 200); // Scroll right by 200px
});
