let randomNumber = Math.floor(Math.random() * 100) + 1;

let outputtext = document.getElementById("outputtext");
let btn = document.getElementById("btn");


btn.addEventListener("click", Game);

function Game() {
  let input = document.getElementById("userInput").value;
  
    if (input == randomNumber) {
      outputtext.innerHTML = `You guessed it correctly ${randomNumber}`;
    } else if (input > randomNumber) {
      
      outputtext.innerHTML = `your number ${input} is greater`;
      prev.append(`${input}`)
    } else {
      outputtext.innerHTML = `your number ${input} is lesser`;
      prev.append(`${input}`)
    }

  
}
