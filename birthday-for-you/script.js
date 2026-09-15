function openWebsite() {

    document.querySelector('.birthday').scrollIntoView({
        behavior: 'smooth'
    });

}


function openLetter() {

    const letter = document.getElementById('letter');

    letter.classList.toggle('show');

}


function showSurprise() {

    const surprise = document.getElementById('surprise-message');

    surprise.classList.toggle('show');

}
// หัวใจลอย
function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "♡";

    heart.classList.add("floating-heart");

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.animationDuration =
        (3 + Math.random() * 3) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

setInterval(createHeart, 1800);
// เปิดรูปใหญ่

function openImage(image) {

    const modal = document.getElementById("imageModal");

    const bigImage = document.getElementById("bigImage");

    bigImage.src = image.src;

    modal.classList.add("show");

}


// ปิดรูป

function closeImage() {

    const modal = document.getElementById("imageModal");

    modal.classList.remove("show");

}
// เป่าเทียน

function blowCandles() {

    const flames = document.querySelectorAll(".flame");

    const button = document.getElementById("blowButton");

    const message = document.getElementById("wishMessage");


    // ดับไฟทุกเล่ม

    flames.forEach(function(flame) {

        flame.style.display = "none";

    });


    // เปลี่ยนข้อความบนปุ่ม

    button.textContent = "อธิษฐานแล้ว ♡";


    // แสดงข้อความ

    message.classList.add("show");

}