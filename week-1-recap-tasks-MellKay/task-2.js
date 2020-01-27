// Using javascript and html
// 1)
//     - create a file called task-2.js and link it to this file
//     - in that file, create a variable called randomNumber with a random value between 0 and 1
//     - if the value is over 0.5 print out heads otherwise print out tails
// 2)
//     - put this functionality into a function and have it run on the click of a button
//     - now have the result print in a p tag

let p = document.querySelector("p");
function randomNumber() {
  let randomNumber = Math.random();
  if (randomNumber > 0.5) {
    console.log("Heads");
    p.innerText = "Heads";
  } else {
    console.log("Tails");
    p.innerText = "Tails";
  }
}

let btn = document.querySelector("button");
btn.addEventListener("click", randomNumber);
