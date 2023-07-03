//Declare all elements to be used in application
let bodyEl = document.querySelector(".container");
let headerEl = document.createElement("header");
let aside1El = document.createElement("Aside");
let aside2El = document.createElement("Aside");
let containerEl = document.createElement("container");
let h1El = document.createElement("h1");
let pEl = document.createElement("p");
let startEl = document.createElement("start");
let sectionEl = document.createElement("section");
let divEl1 = document.createElement("div");
let divEl2 = document.createElement("div");
let divEl3 = document.createElement("div");
let divEl4 = document.createElement("div");
let SectionElres = document.createElement("section");
let inputEl = document.createElement("input");
let scoreSave = document.createElement("button");

scoreSave.setAttribute("id", "save");
let goBack = document.createElement("button");
goBack.setAttribute("id", "back");


let viewHighScoresI = ["Name:"];

let viewHighScoresS = ["Score:"];

let progress = ""
let i = 0;
let score = 0;
let timer = 60;

scoreSave.addEventListener("click", function(event){

localStorage.setItem("initials", inputEl.value);
localStorage.setItem("score", score);
viewHighScoresI.push(localStorage.getItem("initials"));
viewHighScoresS.push(localStorage.getItem("score"));
return scoreScreen();

})

goBack.addEventListener("click", function(event) {
    i = 0;
    timer = 60;
    progress = "";
    score = 0;
    h1El.textContent = "Quiz Challenge";
    h1El.setAttribute("id","desc")
    bodyEl.appendChild(pEl).textContent = "Answer as many questions as you can before the timer runs out. Incorrect answers will dedcuct seconds from the clock, so be quick and accurate to achieve a high score. Good Luck!";
    pEl.setAttribute("id","instructions");
    bodyEl.appendChild(startEl).textContent = "Start";
    startEl.setAttribute("id","start");
    inputEl.remove();
    scoreSave.remove();
    goBack.remove();

})

bodyEl.addEventListener("click", function (event) {
    let element = event.target;
   
    if (element.getAttribute("id") == "start") {
        //Clear Start Page
        document.getElementById("instructions").remove();
        document.getElementById("start").remove();
        document.getElementById("desc").remove();
        //Start Timer
        var timerInterval = setInterval(() => {
            if (timer > 0) {
                timer = timer - 1;
            } else {
                clearInterval(timerInterval);
                timer = 0;
            }
            headerEl.appendChild(aside1El).textContent = "View High Scores";
            headerEl.appendChild(aside2El).textContent = "remaining Time: " + timer;
        }, 1000);
        //Start Quiz
        return Quiz(0);
    } else if (element.getAttribute("data-number") == j) {
        score = score + 10;
        i++;
        progress = progress + " | " + i + ") Correct";
        if (i == 5) {
            return gameOver();
        } else {
            return Quiz(i);
        }
    } else if (element.getAttribute("data-number") !== null) {
        i++;
        progress = progress + " | " + i + ") Incorrect ";
        score = score - 20;
        timer = timer - 10;
        if (i == 5) {
            return gameOver();
        } else if (timer < 1) {
            return gameOver();
        } else {
            return Quiz(i);
        }
    }
});

function Quiz(i) {
    // console.log(i);
    j = Math.floor(Math.random() * 100);
    divEl1.setAttribute("data-number", i + Math.floor(Math.random() * 100));
    divEl2.setAttribute("data-number", i + Math.floor(Math.random() * 100));
    divEl3.setAttribute("data-number", i + Math.floor(Math.random() * 100));
    divEl4.setAttribute("data-number", i + Math.floor(Math.random() * 100));
    bodyEl.appendChild(headerEl);
    bodyEl.appendChild(containerEl).appendChild(h1El).textContent = quiz[i].question;
    bodyEl.appendChild(sectionEl);
    sectionEl.appendChild(divEl1).textContent = quiz[i].a1;
    sectionEl.appendChild(divEl2).textContent = quiz[i].a2;
    sectionEl.appendChild(divEl3).textContent = quiz[i].a3;
    sectionEl.appendChild(divEl4).textContent = quiz[i].a4;
    quiz[i].ca.setAttribute("data-number", j);
    bodyEl.appendChild(SectionElres);
    SectionElres.textContent = progress;
}

function gameOver() {
    timer= 0;
    h1El.textContent = "Complete. Your score is: " + score + ". Please enter your initials below.";
    sectionEl.remove();
    bodyEl.appendChild(inputEl);
    bodyEl.appendChild(scoreSave).textContent = "Save Score";
    bodyEl.appendChild(goBack).textContent = "Go Back";
    inputEl.setAttribute("type", "text");
    inputEl.setAttribute("name", "score");
    inputEl.setAttribute("id", "score");
    inputEl.setAttribute("placeholder", "Enter your initials");
    SectionElres.remove();    
}

function scoreScreen(){
    h1El.textContent = "Scores Screen:";
    h1El.setAttribute("id","desc")
    bodyEl.appendChild(pEl).textContent = "How'd you do?";
    pEl.setAttribute("id","instructions");
 

for (n = 0; n< viewHighScoresI.length;n++){
    let sS = document.createElement('section');
    sS.setAttribute("id", "sS");
    pEl.appendChild(sS);
    let initS = document.createElement("div");
    let scoreS = document.createElement("div");
    sS.appendChild(initS).textContent = viewHighScoresI[n];
    sS.appendChild(scoreS).textContent = viewHighScoresS[n];
}

    bodyEl.appendChild(goBack).textContent = "Go Back";
    goBack.setAttribute("id", "back");
    inputEl.remove();
    scoreSave.remove();
}

//Quiz is an array object. Each array item contains a q and 4 answers.
// let quiz = [
//     {
//         question: "What is 1 + 1?",
//         a1: "0",
//         a2: "1",
//         a3: "2",
//         a4: "3",
//         ca: divEl3,
//     },
//     {
//         question: "what is 0 * 5?",
//         a1: "0",
//         a2: "10",
//         a3: "34",
//         a4: "-3",
//         ca: divEl1,
//     },
//     {
//         question: "The sum of exponentially distributed random variables follows...",
//         a1: "A normal distribution",
//         a2: "A poisson distribution",
//         a3: "A lognormal distribution",
//         a4: "A gamma distribution",
//         ca: divEl4,
//     },
//     {
//         question: "Evaluate the infinite sum from k = 0 to infinity: [ λ^k * exp(-λ) ] / k!",
//         a1: "exp(k)",
//         a2: "1",
//         a3: "-1",
//         a4: "exp(-k)",
//         ca: divEl2,
//     },
//     {
//         question: "Which of the following could describe a cat:",
//         a1: "Has ears",
//         a2: "Has scales",
//         a3: "Says 'woof!'",
//         a4: "Is 6000lbs",
//         ca: divEl1,
//     },
// ]

//Answer Array Above Obfuscated by
//https://github.com/javascript-obfuscator/javascript-obfuscator
const _0x109bb9 = _0x3420; (function (_0x53a9cf, _0x4a0ef8) { const _0x335c07 = _0x3420, _0x4d899b = _0x53a9cf(); while (!![]) { try { const _0x2fd526 = -parseInt(_0x335c07(0x1ac)) / 0x1 + parseInt(_0x335c07(0x1a3)) / 0x2 + -parseInt(_0x335c07(0x1a7)) / 0x3 + parseInt(_0x335c07(0x1ae)) / 0x4 + -parseInt(_0x335c07(0x1b0)) / 0x5 + parseInt(_0x335c07(0x1a1)) / 0x6 * (-parseInt(_0x335c07(0x1aa)) / 0x7) + parseInt(_0x335c07(0x1a9)) / 0x8 * (parseInt(_0x335c07(0x1b5)) / 0x9); if (_0x2fd526 === _0x4a0ef8) break; else _0x4d899b['push'](_0x4d899b['shift']()); } catch (_0x2952aa) { _0x4d899b['push'](_0x4d899b['shift']()); } } }(_0x34f5, 0xd7f68)); let quiz = [{ 'question': _0x109bb9(0x1ad), 'a1': '0', 'a2': '1', 'a3': '2', 'a4': '3', 'ca': divEl3 }, { 'question': 'what\x20is\x200\x20*\x205?', 'a1': '0', 'a2': '10', 'a3': '34', 'a4': '-3', 'ca': divEl1 }, { 'question': _0x109bb9(0x1af), 'a1': _0x109bb9(0x1b4), 'a2': _0x109bb9(0x1a5), 'a3': _0x109bb9(0x1a6), 'a4': _0x109bb9(0x1ab), 'ca': divEl4 }, { 'question': _0x109bb9(0x1b1), 'a1': _0x109bb9(0x1a8), 'a2': '1', 'a3': '-1', 'a4': _0x109bb9(0x1a4), 'ca': divEl2 }, { 'question': 'Which\x20of\x20the\x20following\x20could\x20describe\x20a\x20cat:', 'a1': _0x109bb9(0x1a2), 'a2': 'Has\x20scales', 'a3': _0x109bb9(0x1b2), 'a4': _0x109bb9(0x1b3), 'ca': divEl1 }]; function _0x3420(_0x35e902, _0x277f61) { const _0x34f52 = _0x34f5(); return _0x3420 = function (_0x342087, _0x1f7c72) { _0x342087 = _0x342087 - 0x1a1; let _0x327bc0 = _0x34f52[_0x342087]; return _0x327bc0; }, _0x3420(_0x35e902, _0x277f61); } function _0x34f5() { const _0x37ed8d = ['exp(k)', '16kiQPFm', '9453416VGkSnx', 'A\x20gamma\x20distribution', '844841PrtMSH', 'What\x20is\x201\x20+\x201?', '339016kxQcfE', 'The\x20sum\x20of\x20exponentially\x20distributed\x20random\x20variables\x20follows...', '7762185SrFHkF', 'Evaluate\x20the\x20infinite\x20sum\x20from\x20k\x20=\x200\x20to\x20infinity:\x20[\x20λ^k\x20*\x20exp(-λ)\x20]\x20/\x20k!', 'Says\x20\x27woof!\x27', 'Is\x206000lbs', 'A\x20normal\x20distribution', '21896262wRLbDV', '6wNChGh', 'Has\x20ears', '1373900gENFMj', 'exp(-k)', 'A\x20poisson\x20distribution', 'A\x20lognormal\x20distribution', '3015570ChrFZw']; _0x34f5 = function () { return _0x37ed8d; }; return _0x34f5(); }
