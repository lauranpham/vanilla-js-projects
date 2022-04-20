const months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];
const weekdays = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
// can query drilling down multiple selectors
const items = document.querySelectorAll('.deadline-format h4');

// show dynamic date
// month follows zero base e.g. may is 4
let futureDate = new Date(2022, 4, 24, 11, 30, 0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
const date = futureDate.getDate();
const timeOfDay = hours < 12 ? 'am' : 'pm';
let month = futureDate.getMonth();
month = months[month];
let day = futureDate.getDay();
day = weekdays[day];

giveaway.textContent = `giveaway ends on ${day} ${date} ${month} ${year} ${hours}:${minutes}${timeOfDay}`;
