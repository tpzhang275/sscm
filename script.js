// 获取logo元素
const logo = document.getElementById('logo');

// 添加点击事件，点击时刷新页面
logo.addEventListener('click', function() {
  location.reload();  // 刷新页面
});

// 禁止 Ctrl + 鼠标滚轮 缩放
window.addEventListener('wheel', function (e) {
  if (e.ctrlKey) {
      e.preventDefault();
  }
}, { passive: false });

// 禁止 Ctrl + + 和 Ctrl + - 缩放
window.addEventListener('keydown', function (e) {
  if (e.ctrlKey && (e.key === '+' || e.key === '-')) {
      e.preventDefault();
  }
});

// 禁止触摸缩放
window.addEventListener('gesturestart', function(e) {
  e.preventDefault();
});


























document.addEventListener("DOMContentLoaded", function () {
    let isAtPage2 = false; // 记录当前是否在第二页
    const mobileDownloadButton = document.getElementById("mobile-download");
    const pageContent = document.querySelector(".page-content");
    const newContent = document.querySelector(".new-content");

    function goToPage2() {
        if (!isAtPage2) {
            pageContent.classList.add("hide");  // 隐藏页面1
            newContent.classList.add("show");   // 显示页面2
            isAtPage2 = true;
            mobileDownloadButton.classList.add("hide"); // 滑动到第二页时隐藏下载按钮
        }
    }

    function goToPage1() {
        if (isAtPage2) {
            pageContent.classList.remove("hide");  // 显示页面1
            newContent.classList.remove("show");   // 隐藏页面2
            isAtPage2 = false;
            mobileDownloadButton.classList.remove("hide"); // 回到第一页时显示下载按钮
        }
    }

    // 监听鼠标滚轮
    window.addEventListener("wheel", function (event) {
        if (event.deltaY > 0) {
            goToPage2(); // 向下滚动到第二页
        } else if (event.deltaY < 0) {
            goToPage1(); // 向上滚动回第一页
        }
    });

    // 监听移动端触摸滑动
    let startY = 0;
    window.addEventListener("touchstart", function (event) {
        startY = event.touches[0].clientY;
    });

    window.addEventListener("touchend", function (event) {
        let endY = event.changedTouches[0].clientY;

        if (startY - endY > 50) {
            goToPage2(); // 向上滑动，进入第二页
        } else if (endY - startY > 50) {
            goToPage1(); // 向下滑动，回到第一页
        }
    });
});
