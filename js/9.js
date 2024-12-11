    const aniBoxes = document.querySelectorAll('.ani-box');
    const friendAnimation = document.getElementById("friendAnimation");

    // 불꽃 친구 애니메이션 반복 설정
    function restartFriendAnimation() {
    friendAnimation.style.animation = "none"; // 애니메이션 정지
    setTimeout(() => {
    friendAnimation.style.animation = "friendgif 1s steps(6) infinite"; // 2초 후 재시작
}, 2000);
}

    // 불꽃 친구 애니메이션이 끝날 때마다 재시작
    friendAnimation.addEventListener("animationiteration", restartFriendAnimation);

    // 클릭 이벤트로 불꽃놀이 애니메이션 시작
    friendAnimation.addEventListener("click", () => {
    aniBoxes.forEach((box, i) => {
        setTimeout(() => {
            box.style.visibility = "visible"; // 애니메이션 보이기
            box.style.animation = "gif 3s infinite steps(24)"; // 애니메이션 재생
        }, i * 500); // 0.5초 간격으로 지연
    });
});
