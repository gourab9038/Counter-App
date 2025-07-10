

const decreaseButton = document.getElementById("decrementButton");
const resetButton = document.getElementById("resetButton");
const increaseButton = document.getElementById("incrementButton");
const countLabel = document.getElementById("countLable");
let count = 0;

increaseButton.onclick = function() {
    count++;
    countLabel.textContent = count;
 } 
 // Increment the count

decrementButton.onclick = function() {
    count--;
    countLabel.textContent = count;
 } 
 // Increment the count

resetButton.onclick = function() {
    count = 0;
    countLabel.textContent = count;
 } 
 // Increment the count

