class Score {
  constructor() {
    this.LIGHTYEARS_TRAVELLED = 0;
    this.SCORE_BOARD = document.querySelector('.score')
  }
}

const score = new Score;

function displayScore() {
  score.SCORE_BOARD.textContent = score.LIGHTYEARS_TRAVELLED;
}

function addScore() {
  const setScoreID = setInterval(function () {
    score.LIGHTYEARS_TRAVELLED = score.LIGHTYEARS_TRAVELLED + 1;
    score.SCORE_BOARD.textContent = parseInt(score.LIGHTYEARS_TRAVELLED);
  }, 60)
}

function resetScore() {
  score.LIGHTYEARS_TRAVELLED = 0;
}