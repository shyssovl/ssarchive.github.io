// 챗 gpt를 사용하여 제작하였습니다.
// 캐릭터 배열
const characters = [
    { fullBodyImg: "fullBodyImage1", pantsImg: "pantsImage1", canvas: "canvas1", colorPicker: "pantsColorPicker1" },
    { fullBodyImg: "fullBodyImage2", pantsImg: "pantsImage2", canvas: "canvas2", colorPicker: "pantsColorPicker2" },
    { fullBodyImg: "fullBodyImage3", pantsImg: "pantsImage3", canvas: "canvas3", colorPicker: "pantsColorPicker3" },
];

// 캔버스와 컨텍스트 설정 및 이미지 로드 후 캐릭터 그리기
window.onload = function() {
    characters.forEach(character => {
        const canvas = document.getElementById(character.canvas);
        const ctx = canvas.getContext("2d");
        const fullBodyImg = document.getElementById(character.fullBodyImg);
        const pantsImg = document.getElementById(character.pantsImg);

        // 캐릭터 그리기 함수
        function drawCharacter() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // 바지 이미지의 색상 변경을 위한 오프스크린 캔버스 생성
            const tempCanvas = document.createElement("canvas");
            tempCanvas.width = canvas.width;
            tempCanvas.height = canvas.height;
            const tempCtx = tempCanvas.getContext("2d");

            // 바지 이미지를 오프스크린 캔버스에 그리기
            tempCtx.drawImage(pantsImg, 0, 0, canvas.width, canvas.height);

            // 바지 색상 덮어씌우기
            const pantsColor = document.getElementById(character.colorPicker).value;
            tempCtx.globalCompositeOperation = 'source-atop'; // 바지 부분만 색 덮기
            tempCtx.fillStyle = pantsColor;
            tempCtx.fillRect(0, 0, canvas.width, canvas.height);

            // 메인 캔버스에 바지 이미지 먼저 그리기
            ctx.drawImage(tempCanvas, 0, 0);

            // 풀바디 이미지를 바지 이미지 위에 그리기
            ctx.drawImage(fullBodyImg, 0, 0, canvas.width, canvas.height);
        }

        // 컬러픽커 이벤트 리스너
        document.getElementById(character.colorPicker).addEventListener("input", drawCharacter);

        // 초기 캐릭터 그리기
        drawCharacter();
    });
};
