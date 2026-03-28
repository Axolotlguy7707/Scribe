let editorEl: HTMLTextAreaElement;

export function initEditor()
{
    editorEl = document.querySelector("#editor") as HTMLTextAreaElement;
}

export function getEditorText()
{
    return editorEl.value;
}

export function setEditorText(text: string)
{
    editorEl.value = text;
}

export function clearEditorText()
{
    editorEl.value = "";
}