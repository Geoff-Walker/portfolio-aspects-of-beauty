///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////Mobile Menu//////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const openMobileMenu = document.querySelector('.nav-mobile-open');
const closeMobileMenu = document.querySelector('.nav-mobile-close');
const navLinksMobile = document.querySelectorAll('.nav-link');

console.log(openMobileMenu);
console.log(closeMobileMenu);
console.log(navLinksMobile);

function openMenu() {
	closeMobileMenu.classList.remove('hidden');
	openMobileMenu.classList.add('hidden');
	navLinksMobile.forEach(function(element) {
		element.classList.remove('hidden');
	});
}

function closeMenu() {
	closeMobileMenu.classList.add('hidden');
	openMobileMenu.classList.remove('hidden');
	navLinksMobile.forEach(function(element) {
		element.classList.add('hidden');
	});
}

const slider = function() {
	const slides = document.querySelectorAll('.slide');
	const btnLeft = document.querySelector('.slider__btn--left');
	const btnRight = document.querySelector('.slider__btn--right');
	const dotContainer = document.querySelector('.dots');

	let curSlide = 0;
	const maxSlide = slides.length;

	// Functions
	const createDots = function() {
		slides.forEach(function(_, i) {
			dotContainer.insertAdjacentHTML('beforeend', `<button class="dots__dot" data-slide="${i}"></button>`);
		});
	};

	const activateDot = function(slide) {
		document.querySelectorAll('.dots__dot').forEach((dot) => dot.classList.remove('dots__dot--active'));

		document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add('dots__dot--active');
	};

	const goToSlide = function(slide) {
		slides.forEach((s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`));
	};

	// Next slide
	const nextSlide = function() {
		if (curSlide === maxSlide - 1) {
			curSlide = 0;
		} else {
			curSlide++;
		}

		goToSlide(curSlide);
		activateDot(curSlide);
	};

	const prevSlide = function() {
		if (curSlide === 0) {
			curSlide = maxSlide - 1;
		} else {
			curSlide--;
		}
		goToSlide(curSlide);
		activateDot(curSlide);
	};

	const init = function() {
		goToSlide(0);
		createDots();

		activateDot(0);
	};
	init();

	// Event handlers
	btnRight.addEventListener('click', nextSlide);
	btnLeft.addEventListener('click', prevSlide);

	document.addEventListener('keydown', function(e) {
		if (e.key === 'ArrowLeft') prevSlide();
		e.key === 'ArrowRight' && nextSlide();
	});

	dotContainer.addEventListener('click', function(e) {
		if (e.target.classList.contains('dots__dot')) {
			const { slide } = e.target.dataset;
			goToSlide(slide);
			activateDot(slide);
		}
	});
};
slider();

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////lightbox/////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // Open the Modal
// function openModal() {
// 	document.getElementById('myModal').style.display = 'block';
// }

// // Close the Modal
// function closeModal() {
// 	document.getElementById('myModal').style.display = 'none';
// }

// var slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
// 	showSlides((slideIndex += n));
// }

// // Thumbnail image controls
// function currentSlide(n) {
// 	showSlides((slideIndex = n));
// }

// function showSlides(n) {
// 	var i;
// 	var slides = document.getElementsByClassName('mySlides');
// 	var dots = document.getElementsByClassName('demo');
// 	var captionText = document.getElementById('caption');
// 	if (n > slides.length) {
// 		slideIndex = 1;
// 	}
// 	if (n < 1) {
// 		slideIndex = slides.length;
// 	}
// 	for (i = 0; i < slides.length; i++) {
// 		slides[i].style.display = 'none';
// 	}
// 	for (i = 0; i < dots.length; i++) {
// 		dots[i].className = dots[i].className.replace(' active', '');
// 	}
// 	slides[slideIndex - 1].style.display = 'block';
// 	dots[slideIndex - 1].className += ' active';
// 	captionText.innerHTML = dots[slideIndex - 1].alt;
// }
