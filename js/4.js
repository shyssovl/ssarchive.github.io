let currentPage = 0; // 현재 페이지 상태
const rightPages = [
    document.getElementById('rightPage1'),
    document.getElementById('rightPage2'),
    document.getElementById('rightPage3'),
    document.getElementById('rightPage4'),
    document.getElementById('rightPage5')
];
const backPages = [
    document.getElementById('backPage1'),
    document.getElementById('backPage2'),
    document.getElementById('backPage3'),
    document.getElementById('backPage4'),
    document.getElementById('backPage5')
];

const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

nextBtn.addEventListener('click', () => {
    if (currentPage < rightPages.length - 1) {  // 마지막 페이지는 넘기지 x
        turnNextPage();
    }
    updateButtons(); // 버튼 상태 업데이트
});

prevBtn.addEventListener('click', () => {
    if (currentPage > 0) {
        turnPrevPage();
    }
    updateButtons(); // 버튼 상태 업데이트
});

function turnNextPage() {
    // 오른쪽 페이지 넘기기
    rightPages[currentPage].style.transform = 'rotateY(-180deg)';
    backPages[currentPage].style.zIndex = rightPages.length - currentPage; // 뒷면 페이지 앞으로
    currentPage++;
}

function turnPrevPage() {
    currentPage--;
    // 오른쪽 페이지 다시 원상태로 돌리기
    rightPages[currentPage].style.transform = 'rotateY(0deg)';
    backPages[currentPage].style.zIndex = 0; // 뒷면 페이지 숨기기
}

function updateButtons() {
    // 마지막 페이지에서 다음 버튼 비활
    nextBtn.disabled = currentPage === rightPages.length - 1;
    // 첫 페이지에서 이전 버튼 비활
    prevBtn.disabled = currentPage === 0;
}

// 페이지 로드 시 버튼 상태 초기화
updateButtons();