

// Game settings
let minNum = 1;
let maxNum = 100;
let answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;
let gameRunning = true;

// Get HTML elements
let guessInput = document.getElementById("guessInput");
let submitButton = document.getElementById("submitGuess");
let message = document.getElementById("message");
let attemptsDisplay = document.getElementById("attempts");

// When user clicks the button
submitButton.addEventListener("click", function() {
  
  // Stop if game is over
  if (!gameRunning) return;

  // Get the number the user entered
  let guess = Number(guessInput.value);

  // Check if guess is valid
  if (isNaN(guess) || guess < minNum || guess > maxNum) {
    message.textContent = "⚠ Please enter a number between " + minNum + " and " + maxNum;
  } 
  else {
    attempts++;
    attemptsDisplay.textContent = attempts; // Update attempts on screen

    if (guess < answer) {
      message.textContent = "Too low! Try a bigger number.";
    } 
    else if (guess > answer) {
      message.textContent = "Too high! Try a smaller number.";
    } 
    else {
      message.textContent = "🎉 Correct! The number was " + answer;
      gameRunning = false; // Stop the game
    }
  }

  // Clear input box
  guessInput.value = "";
});
