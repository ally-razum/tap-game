const button = document.getElementById("button")
const scores = document.getElementById("scores")
let ink = 0
button.addEventListener("click", (event) => {
    event.preventDefault()
       ink += 1
    if (ink === 25){
        scores.value = '25 очков! 1 цилиндр'
    } else if (ink === 50) {
        scores.value = '50 очков! 2 цилиндр'
    } else if (ink === 75) {
        scores.value = '75 очков! 3 цилиндр'
    } else if (ink === 100) {
        scores.value = '100 очков! 4 цилиндр'
    } else {
        scores.value = ink
    }

})


