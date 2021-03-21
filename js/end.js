const username = document.querySelector('#username');
const saveScoreBtn = document.querySelector('#saveScoreBtn');
const finalScore = document.querySelector('#finalScore');
const mostResetScore = JSON.parse(localStorage.getItem('recentScore'));

console.log(mostResetScore);

const hightScore = JSON.parse(localStorage.getItem('hightScore')) || []

const MAX_HIGH_SCORE = 5

finalScore.innerText = mostResetScore

username.addEventListener('keyup', () => {
   saveScoreBtn.disabled = !username.value
});

saveHighScore = e => {
   e.preventDefault()

   const score = {
      score: mostResetScore,
      name: username.value
   }

   hightScore.push(score)

   hightScore.sort((a, b) => {
      return b.score - a.score
   })

   hightScore.splice(5)

   localStorage.setItem('hightScore', JSON.stringify(hightScore))
   window.location = './index.html '
}