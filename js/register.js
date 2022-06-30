// register

const userName = document.querySelector('.name')
const userEmail = document.querySelector('.email')
const password = document.querySelector('.password')
const btnRegister = document.querySelector('.register')
const baseUrl = 'https://pbasics.pythonanywhere.com'

btnRegister.addEventListener('click', e => {
	e.preventDefault()

	fetch(`${baseUrl}/auth/users/`, {
		method: 'POST',
		headers: {
			'Content-type': 'application/json',
		},
		body: JSON.stringify({
			username: userName.value,
			email: userEmail.value,
			password: password.value,
		}),
	})
		.then(res => res.json())
		.then(() => window.open('../index.html'))
	examination()
})

function examination() {
	if (userName.value == '' || userEmail.value == '' || password.value == '') {
		userName.style.border = `2px solid red`
		userEmail.style.border = `2px solid red`
		password.style.border = `2px solid red`
	} else {
		userName.value = ''
		userEmail.value = ''
		password.value = ''
	}
}
