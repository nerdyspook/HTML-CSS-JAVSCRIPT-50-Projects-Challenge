const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];
const buttons = document.querySelector("#buttons");

sounds.forEach( sound => {
    const btn = document.createElement("button"); //create a new button element
    btn.classList.add("btn");

    btn.innerText = sound;

    btn.addEventListener("click", () => {

        stopSongs();
        document.getElementById(sound).play();
    })

    buttons.appendChild(btn); // add event to newly created button
})

function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound);

        song.pause();
        song.currentTime = 0;
    })
}