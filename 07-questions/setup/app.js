//using selectors inside the element

const questions = document.querySelectorAll('.question');

questions.forEach((question) => {
    const btn = question.querySelector('.question-btn');
    btn.addEventListener('click', () => {
        // on click, remove show-text on other questions
        questions.forEach((item) => item.classList.remove('show-text'))
        question.classList.toggle('show-text')
    })
})

// traversing the dom

// const btns = document.querySelectorAll('.question-btn')

// btns.forEach((btn)=> {
//     btn.addEventListener('click', (e) => {
//         const question = e.currentTarget.parentElement.parentElement;
//         question.classList.toggle('show-text')
//     })
// })