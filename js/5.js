// 사용자 이름 저장 변수
let userName = "";
const aniBox = document.getElementById("aniBox");
const text = document.getElementById("text");

// 페이지 로드 시 이름을 입력받기
window.onload = function() {
    setUserName();
}

// 사용자 이름 설정
function setUserName() {
    userName = prompt("이름을 입력하세요:");
    if (userName) {
        text.textContent = `${userName}, 너를 좋아해 !`;
    } else {
        alert("이름을 입력하지 않으셨습니다.");
        text.textContent = `다시 이름을 입력하도록 해 !`;
    }
}

// 애니박스 클릭 이벤트
aniBox.addEventListener("click", () => {
    if (userName) {
        // 이름이 입력된 경우
        aniBox.style.background = 'url("img/카제하야애니.png")'; // 원래 애니메이션 이미지
        aniBox.style.animation = "gif .7s infinite steps(10)"; // 애니메이션 시작
        text.style.visibility = "visible"; // 말풍선 표시
        document.body.style.background = 'url("img/배경카제하야하트.png") no-repeat center center fixed'; // 배경 이미지 변경
        document.body.style.backgroundSize = 'cover'; // 배경 이미지 크기 설정
    } else {
        // 이름이 입력되지 않은 경우
        aniBox.style.background = 'url("img/카제하야단호애니.png")'; // 대체 애니메이션 이미지
        aniBox.style.animation = "alternateGif .7s infinite steps(11)"; // 대체 애니메이션 시작
        aniBox.style.backgroundSize = "cover"; // 배경 크기 조정
        text.textContent = "다시 이름을 입력하도록 해!";
        text.style.visibility = "visible"; // 경고 메시지 표시
        document.body.style.background = 'url("img/배경카제하야칙칙.png") no-repeat center center fixed'; // 배경 이미지 변경
        document.body.style.backgroundSize = 'cover'; // 배경 이미지 크기 설정
    }
});