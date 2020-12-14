import * as parser from "md-parser";

const textEditor = document.getElementById("text-editor");
const htmlContent = document.getElementById("html-content");

const mdTemplate = `# H1 header
## H2 header
### H3 header
#### H4 header
##### H5 header
###### H6 header

Paragraphs are separated
by a blank line.

Two spaces at the end of a line  
produces a line break.

Text attributes _italic_, 
**bold**

Horizontal rule:

---

Strikethrough:
~~strikethrough~~`;

textEditor.value = mdTemplate;
let prevText = "";

textEditor.onkeyup = () => {
    const textValue = textEditor.value;
    if (prevText !== textValue) {
        const parsedHTML = parser.parse(textValue);
        UpdateViewer(parsedHTML);
        prevText = textValue;
    }
}

function UpdateViewer(htmlString) {
    htmlContent.innerHTML = htmlString;
}