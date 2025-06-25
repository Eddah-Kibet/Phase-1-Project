const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
//variables
let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let availableQuestions = [];
let questionCounter = 0;
//constants
const CORRECRBONUS= 10;
const MAX_QUESTIONS = 10;
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
        question: "Who painted the Mona Lisa?",
        choice1: "Vincent van Gogh",
        choice2: "Pablo Picasso",
        choice3: "Leonardo da Vinci",
        choice4: "Claude Monet",
        answer: 3,
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
    },
    {
        question: "What is the capital of Japan?",
        choice1: "Seoul",
        choice2: "Tokyo",
        choice3: "Beijing",
        choice4: "Bangkok",
        answer: 2,
    }
];