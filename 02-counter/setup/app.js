// set initial count
let count = 0;

// select value and buttons
const value = document.querySelector('#value')
const btns = document.querySelectorAll(".btn");

// btns is a NodeList for which array methods can run 
btns.forEach((btn) => {
    // add event listener to each btn
    btn.addEventListener('click', (e) => {
        // extract event object
        const styles = e.currentTarget.classList;
        if (styles.contains('decrease')) {
            count--;
        } else if (styles.contains('increase')) {
            count++;
        } else {
            count = 0
        }
        value.textContent = count;
    })
})

