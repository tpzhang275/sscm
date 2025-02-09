document.addEventListener("DOMContentLoaded", function () {
    let isAtPage2 = false; // 记录当前是否在第二页

    function goToPage2() {
        if (!isAtPage2) {
            document.body.classList.add("body-at-page2");
            isAtPage2 = true;
        }
    }

    function goToPage1() {
        if (isAtPage2) {
            document.body.classList.remove("body-at-page2");
            isAtPage2 = false;
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

