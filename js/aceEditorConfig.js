//Developer: Bradley Smith
//Configure the Ace Editor for the Right Side of the Web Page

//Variable called editor in the html is the editor
var editor = ace.edit("editor");

//Set the Colour theme for the Ace Editor to Dracula - a pres-set dark theme.
editor.setTheme("ace/theme/dracula");

//Set the Ace Editor to detect Python code.
//This allowes for syntax highlighting and error detection.
editor.session.setMode("ace/mode/python");

//Sets font size to default 18 px -> Can be changed using dropdown in the ToolBar
editor.setFontSize("18px");

//Hide the Margin Line in the Editor - > Looks Weird otherwise
editor.setShowPrintMargin(false);
