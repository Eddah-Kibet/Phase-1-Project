const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
//variables
let currentQuestion = {};
let acceptingAnswers = false ;
let score = 0;
let availableQuestions= [];
let questionCounter = 0;
//constants
const CORRECT_BONUS= 10;
const MAX_QUESTIONS = 4;
//questions
let questions = [  
    {
        question: "What is the capital of France?",
        choice1: "Berlin",
        choice2: "Madrid",
        choice3: "Paris",
        choice4: "Rome",
        answer: 3,
    },
    {
        question: "What is the largest planet in our solar system?",
        choice1: "Earth",
        choice2: "Jupiter",
        choice3: "Saturn",
        choice4: "Mars",
        answer: 2,
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        choice1: "Harper Lee",
        choice2: "Mark Twain",
        choice3: "Ernest Hemingway",
        choice4: "F. Scott Fitzgerald",
        answer: 1,
    },
    {
        question: "What is the chemical symbol for water?",
        choice1: "H2O",
        choice2: "CO2",
        choice3: "O2",
        choice4: "NaCl",
        answer: 1,
    },
    {
        question: "Marvel vs Capcom 2:New Age of Heroes was released in what year?",
        choice1: "2001",
        choice2: "1998",
        choice3: "2000",
        choice4: "2003",
        answer:3
    },
    {
        question: "What is the main ingredient in guacamole?",
        choice1: "Tomato",
        choice2: "Avocado",
        choice3: "Onion",
        choice4: "Pepper",
        answer: 2,
    },
    {
        question: "Which planet is known as the Red Planet?",
        choice1: "Venus",
        choice2: "Mars",
        choice3: "Jupiter",
        choice4: "Saturn",
        answer: 2,
    },
    {
        question: "What is the largest mammal in the world?",
        choice1: "Elephant",
        choice2: "Blue Whale",
        choice3: "Giraffe",
        choice4: "Great White Shark",
        answer: 2,
    },
    {
        question: "How many bones are in the human body",
        choice1: "206",
        choice2: "203",
        choice3: "209",
        choice4: "200",
        answer: 1,
    },
    {
        question: "Which of the following was Brazil a former colony under:",
        choice1: "Portugal",
        choice2: "Spain",
        choice3: "France",
        choice4: "Britain",
        answer: 1,
    },
    {
        question: "What is the oldest team in NFL?",
        choice1: "Chicago Bears",
        choice2: " Green Bay Packers",
        choice3: "New York Giants",
        choice4: "Arizona Cardinals",
        answer:4,
    },
    {
        question: "What is the capital city of Japan?",
        choice1: "Seoul",
        choice2: "Tokyo",
        choice3: "Beijing",
        choice4: "Bangkok",
        answer: 2,
    }
];

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    console.log(availableQuestions);
    getNewQuestion();
}

getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        //go to the end page
        return totalScore;
    }
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
    const number = choice.dataset['number'];
    choice.innerText = currentQuestion['choice' + number];
    });

    availableQuestions.splice(questionIndex,1);
    acceptingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];

        const classToApply = 
            selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

            selectedChoice.parentElement.classList.add(classToApply);

            setTimeout (() => {
                getNewQuestion();
                selectedChoice.parentElement.classList.remove(classToApply);
            }, 1000);

            
    }) 
})
startGame();
