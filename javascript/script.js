const menuIcon = document.querySelector('.menu-icon');
const menuList = document.querySelector('.menu-list');

menuIcon.addEventListener('click', () => {
    menuList.classList.toggle('show');
});


document.addEventListener("DOMContentLoaded", function () {
    let SlideAtual = 0;
    const slides = document.querySelectorAll(".slide");

    function showSlide(index) {
        slides.forEach((slide) => (slide.style.display = "none"));
        slides[index].style.display = "block";
    }

    function nextSlide() {
        SlideAtual = (SlideAtual + 1) % slides.length;
        showSlide(SlideAtual);
    }

    function autoSlide() {
        nextSlide();
    }

    showSlide(SlideAtual);

    setInterval(autoSlide, 5000);
});
