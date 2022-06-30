// share menu

const btnEl = document.querySelector('.footer-btn')

const toggleOptions = () => {
	const wrapperEl = document.querySelector('.wrapper')
	const iconEl = btnEl.querySelector('i')

	wrapperEl.classList.toggle('active')

	if (iconEl.classList.contains('ri-share-line')) {
		iconEl.classList.replace('ri-share-line', 'ri-close-line')
	} else {
		iconEl.classList.replace('ri-close-line', 'ri-share-line')
	}
}

btnEl.addEventListener('click', toggleOptions)

// =====================================================
//  catalog menu

const catalogBtn = document.querySelector('.catalog')
const menu = document.querySelector('.menu')

catalogBtn.addEventListener('click', () => {
	menu.classList.toggle('showMenu')
})

// =====================================================
// slider

let slideIndex = 1
showSlides(slideIndex)

function plusSlides(n) {
	showSlides((slideIndex += n))
}

function currentSlide(n) {
	showSlides((slideIndex = n))
}

function showSlides(n) {
	let i
	let slides = document.getElementsByClassName('mySlides')
	let dots = document.getElementsByClassName('dot')
	if (n > slides.length) {
		slideIndex = 1
	}
	if (n < 1) {
		slideIndex = slides.length
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none'
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(' active', '')
	}
	slides[slideIndex - 1].style.display = 'block'
	dots[slideIndex - 1].className += ' active'
}

// ===================================================

// POST

const container = document.querySelector('.post')
const baseURL = 'https://pbasics.pythonanywhere.com'
fetch(`${baseURL}/products/`)
	.then(res => res.json())
	.then(res => {
		res.forEach(({ image_url, title, description, price, id }) =>
			container.insertAdjacentHTML(
				'beforeend',
				cardTemplate(image_url, title, description, price, id)
			)
		)
		// search()
	})

function cardTemplate(image_url, title, description, price, id) {
	return `
    <div class="post1">
      <img src="${image_url}" alt="NIKE" class='img' width="100%" height="100%" />
      <div class="post-text">
        <i>-20%</i>
        <h1 class='post-title'>${title}</h1>
        <div class='rating'>
        <img src="/img/Star.png" alt="star" class='star' />
        <img src="/img/Star.png" alt="star" class='star'/>
        <img src="/img/Star.png" alt="star" class='star'/>
        <img src="/img/Star.png" alt="star" class='star'/>
        <img src="/img/Star.png" alt="star" class='star'/>
        <span>(99)</span>
        </div>
        <h4 class='post-description'>${description}</h4>
        <h1 class='post-price'>${price}$</h1>
      </div>
      <div class="post-edit">
        <button id="${id}" class="delete" onclick="deleteProduct(${id})">Удалить</button>
        <button class="change" onclick="editProduct(${id})">Изменить</button>
      </div>
      <div class="post-basket">
        <span>В корзину <i class="fa-solid fa-cart-shopping"></i></span>
        <span>Купить в один клик</span>
      </div>
    </div>
  `
}

// SEARCH
// const search_products = document.querySelector('.search-products')

// function search(res) {
// 	search_products.addEventListener('input', e => {
// 		let value = e.target.value.toLowerCase()
// 		const newData = res.filter(({ title }) => {
// 			return title.toLowerCase().includes(value)
// 		})
// 		container.innerHTML = newData.map(res => cardTemp(res)).join('')
// 	})
// }

// DELETE

function deleteProduct(id) {
	fetch(`${baseURL}/products/delete/${id}`, {
		method: 'DELETE',
		headers: {
			'Content-type': 'application/json',
		},
		body: JSON.stringify({
			title: '123',
		}),
	})
		.then(res => res.json())
		.then(() => window.location.reload())
}
// ===========================================
// EDIT

function editProduct(id) {
	fetch(`${baseURL}/products/update/${id}`, {
		method: 'PATCH',
		headers: {
			'Content-type': 'application/json',
		},
		body: JSON.stringify({
			title: prompt('Edit Title'),
			description: prompt('Edit description'),
			price: +prompt('Edit Price'),
		}),
	})
		.then(res => res.json())
		.then(() => window.location.reload())
}
