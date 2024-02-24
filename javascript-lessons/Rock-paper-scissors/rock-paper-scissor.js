let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  loses: 0,
  ties: 0
};
updateScoreElement();

/*Auto play game advanced functions using interval functions */
function autoPlay() {
  setInterval(function () {
    playerMove();
  }, 1000)
}
/*Function to play game and inputing player move and comparing to computer move*/

function playerMove(playerMove) {
  const compMove = getComputerMove();
  let result = '';

  if (playerMove === 'Paper') {
    if (compMove === 'Rock') {
      result = 'You won';
    } else if (compMove === 'Paper') {
      result = 'Its a Tie';
    } else if (compMove === 'Scissors') {
      result = 'You lost';
    }
  }
  else if (playerMove === 'Scissors') {
    if (compMove === 'Rock') {
      result = 'You lost';
    } else if (compMove === 'Paper') {
      result = 'You won';
    } else if (compMove === 'Scissors') {
      result = 'Its a Tie';
    }
  }
  else if (playerMove === 'Rock') {
    if (compMove === 'Rock') {
      result = 'Its a Tie';
    }
    else if (compMove === 'Paper') {
      result = 'You lost';
    }
    else if (compMove === 'Scissors') {
      result = 'You won';
    }
  }

  if (result === 'You won') {
    score.wins += 1;
  }
  else if (result === 'You lost') {
    score.loses += 1;
  }
  else if (result === 'Its a Tie') {
    score.ties += 1;
  }
  /*Using localStorage to store our score values to avoid them being reloaded back to 0 when the page is reloaded*/
  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElement();
  document.querySelector('.js-result').innerHTML = result;
  document.querySelector('.js-moves').innerHTML = `You
<img src="images/${playerMove}.png" class="move-icon">
<img src="images/${compMove}.png" class="move-icon"> Computer`;
}

/*update function to the element to be posted inside the html body*/

function updateScoreElement() {
  document.querySelector('.score-paragraph').innerHTML = `Wins: ${score.wins}. Losses: ${score.loses}. Ties: ${score.ties}`;
}
/*Functions for the computer move using Math.random()*/
function getComputerMove() {
  randomNum = Math.random();
  let compMove = '';

  if (randomNum >= 0 && randomNum < 1 / 3) {
    compMove = 'Rock';
  } else if (randomNum >= 1 / 3 && randomNum < 2 / 3) {
    compMove = 'Paper';
  } else {
    compMove = 'Scissors';
  }
  /*Return value to use in the button element when calling the function*/
  return compMove;
}