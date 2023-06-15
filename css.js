var cssobj = [
    {
      question: "What does CSS stand for?",
      hopt: [
        "Cascading Style Sheets",
        "Creative Style Sheets",
        "Computer Style Sheets",
        "Colorful Style Sheets"
      ],
      c_option: "Cascading Style Sheets"
    },
    {
      question: "Which CSS property is used to change the background color of an element?",
      hopt: ["Color", "Background-color", "Text-color", "Background"],
      c_option: "Background-color"
    },
    {
      question: "Which CSS property is used to set the text color of an element?",
      hopt: ["Color", "Text-color", "Font-color", "Text"],
      c_option: "Color"
    },
    {
      question: "Which CSS property is used to set the font size of an element?",
      hopt: ["Font-size", "Text-size", "Font-style", "Size"],
      c_option: "Font-size"
    },
    {
      question: "Which CSS property is used to set the margin around an element?",
      hopt: ["Margin", "Padding", "Border", "Spacing"],
      c_option: "Margin"
    }
  ];
  
  // var indexval = 0;
  // var obj, option;
  
  // function cssquiz() {
  //   obj = cssobj[indexval];
  //   myquestion.innerHTML = obj.question;
  //   total_ques.innerHTML = indexval + 1;
  
  //   answer.innerHTML = "";
  //   for (var i = 0; i < obj.hopt.length; i++) {
  //     answer.innerHTML += `
  //       <div class="col-sm-12 col-lg-8">
  //         <div class="w-100 optionbtn">
  //           <button class="btn myoption btn mb-3 w-75" onclick="checkans('${obj.c_option}','${obj.hopt[i]}')">
  //             ${obj.hopt[i]}
  //           </button>
  //         </div>
  //       </div>
  //     `;
  //   }
  // }
  
  // function nextbtn() {
  //   indexval++;
  //   if (indexval === cssobj.length) {
  //     yscore();
  //   }
  //   cssquiz();
  // }
  
  // function checkans(a, b) {
  //   if (a === b) {
  //     mark++;
  //   }
  //   nextbtn();
  // }
  
  // function yscore() {
  //   cssquestion.style.display = "none";
  //   score.style.display = "block";
  //   T_score.innerHTML = `Score = ${mark}`;
  //   next.style.display = "none";
  
  //   playbtn = document.createElement("button");
  //   playbtn.classList.add("playbtn");
  //   playbtn.innerHTML = "Play Again";
  
  //   playbtn.addEventListener("click", function () {
  //     window.location.href = "index.html";
  //   });
  
  //   score.appendChild(playbtn);
  // }
  
  var mark = 0;
  var obj
  var indexval=0
  var cssques = document.getElementById("cssques");
  var myquestion = document.getElementById("myquestion");
  var answer = document.getElementById("answer");
  var total_ques = document.getElementById("total_ques");
  var score = document.getElementById("result");
  var T_score = document.getElementById("T_score");
  var back = document.getElementById("Back");
  var Next = document.getElementById("Next");
  back.disabled=false

  function cssquiz(){
    obj=cssobj[indexval]
    myquestion.innerHTML=obj.question
    total_ques.innerHTML=indexval+1
    answer.innerHTML=""

    for (var i = 0; i < obj.hopt.length; i++) {
          answer.innerHTML += `
            <div class="col-sm-12 col-lg-8">
              <div class="w-100 optionbtn">
                <button class="btn myoption btn mb-3 w-75" onclick="checkans('${obj.c_option}','${obj.hopt[i]}')">
                  ${obj.hopt[i]}
                </button>
              </div>
            </div>
          `;
        }
  }
  function next(){
    indexval++
back.disabled=false

if(indexval==cssobj.length){
  y_score()
  next.style.display="none"
}
    cssquiz()
  }

  function checkans(a,b){
    if(a==b){
      mark=mark+1
    }
    next()
  }

  back.addEventListener('click', function () {
    indexval--
    if (indexval == 0) {
        back.disabled = true
    }
    cssquiz()
})

var playbtn
function y_score(){
  cssques.style.display="none"
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
  cssquiz();
  