//Developer: Bradley Smith
//Used for mobile view.html to link back if the button is clicked and meets the width requirements.

//Refresh the page based off of the the size of the screen and locate to the right page.
function refreshPage() {
  if (window.innerWidth >= 755) {
    window.location.href = "../index.html";
  } else {
    if (window.innerWidth <= 755) {
      window.location.href = "mobileView.html";
    }
  }
}
