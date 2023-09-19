//Developer: Bradley Smith

//Initialize Blockly Workspace using the default colours and theme
var workspace = Blockly.inject("blocklyDiv", {
  toolbox: document.getElementById("toolbox"),
  theme: Blockly.Theme.defineTheme("dark-theme", {
    //Calls on the Dark theme styling already created
    base: Blockly.Themes.Classic,
    componentStyles: {
      workspaceBackgroundColour: "#333",
      toolboxBackgroundColour: "#555",
      toolboxForegroundColour: "#fff",
      flyoutBackgroundColour: "#555",
      flyoutForegroundColour: "#fff",
      flyoutOpacity: 1,
      scrollbarColour: "#55",
      scrollbarOpacity: 0.8,
      insertionMarkerColour: "#fff",
      insertionMarkerOpacity: 0.3,
      fieldBorderColour: "#fff",
      fieldBorderRadius: 4,
      fieldBorderWidth: 1,
      fieldColour: "#333",
      fieldFontColour: "#fff",
      fieldShadow: "none",
      hatColour: "#f00", //Adds a cap to some blocks
      commentColour: "#888",
      disabledBlockColour: "#555",
      warningColour: "#FF9A00",
      mutatorBackgroundColour: "#555",
      mutatorForegroundColour: "#fff",
      mutatorOpenerColour: "#fff",
      scratchCommentFontColour: "#fff",
      scratchCommentBlockBackgroundColour: "#555",
      scratchCommentBlockBorderColour: "#888",
      scratchCommentBlockShadowColour: "#888",
      toolboxShadowColour: "#000",
      dropDownArrowColour: "#fff",
    },
  }),
  themeOptions: {
    classic: {
      base: "dark-theme",
    },
  },
});

//Remove None variables Declarations - > They are not needed and can confuse beginners
function removeNoneAssignments(inputText) {
  //Match lines containing "variableName = None" and remove them to avoid confusion
  const outputText = inputText.replace(/^\s*(\w+)\s*=\s*None\s*$/gm, "");

  return outputText;
}

//Generates the Python code and prints it into the Ace Editor.
function generateCode() {
  //Get the Editor Variable and the Code Generated using the Blockly Drag and Drop
  var editor = ace.edit("editor");
  var blocklyCode = Blockly.Python.workspaceToCode(workspace);

  //Clear the Ace Editor
  editor.setValue("");

  //Get Current Cursor Position AKA start of the editor
  var currentPosition = editor.getCursorPosition();

  //Insert the Code at the start point of the editor using the removeNoneAssignments functions
  //Removes un-needed code that can confuse beginner programmers.
  editor.session.insert(currentPosition, removeNoneAssignments(blocklyCode));
}
