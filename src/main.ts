import {
    addChapter,
    setCurrentChapter,
    getChapters,
    updateCurrentChapterContent
} from "./book";

import {
    getEditorText,
    initEditor,
    setEditorText
} from "./editor";

import {
    initSidebar,
    refreshSidebar
} from "./sidebar";

let newChapButton: any = document.getElementById("newChapter");

// --- Initialize editor + sidebar ---
initEditor();
initSidebar();

// --- Create first chapter ---
addChapter("Chapter 1");
setCurrentChapter(0);
setEditorText("Chapter 1");
refreshSidebar();

// --- New Chapter button ---
newChapButton.addEventListener("click", () => {
    // Save current chapter
    updateCurrentChapterContent(getEditorText());

    // Determine next chapter number
    const newChNum = getChapters().length + 1;

    // Add new chapter
    addChapter("Chapter " + newChNum);

    // Switch to it
    const newIndex = getChapters().length - 1;
    setCurrentChapter(newIndex);

    // Clear editor
    setEditorText("");

    // Refresh sidebar
    refreshSidebar();
});
