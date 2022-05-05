const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.nextBtn')
const prevBtn = document.querySelector('.prevBtn')

slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`
})

let counter = 0;

nextBtn.addEventListener('click', () => {
    counter++;
    updateCarousel()
})

prevBtn.addEventListener('click', () => {
    counter--;
    updateCarousel()
})

// translate style depending on counter value 
const updateCarousel = () => {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`
    })
}