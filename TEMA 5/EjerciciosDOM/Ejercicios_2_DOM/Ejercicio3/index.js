const cards = document.querySelectorAll('.card');
let flippedCards = [];
let isFlipping = false;
let pairsFound = 0;

cards.forEach((card) => {
  card.addEventListener('click', flipCard);
});

function flipCard() {
  if (isFlipping) return;
  if (flippedCards.length < 2 && !this.classList.contains('flipped')) {
    this.classList.add('flipped');
    flippedCards.push(this);

    if (flippedCards.length === 2) {
      checkForMatch();
    }
  }
}

function checkForMatch() {
  const [card1, card2] = flippedCards;
  const value1 = card1.getAttribute('data-id');
  const value2 = card2.getAttribute('data-id');

  if (value1 === value2) {
    // Match found
    flippedCards = [];
    pairsFound++;

    if (pairsFound === 6) {
      // All pairs found, you can display a winning message here
      document.getElementById('message').textContent = 'Congratulations! You found all pairs!';
    }
  } else {
    // No match, flip the cards back
    isFlipping = true;
    setTimeout(() => {
      card1.classList.remove('flipped');
      card2.classList.remove('flipped');
      flippedCards = [];
      isFlipping = false;
    }, 1000); // Adjust the delay as needed
  }
}

// Add a reset button functionality
const resetButton = document.getElementById('reset-button');
resetButton.addEventListener('click', resetGame);

function resetGame() {
  cards.forEach((card) => {
    card.classList.remove('flipped');
  });
  flippedCards = [];
  pairsFound = 0;
  document.getElementById('message').textContent = 'Good luck!';
}
