const tarotDeck = [
    { name: "경찰", meaning: "영화를 보고 난 후 너무 멋있어서 경찰이 되고 싶었던 어린 소현이", image: "img/타로경찰.png" },
    { name: "화가", meaning: "그림 그리는 걸 너무나 좋아했던 어린 소현이", image: "img/타로화가.png" },
    { name: "꽃집 사장님", meaning: "꽃집 언니를 상상하면 너무 예뻤어서 꽃집 사장님이 되고 싶었던 어린 소현이", image: "img/타로꽃집.png" },
    { name: "파티시엘", meaning: "애니메이션 '꿈빛 파티시엘'을 인상 깊게 봤던 어린 소현이", image: "img/타로파티시엘.png" },
    { name: "스타일리스트", meaning: "예쁜 옷을 좋아했던 어린 소현이", image: "img/타로스타일리스트.png" },
    { name: "현모양처", meaning: "집안 일도 좋아하고 행복한 가정을 이루고 싶었던 어린 소현이", image: "img/타로현모양처.png" },
];

// 결과 표시 관련 DOM 변수
const resultCard = document.getElementById("result-card");
const resultText = document.getElementById("result-text");
const resultModal = document.getElementById("result-modal");

let cardSelected = false;

function drawTarot(cardElement) {
    if (cardSelected) return;

    const randomIndex = Math.floor(Math.random() * tarotDeck.length);
    const selectedCard = tarotDeck[randomIndex];

    cardElement.style.transform = "translateY(-20px)";

    setTimeout(() => {
        resultCard.style.backgroundImage = `url('${selectedCard.image}')`;
        resultText.innerHTML = `
            <h2>${selectedCard.name}</h2>
            <p>${selectedCard.meaning}</p>
        `;
        resultModal.style.display = "flex";
    }, 600);

    cardSelected = true;
}

// 닫기
function closeResult() {
    resultModal.style.display = "none";
    resetCards();
}

// 리셋
function resetCards() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.style.transform = "translateY(0)";
        card.onclick = function() { drawTarot(this); };
    });
    cardSelected = false;
}
