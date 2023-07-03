//Declare all elements to be used in application
let bodyEl = document.querySelector(".container");
let headerEl = document.createElement("header");
let aside1El = document.createElement("Aside");
let aside2El = document.createElement("Aside");
let containerEl = document.createElement("container");
let h1El = document.createElement("h1");
let sectionEl = document.createElement("section");
let divEl1 = document.createElement("div");
let divEl2 = document.createElement("div");
let divEl3 = document.createElement("div");
let divEl4 = document.createElement("div");
let SectionElres = document.createElement("section");
let inputEl = document.createElement("input");

let i = 0;
let score = 0;


bodyEl.addEventListener("click", function (event) {
    let element = event.target;

    if (element.getAttribute("id") == "start") {
        document.getElementById("instructions").remove();
        document.getElementById("start").remove();
        document.getElementById("desc").remove();

        return Quiz(0);
    } else if (element.getAttribute("data-number") == j) {
        score = score + 10;
        i++;
        if (i == 5) {
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
    headerEl.appendChild(aside1El).textContent = "View High Scores";
    headerEl.appendChild(aside2El).textContent = "remaining Time";
    bodyEl.appendChild(containerEl).appendChild(h1El).textContent = quiz[i].question;
    bodyEl.appendChild(sectionEl);
    sectionEl.appendChild(divEl1).textContent = quiz[i].a1;
    sectionEl.appendChild(divEl2).textContent = quiz[i].a2;
    sectionEl.appendChild(divEl3).textContent = quiz[i].a3;
    sectionEl.appendChild(divEl4).textContent = quiz[i].a4;
    quiz[i].ca.setAttribute("data-number", j);
 
    // bodyEl.addEventListener("click", function (event) {
    //     let element = event.target;
        // if (element.getAttribute("data-number") == j) {
        //     i++;
        //     if (i == 5) {

        //     } else {
        //         return Quiz(i);
        //     }
        // }
    // });

}

function gameOver(){
    h1El.textContent = "Complete. Your score is: " + score +". Please enter your initials below.";
    sectionEl.remove();
    bodyEl.appendChild(inputEl)
    inputEl.setAttribute("type","text");
    inputEl.setAttribute("name","score");
    inputEl.setAttribute("id","score");
    inputEl.setAttribute("placeholder","Enter your score");
}

//Quiz is an array object. Each array item contains a q and 4 answers.
let quiz = [
    {
        question: "What is 1 + 1?",
        a1: "0",
        a2: "1",
        a3: "2",
        a4: "3",
        ca: divEl3,
    },
    {
        question: "what is 0 * 5?",
        a1: "0",
        a2: "10",
        a3: "34",
        a4: "-3",
        ca: divEl1,
    },
    {
        question: "The sum of exponentially distributed random variables follows...",
        a1: "A normal distribution",
        a2: "A poisson distribution",
        a3: "A lognormal distribution",
        a4: "A gamma distribution",
        ca: divEl4,
    },
    {
        question: "Evaluate the infinite sum from k = 0 to infinity: [ λ^k * exp(-λ) ] / k!",
        a1: "exp(k)",
        a2: "1",
        a3: "-1",
        a4: "exp(-k)",
        ca: divEl2,
    },
    {
        question: "Which of the following could describe a cat:",
        a1: "Has ears",
        a2: "Has scales",
        a3: "Says 'woof!'",
        a4: "Is 6000lbs",
        ca: divEl1,
    },
]

