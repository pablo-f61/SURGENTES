document.addEventListener("DOMContentLoaded", function() {
    const carruselInner = document.querySelector(".carrusel-inner");
    const items = document.querySelectorAll(".carrusel-item");
    const prevButton = document.querySelector(".carrusel-control.prev");
    const nextButton = document.querySelector(".carrusel-control.next");
    let currentIndex = 0;

    function updateCarrusel() {
        const offset = -currentIndex * 100;
        carruselInner.style.transform = `translateX(${offset}%)`;
    }

    prevButton.addEventListener("click", function() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = items.length - 1;
        }
        updateCarrusel();
    });

    nextButton.addEventListener("click", function() {
        if (currentIndex < items.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateCarrusel();
    });
});