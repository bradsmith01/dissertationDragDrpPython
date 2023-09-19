//Developer: Bradley Smith
//All JavaScript Functions for the Tutorial of practice Questions
//at the bottom of the index.html page

//All id's referenced in this file are broken down as such:
//E.G. 'qTwoBlocklyPopup' is question Two Blockly popup image

//Function to make the Practice Questions visible on index.html
//made visible by changing the display to 'block' instead of 'none'.
function showQuestions() {
  document.getElementById("darkThemePopup").style.display = "none";
  var questionsTitle = document.getElementById("practiceQuestionsTitle");
  questionsTitle.style.display = "block";
  var questions = document.getElementById("practiceQuestions");
  questions.style.display = "block";
}

//Function to hide the Practice Questions and Title Row on index.html
function hideQuestionsAndTitle() {
  var questionsTitle = document.getElementById("practiceQuestionsTitle");
  questionsTitle.style.display = "none";
  var questions = document.getElementById("practiceQuestions");
  questions.style.display = "none";
}
//------------------------------------------------------

//Image and Hints Popups

//Hint Reveal Q1------------------------------------------------------
//Shows the hint popup for question 1 in practice questions
function showq1HintPopup() {
  document.getElementById("qOneHintPopup").style.display = "block";
}

//Hides the hint popup for question 1 in practice questions
function hideq1HintPopup() {
  document.getElementById("qOneHintPopup").style.display = "none";
}

//Event listener to the hint button when pressed reveals the hint
document
  .querySelector("#practiceQuestions .card .btn-hintq1")
  .addEventListener("click", showq1HintPopup);

//Event listener to hide the question 1 hint using the (x) button
document
  .querySelector("#qOneHintPopup .close-btn")
  .addEventListener("click", hideq1HintPopup);

//Blockly Reveal Q1------------------------------------------------------

//Function to reveal the Blockly image popup
function showq1BlocklyPopup() {
  document.getElementById("qOneBlocklyPopup").style.display = "block";
}

//Function to hide the Blockly image popup
function hideq1BlocklyPopup() {
  document.getElementById("qOneBlocklyPopup").style.display = "none";
}

//Event listener to reveal the Blockly image popup
document
  .querySelector("#practiceQuestions .card .btn-blockly-reveal1")
  .addEventListener("click", showq1BlocklyPopup);

//Event listener to hide the Blockly image popup
document
  .querySelector("#qOneBlocklyPopup .close-btn")
  .addEventListener("click", hideq1BlocklyPopup);

//Code Reveal Q1------------------------------------------------------

//Function to show the Code answer for Question 1 popup
function showq1CodePopup() {
  document.getElementById("qOneCodePopup").style.display = "block";
}

//Function to hide the Code answer for Question 1 Popup
function hideq1CodePopup() {
  document.getElementById("qOneCodePopup").style.display = "none";
}

//Event listener to show the Code Image answer popup
document
  .querySelector("#practiceQuestions .card .btn-code-reveal1")
  .addEventListener("click", showq1CodePopup);

//Event Listener for close button for Code Image answer popup
document
  .querySelector("#qOneCodePopup .close-btn")
  .addEventListener("click", hideq1CodePopup);

//Question 2 ------------------------------------------------------

//Quetion two ( 2)  hint and reveals
//Function to show the Question 2 hint popup
function showq2HintPopup() {
  document.getElementById("qTwoHintPopup").style.display = "block";
}

//Function to hide the Question 2 hint popup
function hideq2HintPopup() {
  document.getElementById("qTwoHintPopup").style.display = "none";
}

//Event listener to show the hint for question 2
document
  .querySelector("#practiceQuestions .card .btn-hintq2")
  .addEventListener("click", showq2HintPopup);

//Event listener to hide the hint for question 2
document
  .querySelector("#qTwoHintPopup .close-btn")
  .addEventListener("click", hideq2HintPopup);

//Blockly Reveal Q2------------------------------------------------------

//Function to show the Question 2 Blockly Answer image
function showq2BlocklyPopup() {
  document.getElementById("qTwoBlocklyPopup").style.display = "block";
}

//Function to hide the Blockly question 2 answer image
function hideq2BlocklyPopup() {
  document.getElementById("qTwoBlocklyPopup").style.display = "none";
}

//Event listener to show the Blockly popup image answer
document
  .querySelector("#practiceQuestions .card .btn-blockly-reveal2")
  .addEventListener("click", showq2BlocklyPopup);

//Event listener to hide the Question 2 Blockly image answer
document
  .querySelector("#qTwoBlocklyPopup .close-btn")
  .addEventListener("click", hideq2BlocklyPopup);

//Code Reveal Q2--------------------------------------------------------

//Function to show Code Answer image
function showq2CodePopup() {
  document.getElementById("qTwoCodePopup").style.display = "block";
}

//function to hide Code popup
function hideq2CodePopup() {
  document.getElementById("qTwoCodePopup").style.display = "none";
}

//Event Listener to show Code popup answer
document
  .querySelector("#practiceQuestions .card .btn-code-reveal2")
  .addEventListener("click", showq2CodePopup);

//Event listener to hide the code popup answer - question 2
document
  .querySelector("#qTwoCodePopup .close-btn")
  .addEventListener("click", hideq2CodePopup);

//Question 3------------------------------------------------------
//Functions to Show and Hide Hints and Image Reveals for Quesiton 3

//Quetion 3 hint and reveals
//Function to show question 3 hint popup
function showq3HintPopup() {
  document.getElementById("qThreeHintPopup").style.display = "block";
}

//Function to hide question 3 hint popup
function hideq3HintPopup() {
  document.getElementById("qThreeHintPopup").style.display = "none";
}

//Event listener to listen for the button to show question 3 hint popup
document
  .querySelector("#practiceQuestions .card .btn-hintq3")
  .addEventListener("click", showq3HintPopup);

//Event listener to hide the question 3 hint popup
document
  .querySelector("#qThreeHintPopup .close-btn")
  .addEventListener("click", hideq3HintPopup);

//Blockly Reveal Q3------------------------------------------------------

//Function to show Blockly answer for question 3
function showq3BlocklyPopup() {
  document.getElementById("qThreeBlocklyPopup").style.display = "block";
}

//Function to hide Blockly answer for question 3
function hideq3BlocklyPopup() {
  document.getElementById("qThreeBlocklyPopup").style.display = "none";
}

//Event listener to show answer for question 3 blockly
document
  .querySelector("#practiceQuestions .card .btn-blockly-reveal3")
  .addEventListener("click", showq3BlocklyPopup);

//Event listener to hide answer for question 3 blockly
document
  .querySelector("#qThreeBlocklyPopup .close-btn")
  .addEventListener("click", hideq3BlocklyPopup);

//Code Reveal Q3--------------------------------------------------------

//Function to show the answer for the code for question 3
function showq3CodePopup() {
  document.getElementById("qThreeCodePopup").style.display = "block";
}

//Function to hide the answer for the code for question 3
function hideq3CodePopup() {
  document.getElementById("qThreeCodePopup").style.display = "none";
}

//Event listener to listen for click of the reveal button for code answer for question 3
document
  .querySelector("#practiceQuestions .card .btn-code-reveal3")
  .addEventListener("click", showq3CodePopup);

//Event listener to listen for click of the hide (x) for code answer for question 3
document
  .querySelector("#qThreeCodePopup .close-btn")
  .addEventListener("click", hideq3CodePopup);
