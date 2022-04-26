// ****** SELECT ITEMS **********
const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const grocery = document.getElementById('grocery');
const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');
// edit option
let editElement; //default to undefined
let editFlag = false;
let editId = '';
// ****** FUNCTIONS **********
const displayAlert = (message, type) => {
    alert.textContent = message;
    alert.classList.add(`alert-${type}`);
    setTimeout(() => {
        alert.textContent = '';
        alert.classList.remove(`alert-${type}`);    
    }, 5000)
}

const addItem = (e) => {
	e.preventDefault();
	const value = grocery.value;
	// create a unique id with the current date time
	const id = Date.now().toString();
	if (value && !editFlag) {
		console.log('add item to list');
	} else if (value && editFlag) {
		console.log('edit item');
	} else {
        displayAlert('empty alert', 'danger')
	}
};


// ****** EVENT LISTENERS **********
// submit form
form.addEventListener('submit', addItem);

// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********
