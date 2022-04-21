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
let futureDate = new Date(2022, 4, 22, 11, 30, 0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
const date = futureDate.getDate();
const timeOfDay = hours < 12 ? 'am' : 'pm';
let month = futureDate.getMonth();
month = months[month];
let day = futureDate.getDay();
day = weekdays[day];

giveaway.textContent = `giveaway ends on ${day}, ${date} ${month} ${year} ${hours}:${minutes}${timeOfDay}`;

// future time in ms
const futureTime = futureDate.getTime();

const getRemainingTime = () => {
	const today = new Date().getTime();
	const t = futureTime - today;
	// 1s = 1000ms
	// 1m = 60s
	// 1h = 60min
	// 1d = 24hr

	// values in ms
	// total ms in one day
	const oneDay = 24 * 60 * 60 * 1000;
	const oneHour = 60 * 60 * 1000;
	const oneMinute = 60 * 1000;

	// calculate all values
	let days = Math.floor(t / oneDay);
	// use modulus to get remainder and calculate from remainder
	let hours = Math.floor((t % oneDay) / oneHour);
	let minutes = Math.floor((t % oneHour) / oneMinute);
	let seconds = Math.floor((t % oneMinute) / 1000);

	//   set values array
	const values = [days, hours, minutes, seconds];

	const format = (item) => (item = item < 10 ? `0${item}` : item);

	items.forEach((item, index) => {
		item.innerHTML = format(values[index]);
	});
	if (t < 0) {
		clearInterval(countdown)
		deadline.innerHTML = `<h4 class="expired"> sorry, this giveaway has expired</h4>`
	}
};

// countdown 
let countdown = setInterval(getRemainingTime, 1000)

// since getRemainingTime is called as a callback from the countdown variable declaration, it has access to this variable value
