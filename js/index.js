// 타이틀 텍스트 한 글자씩 span으로 감싸기
const title = document.getElementById("title-text");
const text = title.textContent;
title.innerHTML = "";

[...text].forEach((char, index) => {
    const span = document.createElement("span");
    span.textContent = char;
    title.appendChild(span);
});