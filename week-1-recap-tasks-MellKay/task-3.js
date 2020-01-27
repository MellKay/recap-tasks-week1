// Using HTML and JavaScript, implement the following functionality:
//             - When the button is pressed, the text in the h1 tag should change to reflect what the user has entered in the input field.
//             - If the input field is empty, this change shouldn't happen
//             - Use the onclick attribute to achieve this
//             - Bonus points for a warning message (however you like) for an empty input field attempt

let btn = document.querySelector("button");
btn.addEventListener("click", changeText);
let inputText = document.getElementById("inputText");

function changeText() {
  if (!inputText) {
    alert("Write something then");
    return;
  }
  document.querySelector("h1").innerText = inputText.value;
  console.log(inputText.value);
}
