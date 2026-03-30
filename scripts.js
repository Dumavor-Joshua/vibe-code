// scripts.js

// Navigation Active Page Highlighting
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(nav => nav.classList.remove('active'));
        this.classList.add('active');
    });
});

// Lightbox Functionality
const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox img');
const thumbnails = document.querySelectorAll('.thumbnail');

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', function() {
        lightboxImg.src = this.src;
        lightbox.classList.add('active');
    });
});

lightbox.addEventListener('click', function() {
    lightbox.classList.remove('active');
});

// Tic-Tac-Toe Logic
const ticTacToe = () => {
    const cells = document.querySelectorAll('.tic-tac-toe .cell');
    let currentPlayer = 'X';
    let gameActive = true;

    const winningConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    const handleCellClick = (cell, index) => {
        if (cell.textContent !== '' || !gameActive) return;
        cell.textContent = currentPlayer;
        checkForWinner();
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    };

    const checkForWinner = () => {
        let roundWon = false;
        for (let i = 0; i < winningConditions.length; i++) {
            const [a, b, c] = winningConditions[i];
            if (cells[a].textContent === '' || 
                cells[b].textContent === '' || 
                cells[c].textContent === '') continue;
            if (cells[a].textContent === cells[b].textContent && 
                cells[a].textContent === cells[c].textContent) {
                roundWon = true;
                break;
            }
        }
        if (roundWon) {
            alert(`Player ${currentPlayer} wins!`);
            gameActive = false;
            return;
        }
        if ([...cells].every(cell => cell.textContent !== '')) {
            alert('Draw!');
            gameActive = false;
        }
    };

    cells.forEach((cell, index) => {
        cell.addEventListener('click', () => handleCellClick(cell, index));
    });
};

ticTacToe();

// Snake Game Logic
const snakeGame = () => {
    // Implement Snake game logic here
};

// Memory Card Match Logic
const memoryCardMatch = () => {
    // Implement Memory Card Matching game logic here
};

// Initialize Games
snakeGame();
memoryCardMatch();
