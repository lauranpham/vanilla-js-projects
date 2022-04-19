const btns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const articles = document.querySelectorAll('.content');

about.addEventListener('click', (e) => {
	const id = e.target.dataset.id;
	if (id) {
		// remove active on all btns
		btns.forEach((btn) => btn.classList.remove('active'));
		// add active on selected btn
		e.target.classList.add('active');
		// remove active on all articles
		articles.forEach((article) => article.classList.remove('active'));
		// add active on selected article
		Array.from(articles)
			.find((article) => {
				return article.getAttribute('id') === id;
			})
			.classList.add('active');
	}
});
