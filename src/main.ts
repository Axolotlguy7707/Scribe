import {clearEditorText, initEditor, setEditorText} from "./editor";

let newButton: any = document.getElementById("new");

initEditor();

setEditorText("Hello World!");

newButton.addEventListener("click", () => {
    clearEditorText();
})