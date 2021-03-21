const highScoresList = document.querySelector('#highScoresList')
const highScore = JSON.parse(localStorage.getItem('hightScore')) || []

highScoresList.innerHTML = highScore.map(score => {
   return `<li class="high-score">${score.name} ↪ ${score.score}</li>`
}).join('')