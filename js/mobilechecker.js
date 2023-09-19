//Developer: Bradley Smith
//Function to check the screen width is larger than
//an average mobile view size of 755px
function isMobileView() {
  return window.innerWidth <= 755; //755px web window width
}

//This function will redirect the user to en arror
//page explaining the IDE is built for desktop size.
function refreshPage() {
  window.location.href = "html/mobileView.html";
}

//Function to check the screen size and take appropriate
//actions calling on other functions above
function checkScreenSize() {
  if (isMobileView()) {
    refreshPage();
  }
}

//Checks the screensize every 20 seconds.
//As the IDE is not a good size for Mobile use
setInterval(checkScreenSize, 20000);
