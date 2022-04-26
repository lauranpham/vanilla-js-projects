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
	}, 5000);
};

const setBackToDefault = () => {
	console.log('setting back to default');
    grocery.value = '';
    editFlag = false;
    editId = '';
    submitBtn.textContent = 'submit'
};

const addItem = (e) => {
	e.preventDefault();
	const value = grocery.value;
	// create a unique id with the current date time
	const id = Date.now().toString();
	if (value && !editFlag) {
		console.log('add item to list');
		const element = document.createElement('article');
		// add class
		element.classList.add('grocery-item');
		// add id
		const attr = document.createAttribute('data-id');
		attr.value = id;
		element.setAttributeNode(attr);
		element.innerHTML = `<p class="title">${value}</p>
        <div class="btn-container">
          <button type="button" class="edit-btn">
            <i class="fas fa-edit"></i>
          </button>
          <button type="button" class="delete-btn">
            <i class="fas fa-trash"></i>
          </button>`;
		// append child to list
		list.appendChild(element);
		// display alert
		displayAlert('item added to list', 'success');
		// show container
		container.classList.add('show-container');
		// add to local storage
		addToLocalStorage(id, value);
		setBackToDefault();
	} else if (value && editFlag) {
		console.log('edit item');
	} else {
		displayAlert('please enter value', 'danger');
	}
};

// ****** EVENT LISTENERS **********
// submit form
form.addEventListener('submit', addItem);

// ****** LOCAL STORAGE **********
const addToLocalStorage = (id, value) => {
	console.log('added to local storage');
};

// ****** SETUP ITEMS **********
