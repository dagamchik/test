(function () {
const body = document.body;
const container = body.appendChild(document.createElement("div"));
container.className = 'container';
let button = document.querySelector('.btn');
button.disabled = true;



function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
}

function getNumbersArr (maxNumber) {
  const result = [];

  for (let i = 1; i <= maxNumber; i += 1) {
    for (let j = 0; j < 2; j += 1) {
      result.push(i);
    }
  }

  shuffleArray(result);
  return result;
}

const numbersArray = getNumbersArr(8);


function createItem(num) {
  const card = document.createElement("div");
  const frontFace = document.createElement("div");
  const backFace = document.createElement("div");
  card.className = 'card';
  card.dataset.number = num;
  frontFace.className = 'front';
  backFace.className = 'back';
  backFace.textContent = num;
  card.appendChild(frontFace);
  card.appendChild(backFace);

  return card;
}


function pushItems(numArr) {
  numArr.forEach(function (number) {
    const item = createItem(number);
    container.appendChild(item);
  });
}
pushItems(numbersArray);

const cards = document.querySelectorAll('.card');

let hasFlippedCard = false;
let lockCards = false;
let firstCard, secondCard;

function flipCard() {
    if (lockCards) return;
    if (this === firstCard) return;
    this.classList.add('flip');

   if (!hasFlippedCard) {
     hasFlippedCard = true;
     firstCard = this;
     return;
   }

   secondCard = this;

   checkCards();


  cards.forEach(function (item) {
    if (item.classList.contains('flip')) {
      button.disabled = false;
    }
  })


}

function checkCards() {
  if (firstCard.dataset.number === secondCard.dataset.number) {
    disableCards();
    return;
  }

  unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
  resetBoard();
}

function unflipCards() {
    lockCards = true;
  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    resetBoard();
  }, 1000);
}

function resetBoard() {
  [hasFlippedCard, lockCards] = [false, false];
  [firstCard, secondCard] = [null, null];
}

cards.forEach(card => card.addEventListener('click', flipCard));

})();









function newGame () {
  document.querySelector('.btn').addEventListener('click', function () {
    const container = document.querySelector('.container');
    container.innerHTML = "";
const body = document.body;
let button = document.querySelector('.btn');
button.disabled = true;



function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
}

function getNumbersArr (maxNumber) {
  const result = [];

  for (let i = 1; i <= maxNumber; i += 1) {
    for (let j = 0; j < 2; j += 1) {
      result.push(i);
    }
  }

  shuffleArray(result);
  return result;
}

const numbersArray = getNumbersArr(8);


function createItem(num) {
  const card = document.createElement("div");
  const frontFace = document.createElement("div");
  const backFace = document.createElement("div");
  card.className = 'card';
  card.dataset.number = num;
  frontFace.className = 'front';
  backFace.className = 'back';
  backFace.textContent = num;
  card.appendChild(frontFace);
  card.appendChild(backFace);

  return card;
}


function pushItems(numArr) {
  numArr.forEach(function (number) {
    const item = createItem(number);
    container.appendChild(item);
  });
}
pushItems(numbersArray);

const cards = document.querySelectorAll('.card');

let hasFlippedCard = false;
let lockCards = false;
let firstCard, secondCard;

function flipCard() {
    if (lockCards) return;
    if (this === firstCard) return;
    this.classList.add('flip');

   if (!hasFlippedCard) {
     hasFlippedCard = true;
     firstCard = this;
     return;
   }

   secondCard = this;

   checkCards();


  cards.forEach(function (item) {
    if (item.classList.contains('flip')) {
      button.disabled = false;
    }
  })


}

function checkCards() {
  if (firstCard.dataset.number === secondCard.dataset.number) {
    disableCards();
    return;
  }

  unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
  resetBoard();
}

function unflipCards() {
    lockCards = true;
  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    resetBoard();
  }, 1000);
}

function resetBoard() {
  [hasFlippedCard, lockCards] = [false, false];
  [firstCard, secondCard] = [null, null];
}

cards.forEach(card => card.addEventListener('click', flipCard));
  });
}

newGame();
