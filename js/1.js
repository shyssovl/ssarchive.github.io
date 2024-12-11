// 슬라이더 관련 변수
const images = document.querySelectorAll('.images img');
const nextButton = document.getElementById('nextButton'); // 다음 버튼 변수로 지정
let currentIndex = 0;
const totalImages = images.length;

// 현재 이미지 업데이트 함수
function updateSlider() {
    images.forEach((img, index) => {
        img.classList.toggle('active', index === currentIndex);
    });
}

// 다음 버튼 클릭 이벤트
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex === totalImages - 1) ? 0 : currentIndex + 1;
    updateSlider();
});
