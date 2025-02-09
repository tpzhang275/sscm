document.addEventListener("DOMContentLoaded", function() {
    const h2Element = document.querySelector(".new-content h2");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                h2Element.style.animation = "fadeInUp 2s ease-in-out forwards";
            } else {
                h2Element.style.animation = "none"; // 重置动画
            }
        });
    }, { threshold: 0.1 });

    observer.observe(h2Element);
});

// 轮播器功能
let currentIndex = 0;
const track = document.querySelector('.carousel-track');
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

function moveToSlide(index) {
    track.style.transform = `translateX(-${index * 100}%)`;
}

function startAutoPlay() {
    setInterval(() => {
        currentIndex = (currentIndex + 1) % totalItems;
        moveToSlide(currentIndex);
    }, 3000);
}

// 初始化轮播
startAutoPlay();