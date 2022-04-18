// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();
// ********** close links ************
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener('click', () => {
	// add show-links class with set height - limitation when links list is updated
	// linksContainer.classList.toggle('show-links')

	// calculate dynamic height of the links
	// linksContainer has been set as 0 however the links div will still retain its height
	// links needs to have a height of auto !important since we are adding inline css which overrides
	const containerHeight = linksContainer.getBoundingClientRect().height;
	const linksHeight = links.getBoundingClientRect().height;
	if (containerHeight === 0) {
		linksContainer.style.height = `${linksHeight}px`;
	} else {
		linksContainer.style.height = 0;
	}
});
// ********** fixed navbar ************
// using scroll event and pageYOffset
const navbar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');
window.addEventListener('scroll', () => {
	// add fixed navbar and top-link button if the pageYOffset is greater than height of navbar
	const scrollHeight = window.pageYOffset;
	const navHeight = navbar.getBoundingClientRect().height;
	if (scrollHeight > navHeight) {
		navbar.classList.add('fixed-nav');
	} else {
		navbar.classList.remove('fixed-nav');
	}

    if (scrollHeight > 500) {
        topLink.classList.add('show-link')
    } else {
        topLink.classList.remove('show-link')
    }
});
// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach((link)=>{
    link.addEventListener('click', (e) => {
        // prevent default scroll to middle of section
        e.preventDefault();
        // navigate to specific spot. slice 1 will slice starting at index of 1
        const id = e.currentTarget.getAttribute('href').slice(1);
        const section = document.getElementById(id);
        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = navbar.classList.contains('fixed-nav');
        let position = section.offsetTop - navHeight;
        // section heading is covered by fixed nav
        if (!fixedNav) {
            position = position - navHeight;
        }
        // if there is an navlist container
        if (containerHeight > 82) {
            position = position + containerHeight
        }
        window.scrollTo({left: 0, top: position});

        linksContainer.style.height = 0;
    })
})