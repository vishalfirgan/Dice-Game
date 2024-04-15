'use strict';

// console.log("hello vishal string's");

// let s = 'vishal';

// let s2 = 'vishal';

// let a1 = new String('vishal');

// console.log('\n');
// console.log(s.charAt(0));
// console.log(a1.charAt(0));
// console.log(s.indexOf('i'));
// selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');

const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const diceEl = document.querySelector('.dice');

// buttons
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

// starting condition & restart

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;

  diceEl.classList.add('hidden');

  current0El.textContent = 0;
  current1El.textContent = 0;

  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
init();
// rolling dice functionallity

btnRoll.addEventListener('click', function () {
  if (playing) {
    //generating random dice number
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);

    // display dice
    diceEl.classList.remove('hidden');

    diceEl.src = `dice-${dice}.png`;

    //   currentScore += dice;

    // mine

    // mine
    // check for 1 and switch player

    if (dice !== 1) {
      //   add current score to total of this player
      currentScore += dice;
      // current0El.textContent = currentScore;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //  switch player
      switchPlayer();
    }
  }
});

// hadling hols button so player can add their score to their global score and give cance to other player
btnHold.addEventListener('click', function () {
  //

  if (playing) {
    scores[activePlayer] += currentScore;

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // check winner !

    if (scores[activePlayer] >= 20) {
      // finish the game
      playing = false;
      diceEl.classList.add('hidden');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
    } else {
      // switch player
      switchPlayer();
    }
  }
});

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer !== 0 ? 0 : 1;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// resetting the game
//  here below we are not calling the init() fun rather we are aasignigthe fun as init without () because it will be claled after clicking

btnNew.addEventListener('click', init);
