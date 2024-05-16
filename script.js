const questions = [
    {
        question:"What does CSS stand for ?" ,
        answers: [
            {text: "Creative Style Sheets", correct: false},
            {text: "Computer Style Sheet", correct: false},
            {text: "Cascading Style Sheet", correct: true},
            {text: "Colorful Style", correct: false},
        ]
    },

    {
        question:"How do you change the text color of an element ?" ,
        answers: [
            {text: "Color:red;", correct: true},
            {text: "Color:red", correct: false},
            {text: "Font-color:red;", correct: false},
            {text: "none of the above;", correct: false},
        ]
    },

    {
        question:"Where in an HTML document is the correct place to refer to an external style sheet? " ,
        answers: [
            {text: "In the  body element", correct: false},
            {text: "In the head element", correct: true},
            {text: "At the end of the document", correct: false},
            {text: "None of the Above", correct: false},
        ]
    },
    {
        question:"Which of the following defines a measurment in screen pixels ?" ,
        answers: [
            {text: "vv", correct: false},
            {text: "vmin", correct: false},
            {text: "vh", correct: false},
            {text: "px", correct: true},
        ]
    },
    {
        question:"Which character is used to start a class sector for CSS ?" ,
        answers: [
            {text: ". dot", correct: true},
            {text: "$ doller sign", correct: false},
            {text: "# hash sign", correct: false},
            {text: "* asterisk", correct: false},
        ]
    },

   

    {
        question:" ...... property can be used to increase or decrease the spacing between words." ,
        answers: [
            {text: "Word-space", correct: false},
            {text: "Word-spacing", correct: true},
            {text: "Text-spacing", correct: false},
            {text: "Letter-spacing", correct: false},
        ]
    },

   

];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0; 

function startQuiz(){
   currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML - "Next";
    showQuestion();
}

function showQuestion (){
    resetState();
   
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click" , selectAnswer);
    });


}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }

}


function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
            
        }
        button.disabled= true;

    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Try Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    } else{
        showScore();
    }
};

nextButton.addEventListener("click" , () =>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();

    }else{
        startQuiz();
    }

});
startQuiz();

