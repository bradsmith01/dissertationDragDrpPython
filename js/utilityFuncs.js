//Developer: Bradley Smith
//Produces popup to ensure the user understands when they click off the data will be lost.
//Using an event Listener for the window.
//It will not popup if the ace editor is empty as that means there is no codin progress.
//However, it will if there is code in the editor.
window.addEventListener("beforeunload", (event) => {
  //Get the ace editor instance
  var editor = ace.edit("editor");

  //Checks that the editor is empty
  if (editor.getSession().getValue().trim() !== "") {
    //Shows the message
    event.preventDefault();
    event.returnValue = "beforeUnload";
  }
});
