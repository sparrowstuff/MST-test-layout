document.addEventListener('DOMContentLoaded', function () {
	const animatedBlock = document.querySelectorAll('.hidden-block')

	function showBlock(block) {
		const rect = block.getBoundingClientRect()
		const windowHeight = window.innerHeight

		if (rect.top < windowHeight - 100) {
			block.classList.add('show')
			block.classList.remove('hidden-block')
		}
	}

	animatedBlock.forEach(block => {
		if (block) {
			showBlock(block)
		}
	})

	document.addEventListener('scroll', function () {
		animatedBlock.forEach(block => {
			if (block) {
				showBlock(block)
			}
		})
	})
})

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

const headerBlock = document.querySelector('.header')

function headerBackgroundVisible() {
	if (window.scrollY > 100) {
		headerBlock.style.backgroundColor = '#38535d'
	} else {
		headerBlock.style.backgroundColor = 'transparent'
	}
}

window.addEventListener('scroll', headerBackgroundVisible)

headerBackgroundVisible()
