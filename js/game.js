const question = document.querySelector('#question');
const choises = Array.from(document.querySelectorAll('.choise-text'));
const progressText = document.querySelector('#progressText');
const progressBarFull = document.querySelector('#progressBarFull');
const scoreText = document.querySelector('#score');

let currentQuestions = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = [];


const SCORE_POINTS = 100
const MAX_QUESTIONS = 4

startGame = () => {
   questionCounter = 0
   score = 0
   availableQuestions = [...questions]
   getNewQuestion()
}

getNewQuestion = () => {
   if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
      localStorage.setItem('recentScore', score)
      return window.location = './end.html'
   }

   questionCounter++
   progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
   progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`
   const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
   currentQuestions = availableQuestions[questionsIndex]
   question.innerText = currentQuestions.question

   choises.forEach(choise => {
      const number = choise.dataset['number']
      choise.innerText = currentQuestions['choise'+ number]
   })

   availableQuestions.splice(questionsIndex, 1)
   
   acceptingAnswers = true
}

choises.forEach(choise => {
   choise.addEventListener('click', e => {
      if (!acceptingAnswers) return
      
      acceptingAnswers = false

      const selectChoise = e.target
      const selectAnswer = selectChoise.dataset['number']

      let calssToApply = selectAnswer == currentQuestions.answer ? 'correct' : 'incorrect'
      
      if (calssToApply === 'correct') {
         incrementScore(SCORE_POINTS)
      }

      selectChoise.parentElement.classList.add(calssToApply)

      setTimeout(() => {
         selectChoise.parentElement.classList.remove(calssToApply)
         getNewQuestion()
      },1000)
   })
})


incrementScore = num => {
   score += num
   scoreText.innerText = score
}

startGame()