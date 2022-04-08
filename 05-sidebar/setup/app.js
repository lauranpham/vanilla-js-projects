// select the sidebar toggle, sidebar and close btn
const toggleBtn = document.querySelector('.sidebar-toggle')
const closeBtn = document.querySelector('.close-btn')
const sidebar = document.querySelector('.sidebar')

// add eventlisteners
toggleBtn.addEventListener('click', ()=> {
    sidebar.classList.toggle('show-sidebar')
})

closeBtn.addEventListener('click', ()=> {
    sidebar.classList.remove('show-sidebar')
})