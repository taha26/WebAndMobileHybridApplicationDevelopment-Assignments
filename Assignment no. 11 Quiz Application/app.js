

const questionNumber = document.querySelector(".question-number");
const questionText = document.querySelector(".question-text");
const optionContainer = document.querySelector(".option-container");
const answersIndicatorContainer = document.querySelector(".answers-indicator");
const homeBox = document.querySelector (".home-box")
const quizBox = document.querySelector (".quiz-box")
const resultBox = document.querySelector (".result-box")

let questionCounter = 0;
let currentQuestion;
let availableQuestions = [];
let availableOptions = [];
let correctAnswer = 0;
let attempt = 0;

//push the question into availableQuestions Array
function setAvailableQuestions() {
    const totalQuestion = quiz.length;
    for (let i = 0; i < totalQuestion; i++) {
        availableQuestions.push(quiz[i])
    }
}

//set question number question and options
function getNewQuestion() {
    //set question number
    questionNumber.innerHTML = "Question " + (questionCounter + 1) + " of " + quiz.length;

    // //set question text
    // //set random question
    const questionIndex = availableQuestions[Math.floor(Math.random() * availableQuestions.length)]
    currentQuestion = questionIndex;
    questionText.innerHTML = currentQuestion.q;
    //get the position of questionindex from the availableQuestion Array;
    const index1 = availableQuestions.indexOf(questionIndex);
    //remove the 'questionIndex' from the availableQuestion Array,so that the question does not repeat
    availableQuestions.splice(index1, 1);
    //set options
    //get the length of options
    const optionlen = currentQuestion.options.length;
    //push option into available option Array
    for (let i = 0; i < optionlen; i++) {
        availableOptions.push(i)
    }

    optionContainer.innerHTML = '';
    let animationDelay = 0.15;
    //creat options in html
    for (let i = 0; i < optionlen; i++) {
        //random option
        const optonIndex = availableOptions[Math.floor(Math.random() * availableOptions.length)];
        //get the position of 'optonIndex' from the  availableOptons Array
        const index2 = availableOptions.indexOf(optonIndex);
        //remove the 'optonIndex' from the availableOptions,so that the option does not repeat
        availableOptions.splice(index2, 1);
        const option = document.createElement("div");
        option.innerHTML = currentQuestion.options[optonIndex];
        option.id = optonIndex;
        option.style.animationDelay = animationDelay + 's';
        animationDelay = animationDelay + 0.15;
        option.className = "option";
        optionContainer.appendChild(option)
        option.setAttribute("onclick", 'getResult(this)');
    }
    questionCounter++
}

//get the result of current attempt question
function getResult(element) {
    const id = parseInt(element.id);
    //get the answer by comparing the id of clicked option
    if (id === currentQuestion.answer) {

        //set the green color to the correct option
        element.classList.add('correct');
        // add the indicatorto correct mark
        updateAnswerIndicator("correct");
        correctAnswer++;
    }
    else {
        //set the red color to the incorrect option
        element.classList.add('wrong');
        //add the indicator to wrong mark
        updateAnswerIndicator("wrong") 

        //if the answer is incorrect the show the correct option by additing green color the correct option.
        const optionlen = optionContainer.children.length;
        for (let i = 0; i < optionlen; i++) {
             if(parseInt(optionContainer.children[i].id) === currentQuestion.answer){
            optionContainer.children[i].classList.add("correct");
        }
    }
}
attempt++
    unclickableOptions();
    
}

//make all option unclickable once the user slect a option (RESTRICT THE USER TO CHANGE THE OPTION AGAIN)
function unclickableOptions() {
    const optionlen = optionContainer.children.length;
    for (let i = 0; i < optionlen; i++) {
        optionContainer.children[i].classList.add("already-answered");   
    }
}

function answersIndicator() {
    answersIndicatorContainer.innerHTML = '';
    const totalQuestion = quiz.length;
    for (let i=0; i<totalQuestion; i++) {
        const indicator = document.createElement("div");
        answersIndicatorContainer.appendChild(indicator);
    }
}

function updateAnswerIndicator(markType){
    answersIndicatorContainer.children[questionCounter-1].classList.add(markType)
}
function next() {
    if (questionCounter === quiz.length) {
        quizOver()
    }
    else {
        getNewQuestion();
    }
}

function quizOver(){
//hide quiz quizBox
quizBox.classList.add("hide");
//show result Box
resultBox.classList.remove("hide");
quizResult();
}

// get the quiz result
function quizResult(){
    resultBox.querySelector(".total-question").innerHTML = quiz.length;
    resultBox.querySelector(".total-attempt").innerHTML = attempt;
    resultBox.querySelector(".total-correct").innerHTML = correctAnswer;
    resultBox.querySelector(".total-wrong").innerHTML = attempt - correctAnswer;
    const percentage = (correctAnswer/quiz.length)*100;
    resultBox.querySelector(".percentage").innerHTML =percentage.toFixed(2) + "%";
    resultBox.querySelector(".total-score").innerHTML = correctAnswer + " / " + quiz.length;
}

function resetQuiz(){
    questionCounter = 0;
    correctAnswer = 0;
    attempt = 0;

}

function tryAgainQuiz(){
//hide the resultBox
resultBox.classList.add("hide");
//show the quizBox
quizBox.classList.remove("hide")
resetQuiz();
startQuiz();
}

function goToHome(){
    //hide  resultBox
    resultBox.classList.add("hide");
    //show homeBox
    homeBox.classList.remove("hide")
    resetQuiz();
    }

// ### STARTING POINT ###
 function startQuiz(){
     //hide home box
     homeBox.classList.add("hide")
     //show quiz box
     quizBox.classList.remove("hide");
    //     //first we will set all question in availableQuestion Array
    setAvailableQuestions();
    //     //second we will call getNewQuestion();function
    getNewQuestion();
    //to creat indicator of answer
    answersIndicator();

}


window.onload = function(){
    homeBox.querySelector(".total-question").innerHTML = quiz.length;
}