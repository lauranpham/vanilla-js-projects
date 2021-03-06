// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.
// select switch btn
const btn = document.querySelector('.switch-btn');
// select video container
const video = document.querySelector('.video-container');

btn.addEventListener('click', () => {
	if (!btn.classList.contains('slide')) {
		btn.classList.add('slide');
		video.pause();
	} else {
		btn.classList.remove('slide');
		video.play();
	}
});

// DOMContentLoaded - once the page is loaded without
// without for stylesheets, images and subframes to finish loading
// load event - fired when WHOLE page is loaded including dependent resources like stylesheets and images

const preloader = document.querySelector('.preloader');

window.addEventListener('load', () => {
	preloader.classList.add('hide-preloader');
});
