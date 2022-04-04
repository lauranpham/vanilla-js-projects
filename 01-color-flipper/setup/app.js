const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click', () => {
    // get random number between 0 and colors.length - 1
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})

const getRandomNumber = () => {
    // Math.random outputs a random number from 0-1
    // multiply by length of array
    // use Math.floor to round down to closest integer
    return Math.floor(Math.random() * (colors.length));
}