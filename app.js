const productContainer = document.querySelector('.product-container');
const scrollLeftButton = document.getElementById('scroll-left');
const scrollRightButton = document.getElementById('scroll-right');

let scrollAmount = 0;
const productWidth = document.querySelector('.product').offsetWidth + 20; // 20 is the margin-right

scrollLeftButton.addEventListener('click', () => {
    scrollAmount -= productWidth;
    if (scrollAmount < 0) {
        scrollAmount = 0; // Prevent scrolling beyond the first product
    }
    productContainer.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
    });
});

scrollRightButton.addEventListener('click', () => {
    const maxScroll = productContainer.scrollWidth - productContainer.clientWidth;
    scrollAmount += productWidth;
    if (scrollAmount > maxScroll) {
        scrollAmount = maxScroll; // Prevent scrolling beyond the last product
    }
    productContainer.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
    });
});
