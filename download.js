document.addEventListener("DOMContentLoaded", function () {
    var downloadLink = document.getElementById("download-link");

    if (!downloadLink) return; // 如果找不到元素，则不执行下面的代码

    // 判断设备类型
    var userAgent = navigator.userAgent.toLowerCase();
    if (/android/.test(userAgent)) {
        downloadLink.href = "https://static.dhsf.huiyuehz.com/Package/promote/206316_121104_20250205012953NYSoTU.apk"; // 安卓下载地址
    } else if (/iphone|ipad|ipod/.test(userAgent)) {
        downloadLink.href = "https://static.dhsf.huiyuehz.com/Package/promote/206316_121107_20250204224347mGaFgd.ipa"; // App Store 地址
    } else {
        downloadLink.href = "https://static.dhsf.huiyuehz.com/Package/promote/206316_106724_211962_20250205012937.zip"; // PC 端下载地址
    }
});
