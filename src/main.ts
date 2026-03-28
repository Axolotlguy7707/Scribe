import {clearEditorText, initEditor, setEditorText} from "./editor";
import { addChapter } from "./book.ts";

let newButton: any = document.getElementById("new");

let newChapButton: any = document.getElementById("newChapter");

initEditor();

setEditorText("Hello World!");

newButton.addEventListener("click", () => {
    clearEditorText();
})

newChapButton.addEventListener("click", () => {
    addChapter("Title");
})