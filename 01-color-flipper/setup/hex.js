const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
// #f15025
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click', () => {
    // generate a random hex color
    let hexColor = '#';
    // create a loop to concatenate 6 values to the hexColor
    for(let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()]
    }
    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;
})

const getRandomNumber = () => {
    // Math.random outputs a random number from 0-1
    // multiply by length of array
    // use Math.floor to round down to closest integer
    return Math.floor(Math.random() * (hex.length));
}