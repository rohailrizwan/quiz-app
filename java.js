var javascriptQuestions = [
    {
        question: "What is the typeof operator used for?",
        options: ["Checking if a variable is defined", "Determining the type of a variable", "Performing arithmetic operations", "Assigning a value to a variable"],
        correctOption: "Checking if a variable is defined"
    },
    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        options: ["var", "let", "const", "variable"
        ],
        correctOption: "var"
    },
    {
        question: "What is the correct way to write a comment in JavaScript?",
        options: ["/* This is a comment */", "// This is a comment", "<-- This is a comment -->", "# This is a comment"],
        correctOption: "// This is a comment"
    },
    {
        question: "What does the '===' operator do in JavaScript?",
        options: ["Checks for equality of values and types", "Assigns a value to a variable", "Checks for equality of values", "Performs logical AND operation"],
        correctOption: "Checks for equality of values"
    },
    {
        question: "Which function is used to display a message in the browser console?",
        options: ["alert()", "prompt()", "confirm()", "console.log()"],
        correctOption: "console.log()"
    }
];
var javaques = document.getElementById("javaques")
var backbtn = document.getElementById("Back")
var myquestion = document.getElementById("myquestion")
var total_ques = document.getElementById("total_ques")
var Next = document.getElementById("Next")
var answer = document.getElementById("answer")
var score = document.getElementById("result");
  var T_score = document.getElementById("T_score");
backbtn.disabled = false
var obj

var indexval = 0
function javaquiz() {
    obj = javascriptQuestions[indexval]
    myquestion.innerHTML = obj.question
    total_ques.innerHTML = indexval + 1
    answer.innerHTML = ""
    for (var i = 0; i < obj.options.length; i++) {
        answer.innerHTML += `
          <div class="col-sm-12 col-lg-8">
            <div class="w-100 optionbtn">
              <button class="btn myoption btn mb-3 w-75" onclick="checkans('${obj.correctOption}','${obj.options[i]}')">
                ${obj.options[i]}
              </button>
            </div>
          </div>
        `;
    }
}
function next() {
    indexval++
    backbtn.disabled=false
     if(indexval==javascriptQuestions.length){
            y_score()
        }
    javaquiz()
}

var mark=0
function checkans(a,b){
    if(a==b){
        mark=mark+1
    }
    next()
}



backbtn.addEventListener('click',function(){
    indexval--
    if (indexval==0){
        backbtn.disabled=true
    }
    javaquiz()
})

var playbtn
function y_score(){
  javaques.style.display="none"
  score.style.display="block"
  T_score.innerHTML= `score=${mark}`

  playbtn = document.createElement("button");
  playbtn.classList.add("playbtn");
  playbtn.innerHTML = "Play Again";

  playbtn.addEventListener('click', function () {
      window.location.href = "file:///C:/Users/asd/Desktop/quiz%20app/index.html";
  });
  score.appendChild(playbtn)
}

javaquiz()

