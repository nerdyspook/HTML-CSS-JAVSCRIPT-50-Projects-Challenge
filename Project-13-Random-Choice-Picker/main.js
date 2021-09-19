const tagsElement = document.querySelector(".tags");
const textArea = document.querySelector("#textarea");

textArea.focus(); // If we open the page it'll will automatically put the cursor in the textarea

textArea.addEventListener("keyup", (element) => {
    createTags(element.target.value);
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