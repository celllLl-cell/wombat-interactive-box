// script.js

// 获取 DOM 元素
const box1 = document.getElementById('box1');
const box2 = document.getElementById('box2');
const popup = document.getElementById('popup-display');
const contentArea = document.getElementById('gift-content');
const closeBtn = document.getElementById('close-btn');

// 定义每个盒子里的内容
const giftContents = {
    box1: "🎁 Happy every day!！🌟",
    box2: "🎄 Happier every day!！🌟"
};


function showGift(content) {
    contentArea.textContent = content; 
    popup.style.display = 'block';   
}


box1.addEventListener('click', () => {
    showGift(giftContents.box1);
});

box2.addEventListener('click', () => {
    showGift(giftContents.box2);
});


closeBtn.addEventListener('click', () => {
    popup.style.display = 'none'; 
});


document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        popup.style.display = 'none';
    }
});