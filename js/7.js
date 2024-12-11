const closedBoxImage = 'img/닫힌상자1.png';
const emptyOpenBoxImage = 'img/열린상자.png';
const dogBoxImage = 'img/강아지상자.png';

let boxes, speeds, dogBoxIndex, animationFrameId;

function initializeGame() {
    // 이전 애니메이션 루프 중지
    if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
    }

    boxes = document.querySelectorAll('.box');
    dogBoxIndex = Math.floor(Math.random() * boxes.length); // 강아지가 있는 상자를 랜덤으로 선택

    speeds = Array.from({ length: boxes.length }, () => ({
        dx: (Math.random() * 2 + 0.5) * (Math.random() < 0.5 ? -1 : 1), // x축 속도: 0.5 ~ 2.5 랜덤
        dy: (Math.random() * 2 + 0.5) * (Math.random() < 0.5 ? -1 : 1), // y축 속도: 0.5 ~ 2.5 랜덤
        stopped: false, // 멈춤 상태 추적
    }));

    // 상자 초기화
    boxes.forEach((box) => {
        box.style.backgroundImage = `url('${closedBoxImage}')`; // 닫힌 상자 이미지로 초기화
        box.style.left = `${Math.random() * (window.innerWidth - 200)}px`;
        box.style.top = `${Math.random() * (window.innerHeight - 200)}px`;
        box.style.transform = 'scale(1)';
    });

    moveBoxes();
}

function moveBoxes() {
    boxes.forEach((box, index) => {
        if (speeds[index].stopped) return; // 멈춘 상자는 이동하지 않음

        const rect = box.getBoundingClientRect();
        let newX = rect.left + speeds[index].dx;
        let newY = rect.top + speeds[index].dy;

        // 화면 경계를 넘어가면 방향 반전
        if (newX <= 0 || newX + rect.width >= window.innerWidth) {
            speeds[index].dx *= -1;
            newX = Math.max(0, Math.min(window.innerWidth - rect.width, newX));
        }
        if (newY <= 0 || newY + rect.height >= window.innerHeight) {
            speeds[index].dy *= -1;
            newY = Math.max(0, Math.min(window.innerHeight - rect.height, newY));
        }

        // 새 위치 설정
        box.style.left = `${newX}px`;
        box.style.top = `${newY}px`;
    });

    animationFrameId = requestAnimationFrame(moveBoxes); // 다음 프레임 요청
}

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('dogBoxModal');
    const heartAnimation1 = document.getElementById('heart1');
    const heartAnimation2 = document.getElementById('heart2');

    boxes = document.querySelectorAll('.box');

    boxes.forEach((box, index) => {
        box.addEventListener('click', () => {
            speeds[index].stopped = true;
            if (index === dogBoxIndex) {
                box.style.backgroundImage = `url('${dogBoxImage}')`;

                setTimeout(() => {
                    modal.classList.add('show');

                    // Start the animations for hearts
                    heartAnimation1.style.opacity = 1;
                    heartAnimation1.style.animation = 'heartMove1 3s ease-out infinite';
                    heartAnimation2.style.opacity = 1;
                    heartAnimation2.style.animation = 'heartMove2 3s ease-out infinite';

                    modal.addEventListener('click', () => {
                        modal.classList.remove('show');

                        // Stop the animations for hearts
                        heartAnimation1.style.opacity = 0;
                        heartAnimation1.style.animation = 'none';
                        heartAnimation2.style.opacity = 0;
                        heartAnimation2.style.animation = 'none';

                        initializeGame();
                    });
                }, 400);
            } else {
                box.style.backgroundImage = `url('${emptyOpenBoxImage}')`;
            }
            box.style.transform = 'scale(1.2)';
        });
    });

    initializeGame();
});