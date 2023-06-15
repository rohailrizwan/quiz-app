var homeSection = document.getElementById("homeSection")
var htmlques = document.getElementById("htmlques")
var myquestion = document.getElementById("myquestion")
var answer = document.getElementById("answer")
var next = document.getElementById("next")
var back = document.getElementById("Back")
var total_ques = document.getElementById("total_ques")
var score = document.getElementById("result")
var T_score = document.getElementById("T_score")
var footer = document.getElementById("footer")
back.disabled = true
// html quiz object
var htmlobj = [
    {
        question: "What does HTML stand for ?",
        hopt: ["a) Hyper Text Markup Language", "b) Home Tool Markup Language", "c) Hyperlinks and Text Markup Language", "d) High Tech Markup Language"],
        c_option: "a) Hyper Text Markup Language"
    },
    {
        question: "Which HTML element is used to define the main heading of a document ?",
        hopt: ["a) h1", "b) header", "c) heading", "d) main"],
        c_option: "a) h1"
    },
    {
        question: "Which attribute is used to specify a unique identifier for an HTML element ?",
        hopt: ["a) class", "b) id", "c) name", "d) src"],
        c_option: "b) id"
    },
    {
        question: "How do you create a hyperlink in HTML",
        hopt: ["a) link", "b) a", " c) hyperlink", " d) url"],
        c_option: "b) a"
    },
    {
        question: "Which tag is used to insert an image in HTML",
        hopt: ["a) img", "b) image", "c) picture", "d) src"],
        c_option: "a) img"
    },
]
var indexval = 0
var obj, option

function htmlquiz() {
    homeSection.style.display = "none"
    htmlques.style.display = "block"
    obj = htmlobj[indexval]
    myquestion.innerHTML = obj.question
    total_ques.innerHTML = indexval + 1

    answer.innerHTML = ""
    for (var i = 0; i < obj.hopt.length; i++) {
        //  console.log(obj.hopt[i])
        answer.innerHTML += `<div class="col-sm-12 col-lg-8">
        <div class="w-100 optionbtn">
        <button class=" btn myoption btn mb-3 w-75" onclick="checkans('${obj.c_option}','${obj.hopt[i]}')"> ${obj.hopt[i]} </button>
        </div>   
    </div>`
    }
    footer.style.display = "none"
}

function nextbtn() {
    indexval++
    back.disabled = false

    if (indexval == htmlobj.length) {
        yscore()
        // console.log("hello")
    }
    htmlquiz()
}
var mark = 0
function checkans(a, b) {
    if (a == b) {
        mark = mark + 1
        // console.log(mark) 
    }
    console.log(mark)
    nextbtn()
}

back.addEventListener('click', function () {
    indexval--
    if (indexval == 0) {
        back.disabled = true
    }
    htmlquiz()
})
var playbtn
function yscore() {
    htmlques.classList.add("hide")
    score.style.display = "block"

    T_score.innerHTML = `Score = ${mark}`
    next.style.display = "none"

    playbtn = document.createElement("button");
    playbtn.classList.add("playbtn");
    playbtn.innerHTML = "Play Again";

    playbtn.addEventListener('click', function () {
        window.location.href = "file:///C:/Users/asd/Desktop/quiz%20app/index.html";
    });

    score.appendChild(playbtn);
}





