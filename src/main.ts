import {clearEditorText, initEditor, setEditorText} from "./editor";

let newButton: HTMLElement = document.getElementById("new");

initEditor();

setEditorText("Hello World!");

newButton.addEventListener("click", (e) => {
    clearEditorText();
})