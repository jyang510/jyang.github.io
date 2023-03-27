// 카운터
let count = 0;

function increase() {
count++;
document.getElementById('count').innerText = count;
}

// 이미지 슬라이드
const images = document.querySelectorAll(".slider-img");
const prevBtn = document.querySelector(".slider-btn-prev");
const nextBtn = document.querySelector(".slider-btn-next");
let currentIndex = 0;

function showImage(index) {
if (index < 0) {
    currentIndex = images.length - 1;
} else if (index >= images.length) {
    currentIndex = 0;
}
for (let i = 0; i < images.length; i++) {
    images[i].style.display = "none";
}
images[currentIndex].style.display = "block";
}

prevBtn.addEventListener("click", () => {
currentIndex--;
showImage(currentIndex);
});

nextBtn.addEventListener("click", () => {
currentIndex++;
showImage(currentIndex);
});

showImage(currentIndex);
    
//   현재 시각

function showTime() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = "AM";

    if (h == 0) {
        h = 12;
    }

    if (h > 12) {
        h = h - 12;
        session = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("clock").innerText = time;
    document.getElementById("clock").textContent = time;

    setTimeout(showTime, 1000);
}

showTime();