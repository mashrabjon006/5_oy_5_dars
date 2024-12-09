let moves = 0;
const grid = document.getElementById('grid');
const info = document.getElementById('info');
const resetButton = document.getElementById('resetButton');

function getRandomColor() {
    const rand = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += rand[Math.floor(Math.random() * 16)];
    }
    return color;
}// rand dan tasodiy raqam va harif oladi va bundan rang yasab oladi oladi

function handleBlockClick(block) {
    block.style.backgroundColor = getRandomColor();
    checkWin();
}

function checkWin() {
    const blocks = document.querySelectorAll('.block');
    const firstColor = blocks[0].style.backgroundColor;
    const allSame = Array.from(blocks).every(block => block.style.backgroundColor === firstColor);
    
    if (allSame && firstColor !== 'lightgray') {
        info.textContent = `Tabriklaymiz! Siz o'yinni tugatdingiz (${moves} harakat).`;
        resetButton.style.display = 'block';  // Qayta oynaw tugmasini korsatish
    }
}

function createBlocks() {
    for (let i = 0; i < 9; i++) {
        const block = document.createElement('div');
        block.className = 'block';

        block.addEventListener('click', () => handleBlockClick(block));

        grid.appendChild(block);
    }
}

function resetGame() {
    const blocks = document.querySelectorAll('.block');
    blocks.forEach(block => block.style.backgroundColor = 'lightgray');
    moves = 0;
    info.textContent = `Harakatlar soni: ${moves}`;
    resetButton.style.display = 'none';  // Qayta oynaw tugmasini yashiriw
}

createBlocks();

resetButton.addEventListener('click', resetGame);
