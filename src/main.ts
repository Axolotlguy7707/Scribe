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
    // 1. Save current chapter before switching
    updateCurrentChapterContent(getEditorText());

    // 2. Add a new chapter
    addChapter("New Chapter");

    // 3. Switch to the new chapter
    const newIndex = getChapters().length - 1;
    setCurrentChapter(newIndex);

    // 4. Load the new chapter into the editor
    setEditorText("");

    // 5. Update sidebar UI
    refreshSidebar();
});
