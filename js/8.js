// 변수 지정
const gachaMachine = document.getElementById("gachaMachine");
const images = document.querySelectorAll("#result img");
const overlay = document.getElementById("overlay");
const randomResult = document.getElementById("randomResult");
const capsules = document.querySelectorAll(".capsules img");





// 가챠 머신 클릭 이벤트
gachaMachine.addEventListener("click", () => {
    // 가챠머신과 캡슐 애니메이션 시작
    gachaMachine.style.animation = "shake 0.1s infinite";
    capsules.forEach((capsule, index) => {
        capsule.style.animation = index % 2 === 0 ? "capsuleShake1 0.1s infinite" : "capsuleShake2 0.1s infinite";
    });

    images.forEach(img => img.style.display = "none");

    // 2.2초 후 애니메이션 멈추고 결과 표시
    setTimeout(() => {
        gachaMachine.style.animation = "none";
        capsules.forEach(capsule => capsule.style.animation = "none");

        const randomIndex = Math.floor(Math.random() * images.length);
        randomResult.src = images[randomIndex].src;
        overlay.style.display = "flex";
    }, 2200);
});

// 오버레이 클릭하면 닫아짐.
overlay.addEventListener("click", () => {
    overlay.style.display = "none";
});






// 배경 이미지를 저장한 배열
const backgrounds = [
    "img/배경핑크파랑스트라이프.png",
    "img/배경핑크파랑스트라이프2.png",
    "img/배경핑크파랑스트라이프3.png"
];

// 배경을 0.5초마다 변경하는 함수
let currentBackground = 0;
setInterval(() => {
    currentBackground = (currentBackground + 1) % backgrounds.length;
    document.body.style.backgroundImage = `url(${backgrounds[currentBackground]})`;
}, 500); // 0.5초마다 변경