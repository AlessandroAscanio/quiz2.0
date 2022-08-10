const form = document.querySelector('.quiz-form')
const finalScoreContainer = document.querySelector('.final-score-container')
const finalScore = finalScoreContainer.querySelector('span')
const correctAnswers = ['B','A','C','D']

let timer = null
let score = 0

const getUserAnswers = () => {
  let userAnswsers = []
  
  correctAnswers.forEach((_,index) => {
    const userAnswer = form[`inputQuestion${index + 1}`].value
    userAnswsers.push(userAnswer)
  })
   
  return userAnswsers
}

const calculateUserScore = userAnswers => {
  userAnswers.forEach((answer,index) => {
    const isCorrectAnswer = answer === correctAnswers[index]
    
    if(isCorrectAnswer){
      score += 25
    }  
  })
}

const showFinalScore = () => {
  scrollTo({
    top:0,
    left:0,
    behavior:'smooth'
  })
  finalScoreContainer.classList.remove('d-none')
}

const showAnimation = () => {
  let counter = 0
  timer = setInterval(()=>{
    const isCounterEqualScore = counter === score
    
    if(isCounterEqualScore){
      clearInterval(timer)
    }
    
    finalScore.textContent = `Você acertou ${counter++}% do Quiz!`
  },10)
}

form.addEventListener('submit', event => {
  score = 0
  event.preventDefault()
  const userAnswser = getUserAnswers()
  
  calculateUserScore(userAnswser)
  showFinalScore()
  showAnimation()
})