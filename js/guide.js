//Developer: Bradley Smith
//Function to close the guide popupusing the (X) button
function closePopup() {
  document.getElementById("darkThemePopup").style.display = "none";
}
//When the web page loads the guide will show by setting the display styling to block
window.onload = function () {
  document.getElementById("darkThemePopup").style.display = "block";
};

//function to show the guide when the guide button in nav bar is pressed
function showGuide() {
  document.getElementById("darkThemePopup").style.display = "block";
}
