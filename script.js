const quizData = [
          
    {
        question: "Q1) Which company developed JavaScript?",
        options: ["Microsoft", "Google","Netscape", "Oracle"],
        answer: "Netscape",
    },
    {
        question: "Q2) Which of the following is a correct way to declare a variable in JavaScript?",
        options: [ "let x = 5;", "var x = 5;","const x = 5;", "All of the above"],
        answer: "All of the above",
    },
    {
        question: "Q3) How do you create a function in JavaScript?",
        options: [
            
            "function: myFunction() {}",
            "create function myFunction() {}",
            "None of the above",
            "function myFunction() {}"
        ],
        answer: "function myFunction() {}",
    },
    {
        question: "Q4) Which symbol is used for single-line comments in JavaScript?",
        options: [ "/*", "#","//", "--"],
        answer: "//",
    },
    {
        question: "Q5) What does `NaN` stand for in JavaScript?",
        options: [ "Null and Not","Not a Number", "Not and Null", "None of the above"],
        answer: "Not a Number",
    },
    {
        question: "Q6) What is the output of `typeof NaN`?",
        options: [ "'undefined'","'number'", "'NaN'", "'object'"],
        answer: "'number'",
    },
    {
        question: "Q7) How do you declare a constant in JavaScript?",
        options: ["const x = 10;", "let x = 10;", "var x = 10;", "constant x = 10;"],
        answer: "const x = 10;",
    },
    {
        question: "Q8) Which method is used to parse a string into an integer in JavaScript?",
        options: ["parseInt()", "parse()", "toInteger()", "convertToInt()"],
        answer: "parseInt()",
    },
    {
        question: "Q9) Which operator is used to compare both value and type in JavaScript?",
        options: ["==", "=", "===", "!="],
        answer: "===",
    },
    {
        question: "Q10) Which of the following is not a valid data type in JavaScript?",
        options: ["Number", "String", "Boolean", "Character"],
        answer: "Character",
    },
    {
        question: "Q11) Which JavaScript method is used to remove the last element from an array?",
        options: ["push()","pop()",  "shift()", "unshift()"],
        answer: "pop()",
    },
    {
        question: "Q12) Which of the following is used to test if a variable is an array in JavaScript?",
        options: [
            "Array.check()",
            "Array.isArray()",
            "typeof Array()",
            "isArray()"
        ],
        answer: "Array.isArray()",
    },
    {
        question: "Q13) How do you write a conditional statement in JavaScript?",
        options: [ "if: condition {}", "if condition {} ", "None of the above","if(condition) {}"],
        answer: "if(condition) {}",
    },
    {
        question: "Q14) What is the purpose of the `this` keyword in JavaScript?",
        options: [
            "Refers to the global object",
            "Refers to the current function",
            "Refers to the current object",
            "None of the above"
        ],
        answer: " Refers to the current object",
    },
    {
        question: "Q15) What does the `splice()` method do in JavaScript?",
        options: [
            "Adds elements to an array",
            "Removes elements from an array",
            "Changes the contents of an array",
            "All of the above"
        ],
        answer: "All of the above",
    },
    {
        question: "Q16) How do you convert a string to a number in JavaScript?",
        options: ["parseInt()", "parseFloat()", "Number()", "All of the above"],
        answer: "All of the above",
    },
    {
        question: "Q17) Which of the following is the correct way to define an arrow function in JavaScript?",
        options: [
            "() => function",
            "(x) => { return x }",
            "function(x) => { return x }",
            "None of the above"
        ],
        answer: "(x) => { return x }",
    },
    {
        question: "Q18) What does the `break` statement do in JavaScript?",
        options: [ "Continues the loop", "Ends a function","Exits a loop", "Stops an operation"],
        answer: "Exits a loop",
    },
    {
        question: "Q19) Which function is used to parse a JSON string into a JavaScript object?",
        options: [ "JSON.stringify()","JSON.parse()", "JSON.object()", "None of the above"],
        answer: "JSON.parse()",
    },
    {
        question: "Q20) Which method can be used to find the index of an element in an array?",
        options: [ "findIndex()", "positionOf()", "search()","indexOf()"],
        answer: "indexOf()",
    },
    {
        question: "Q21) What will be the output of `console.log(2 + '2')` in JavaScript?",
        options: ["4", "'22'", "NaN", "'4'"],
        answer: "'22'",
    },
    {
        question: "Q22) Which of the following methods is used to sort an array in JavaScript?",
        options: ["sort()", "order()", "arrange()", "rank()"],
        answer: "rank()",
    },
    {
        question: "Q23) How do you convert a string to a number in JavaScript?",
        options: ["parseInt()", "parseFloat()", "Number()", "All of the above"],
        answer: "All of the above",
    },
    {
        question: "Q24) Which of the following is used to test if a variable is an array in JavaScript?",
        options: [
            "Array.isArray()",
            "Array.check()",
            "typeof Array()",
            "isArray()"
        ],
        answer: "typeof Array()",
    },
    {
        question: "Q25) What does the `break` statement do in JavaScript?",
        options: [ "Continues the loop", "Ends a function","Exits a loop", "Stops an operation"],
        answer: "Exits a loop",
    },

    
];

let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;
let timerInterval;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("next-button");
const submitButton = document.getElementById("submit-button");
const resultElement = document.getElementById("result");
const scoreElement = document.getElementById("score");
const questionNumberElement = document.getElementById("question-number");
const timerElement = document.getElementById("timer");
const percentageElement = document.getElementById("percentage");
const gradeElement = document.getElementById("grade");

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = "";
    currentQuestion.options.forEach((option, index) => {
        const optionElement = document.createElement("div");
        optionElement.classList.add("option");
        optionElement.innerHTML = `
            <input type="radio" name="question${currentQuestionIndex}" id="option${index}">
            <label for="option${index}">${option}</label>
        `;
        optionElement.querySelector("input").onclick = () =>
            selectOption(optionElement, option);
        optionsElement.appendChild(optionElement);
    });

    questionNumberElement.textContent = `Question ${currentQuestionIndex + 1} of 25`;

    if (currentQuestionIndex === quizData.length - 1) {
        nextButton.style.display = "none";
        submitButton.style.display = "block";
    } else {
        nextButton.style.display = "block";
        submitButton.style.display = "none";
    }

    nextButton.disabled = true; 
}

function selectOption(optionElement, option) {
    const options = document.querySelectorAll(".option");
    options.forEach((opt) => {
        opt.classList.remove("selected", "correct", "incorrect");
        opt.querySelector("input").disabled = false;
    });

    optionElement.classList.add("selected");
    selectedAnswer = option;
    nextButton.disabled = false;
}

function checkAnswer() {
    const correctAnswer = quizData[currentQuestionIndex].answer;
    if (selectedAnswer === correctAnswer) {
        score++;
    }
}

function showNext() {
    if (!selectedAnswer) {
        alert("Please select an option before moving to the next question.");
        return;
    }

    checkAnswer();
    selectedAnswer = null;
    currentQuestionIndex++;

    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function calculateGrade(percentage) {
    if (percentage >= 90) return "A";
    else if (percentage >= 75) return "B";
    else if (percentage >= 50) return "C";
    else return "F";
}

function showResult() {
    clearInterval(timerInterval);
    const percentage = (score / quizData.length) * 100;
    const grade = calculateGrade(percentage);

    questionElement.textContent = "";
    optionsElement.innerHTML = "";
    nextButton.style.display = "none";
    submitButton.style.display = "none";
    resultElement.style.display = "block";


    scoreElement.textContent = score;
    percentageElement.textContent = `Percentage: ${percentage.toFixed(2)}%`;
    gradeElement.textContent = `Grade: ${grade}`;
}

function submitQuiz() {
    clearInterval(timerInterval);
    showResult();
}

function restartQuiz() {
    window.location.href = "index.html";
    currentQuestionIndex = 0;
    score = 0;
    resultElement.style.display = "none";
    nextButton.style.display = "block";
    submitButton.style.display = "none";
    loadQuestion();
}

let totalSeconds = 600; 
function startTimer() {
    timerInterval = setInterval(function () {
        totalSeconds--;
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        timerElement.textContent = `${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

        if (totalSeconds <= 0) {
            clearInterval(timerInterval);
            alert("Time's up! Submitting your quiz.");
            submitQuiz();
        }
    }, 1000);
}

loadQuestion();
startTimer();

nextButton.addEventListener("click", function () {
    showNext();
});