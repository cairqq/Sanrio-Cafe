/* Declare variables below to save the different sections (divs) of your story*/
let opening = document.querySelector(".story-opening");
let op1 = document.querySelector(".option-one");
let op2 = document.querySelector(".option-two");
let title = document.querySelector(".title");
let op1screen = document.querySelector(".option-one-screen");
let button = document.querySelector(".button");
let op2screen = document.querySelector(".option-two-screen");
let button2 = document.querySelector(".button2");
let op1sc = document.querySelector(".strawberry-cheesecake");
let op2sm = document.querySelector(".strawberry-milkshake");
let op1end = document.querySelector(".option-one-end");
let op2end = document.querySelector(".option-two-end");
let h1 = document.querySelector(".lose");
let img = document.querySelector(".melody");


op1.onclick = function() {
    opening.style.display = "none";
    title.style.display = "none";
    button.style.display = "none";
    op1screen.style.display = "block";
    button2.style.display = "block";
};
op2.onclick = function() {
    op2screen.style.display = "block";
    opening.style.display = "none";
    button.style.display = "none";
    title.style.display = "none";
    op2screen.style.display = "block";
    button2.style.display = "block";

};

op1sc.onclick = function() {
    op2screen.style.display = "none";
    button2.style.display = "none";
    op1screen.style.display = "none";
    op1end.style.display = "block";



};

op2sm.onclick = function() {
    op2screen.style.display = "none";
    button2.style.display = "none";
    op1screen.style.display = "none";
    op2end.style.display = "block";

};

img.onclick = function() {
    h1.innerHTML = "melody ends up sneaking a cakepop in her pocket";
    console.log("it worked");
};