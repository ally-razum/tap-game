const button = document.getElementById("button")
const scores = document.getElementById("scores")
let ink = 0
button.addEventListener("click", (event) => {
    event.preventDefault()
       ink += 1
       scores.value = ink
})