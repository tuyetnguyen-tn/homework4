let question = document.querySelector("#question");
let choices = Array.from(document.querySelectorAll("#.choice-text"));
let progressText = document.querySelector("#progressText");
let scoreText = document.querySelector("#score");
let progressBarFull = document.querySelector("#progressBarFull");

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: "what is 3 + 3",
        choice1: "2",
        choice2: "25",
        choice3: "6",
        choice4: "100",
        answer: 3,
    },
    {
        question: "Commonly used data types DO NOT include:",
        choice1: "string",
        choice2: "booleans",
        choice3: "alerts",
        choice4: "numbers",
        answer: 3,
    },
    {
        question: "Arrays in JavaScript can be used to store____.",
        choice1: "numbers and strings",
        choice2: "other arrays",
        choice3: "booleans",
        choice4: "all of the above",
        answer: 4,
    },
    {
        question: "what is 10 + 3",
        choice1: "13",
        choice2: "25",
        choice3: "60",
        choice4: "4",
        answer: 1,
    }
]
let SCORE_POINTS = 100
let MAX_QUESTIONS = 4

startgame = () => {
    questionCounter = 0
    score = 0
    // availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if( questionCounter > MAX_QUESTIONS)  {
        localStorage.setItem("mostRecentScore", score)
        return window.location.assign("./end.html")
    }

    questionCounter++
    progressText.innerText = "Question " + questionCounter + " of " + MAX_QUESTIONS
  

    let questionsIndex = Math.floor(math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

choices.forEach(choice => {
    let number = choice.datase["number"]
    choice.innerText = currentQuestion["choice" + number]
})
availableQuestions.splice(questionsIndex, 1)
acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if(!acceptingAnswers) return
         
        acceptingAnswers = false
        let selectedChoice = e.target
        let selectedAnswer = selectedChoice.dataset["number"]

        let classToApply = selectedAnswer == currentQuestion.answer ? "correct" : "incorrect"
       
        if(classToApply === "correct") {
            incrementScore(SCORE_POINTS)
        }
        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout( () =>{
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()
        }, 1000)
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startGame()

