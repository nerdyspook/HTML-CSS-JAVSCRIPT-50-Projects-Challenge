const tagsElement = document.querySelector(".tags");
const textArea = document.querySelector("#textarea");

textArea.focus(); // If we open the page it'll will automatically put the cursor in the textarea

function randomSelect() {
    const times = 30;

    const interval = setInterval(() => {
        const randomTag = pickRandomTag();

        highlightTag(randomTag);

        setTimeout(() => {
            unHighlightTag(randomTag);
        }, 100);
    }, 100);

    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            const randomTag = pickRandomTag();

            highlightTag(randomTag);
        }, 100);
    }, times * 100);
}

function pickRandomTag() {
    const tags = document.querySelectorAll(".tag");
    return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
    tag.classList.add("highlight");
}

function unHighlightTag(tag) {
    tag.classList.remove("highlight");
}

textArea.addEventListener("keyup", (element) => {
    createTags(element.target.value);

    if(element.key === "Enter") {

        // Wait 10 miliseconds
        setTimeout(() => {
            element.target.value = "";

        }, 10);

        randomSelect();
    }
})

function createTags(input) {

    // takes input while trimming left/right spaces and ignoring empty string while splitting when comma is used 
    const tags = input.split(",").filter(tag => tag.trim() !== "").map(tag => tag.trim());
    
    // clear tags after a reload or else it will pile up
    tagsElement.innerHTML = "";

    tags.forEach(tag => {
        const tagElement = document.createElement("span");
        tagElement.classList.add("tag");
        tagElement.innerText = tag;
        tagsElement.appendChild(tagElement);
    })
}