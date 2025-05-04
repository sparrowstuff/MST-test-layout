const burgerBtn = document.querySelector('.burger-menu')
const mainNavTablet = document.querySelector('.main-nav--burger')

burgerBtn.addEventListener('click', function () {
	burgerBtn.classList.toggle('transform')

	mainNavTablet.classList.toggle('show-nav-menu')
})
