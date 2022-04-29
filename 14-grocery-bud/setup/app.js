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
	console.log(alert);
	alert.className = `alert alert-${type}`;
	setTimeout(() => clearAlert(message, type), 5000);
};

const clearAlert = (message, type) => {
	// clear only the past alert
	if (message === alert.textContent) {
		alert.textContent = '';
        alert.classList.remove(`alert-${type}`);
	}
};

const clearItems = () => {
	// remove all grocery items
	const items = document.querySelectorAll('.grocery-item');
	if (items.length > 0) {
		items.forEach((item) => list.removeChild(item));
	}
	container.classList.remove('show-container');
	displayAlert('empty list', 'danger');
	setBackToDefault();
	// localStorage.removeItem('list')
};

const deleteItem = (e) => {
	console.log("delete item")
	// pass event object to access parent container of grocery-item
	const element = e.currentTarget.parentElement.parentElement
	list.removeChild(element)
	if (list.children.length === 0) {
		container.classList.remove('show-container');
	}
}

const editItem = () => {
	console.log("edit item")
}

const setBackToDefault = () => {
	console.log('setting back to default');
	grocery.value = '';
	editFlag = false;
	editId = '';
	submitBtn.textContent = 'submit';
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
		// edit and delete functions need to be created only once the item is created
		// edit function
		// delete function 
		const deleteBtn = element.querySelector('.delete-btn')
		const editBtn = element.querySelector('.edit-btn')
		deleteBtn.addEventListener('click', deleteItem)
		editBtn.addEventListener('click', editItem)
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
clearBtn.addEventListener('click', clearItems);
// ****** LOCAL STORAGE **********
const addToLocalStorage = (id, value) => {
	console.log('added to local storage');
};

// ****** SETUP ITEMS **********
