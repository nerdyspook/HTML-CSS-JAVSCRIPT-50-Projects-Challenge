const jokeElement = document.querySelector("#joke");
const jokeBtn = document.querySelector("#jokeBtn");

generateJoke();

jokeBtn.addEventListener("click", generateJoke)

// USING .then()
// function generateJoke() {
//     const config = {
//         headers : {
//             Accept : "application/json"
//         }
//     }

//     fetch("https://icanhazdadjoke.com", config)
//         .then(response => response.json())
//         .then(data => {
//             jokeElement.innerText = data.joke;
//         })
// }

// USING ASYNC/AWAIT
async function generateJoke() {
    const config = {
        headers : {
            Accept : "application/json"
        }
    }

    const res = await fetch("https://icanhazdadjoke.com", config)
    
    const data = await res.json();
    jokeElement.innerText = data.joke;
}