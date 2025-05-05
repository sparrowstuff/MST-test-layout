const burgerBtn = document.querySelector('.burger-menu')
const mainNavTablet = document.querySelector('.main-nav--burger')

burgerBtn.addEventListener('click', function () {
	burgerBtn.classList.toggle('transform')

	mainNavTablet.classList.toggle('show-nav-menu')
})

const subscribeForm = document.querySelector('.subscription-form__form')

subscribeForm.addEventListener('submit', e => {
	e.preventDefault()
	console.log('Форма отработала')
})

document.addEventListener('DOMContentLoaded', function () {
	const headerBlock = document.querySelector('.header')

	const animatedBlock = document.querySelectorAll('.hidden-block')

	function headerBackgroundVisible() {
		if (window.scrollY > 100) {
			headerBlock.style.backgroundColor = '#38535d'
		} else {
			headerBlock.style.backgroundColor = 'transparent'
		}
	}

	window.addEventListener('scroll', headerBackgroundVisible)

	headerBackgroundVisible()
})
