//Developer: Bradley Smith
//All JavaScript for the Toolbar.

//The toolbar is for usability and accessibility

//Font Selection Selector Dropdown
var fontSelect = document.getElementById("font-select");
fontSelect.addEventListener("change", function () {
  //Listens for users to change the selection
  var selectedFontSize = fontSelect.value;
  editor.setFontSize(selectedFontSize + "px"); //Changes the Font size in pixels
});

//Clears the Ace Code Editor using an event listener on the clearBtn in the toolbar
document.addEventListener("DOMContentLoaded", function () {
  //Get a reference to the button and the editor
  const clearBtn = document.getElementById("clearButton");
  const editor = ace.edit("editor");

  //Function to check if the editor has text
  function hasTextInEditor() {
    return editor.getValue().trim() !== "";
  }

  //Function to handle the clear button click
  clearBtn.addEventListener("click", function () {
    if (hasTextInEditor()) {
      //Show the warning modal if the editor has text in it
      const warningModal = new bootstrap.Modal(
        document.getElementById("warningModal")
      );
      warningModal.show();
    } else {
      //If the editor is empty, simply clears it
      editor.setValue("");
    }
  });
  //Function that handels when the cancel button is pressed in the modal it
  //hides the Modal but doesnt clear the editor
  clancelBtn.addEventListener("click", function () {
    const warningModal = bootstrap.Modal.getInstance(
      document.getElementById("warningModal")
    );
    warningModal.hide();
  });

  //Function handles the continue button in the popup.
  document.getElementById("continueBtn").addEventListener("click", function () {
    //Clears the editor and then hides the popup modal
    editor.setValue("");
    const warningModal = bootstrap.Modal.getInstance(
      document.getElementById("warningModal")
    );
    warningModal.hide();
  });
});

//Speak Text function using 'SpeechSynthesisUtterance' module
//Says no code if the editor is empty
function speakText() {
  var editorText = editor.getValue(); //Gets the Ace Editors current value

  if (!editorText) {
    console.error("No text to speak."); //If editor is empty will speak 'No Code' by initialiting the speech synthesis modulke
    window.speechSynthesis.speak(new SpeechSynthesisUtterance("No Code"));
    return;
  }

  if ("speechSynthesis" in window) {
    //Initializes the speech Synthesis module
    var utterance = new SpeechSynthesisUtterance();
    utterance.text = editorText;

    //Set Speech rate to 85% the default rate as it was too fast before at 1.0/100%
    utterance.rate = 0.85;

    window.speechSynthesis.speak(utterance);
  } else {
    //Catch else statement for error handling in the web consle log
    console.error("Speech synthesis is not supported.");
  }
}

//Open Github is done using HTML not JS

//Convert To Python functions found in 'blockly.js'

//Copy to Clipbaord without using Notifications instead makes a div visible for 1.5 seconds
function copyCodeToClipboard() {
  //Gett the current value of the Ace Editor
  var editor = ace.edit("editor");
  var code = editor.getValue();

  //Show the notification area for 2.5 seconds
  var notificationArea = document.getElementById("notificationArea");

  //Writes the code text to the users clipboard
  navigator.clipboard
    .writeText(code)
    .then(function () {
      //popup
      notificationArea.style.display = "block";
      setTimeout(function () {
        notificationArea.style.display = "none";
      }, 1500);
    })
    //Error handling console log
    .catch(function (error) {
      console.log("Unable to copy to clipboard");
    });
}
