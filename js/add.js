const add_username = document.querySelector('.add-name')
const add_description = document.querySelector('.add-description')
const add_price = document.querySelector('.add-price')
const add_url = document.querySelector('.add-url')
const add_category = document.querySelector('.add-category')
const add_reset = document.querySelector('.add-reset')
const add_send = document.querySelector('.add-send')
const allINPUTS = document.querySelectorAll('input')
const container = document.querySelector('.post')
const baseURL = 'https://pbasics.pythonanywhere.com'

add_send.addEventListener('click', e => {
	e.preventDefault()

	fetch(`${baseURL}/products/create/`, {
		method: 'POST',
		headers: {
			'Content-type': 'application/json',
		},
		body: JSON.stringify({
			title: add_username.value,
			description: add_description.value,
			price: add_price.value,
			image_url: add_url.value,
			category: add_category.value,
		}),
	})
		.then(res => res.json())
		// if(add_category.value === 0 || add_category.value > 3) {
			// alert('Введите число от 1 до 3!!!')
		// } else {
			.then(() => window.open('../index.html', '_self'))
		// } 
	examination()
})

add_reset.addEventListener('click', () => {
	if (
		add_username.value == '' ||
		add_description.value == '' ||
		add_price.value == '' ||
		add_url.value == '' ||
		add_category.value == ''
	) {
		add_username.value = ''
		add_description.value = ''
		add_price.value = ''
		add_url.value = ''
		add_category.value = ''
	}
})

function examination() {
	if (
		add_username.value == '' ||
		add_description.value == '' ||
		add_price.value == '' ||
		add_url.value == '' 
	) {
		add_username.style.border = `2px solid red`
		add_description.style.border = `2px solid red`
		add_price.style.border = `2px solid red`
		add_url.style.border = `2px solid red`
	} else {
		add_username.value = ''
		add_description.value = ''
		add_price.value = ''
		add_url.value = ''
	}
}
