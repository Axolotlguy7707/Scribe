// File used for pretty much everything a typical Scribe project would need.

// Metadata
let bookTitle: string;
let publisher: string;
let author: string;
let chapters: string[] = [];

export type Chapter = {
    title: string;
    content: string;
};


// Getters
export function getMetadata()
{
    return {chapters: chapters, publisher: publisher, author: author, bookTitle: bookTitle};
}