document.addEventListener('DOMContentLoaded', () => {
  const width = window.innerWidth;

  if (width < 768){
    new Swiper('.slider__body', {
			pagination: {
				el: '.swiper-pagination',
			},
			whathOverflow: true,
			loop: true,
			breakpoints: {
				320: {
					slidesPerView: 2,
					spaceBetween: 210,
				},
				375: {
					slidesPerView: 2,
					spaceBetween: 180,
				},
				425: {
					slidesPerView: 2,
					spaceBetween: 110,
				},
				480: {
					slidesPerView: 2,
					spaceBetween: 50,
				},
				550: {
					slidesPerView: 3,
					spaceBetween: 215,
				},
				640: {
					slidesPerView: 3,
					spaceBetween: 140,
				},
				740: {
					slidesPerView: 3,
					spaceBetween: 60,
				},
			},
		});
  }
});

const spoiler = function () {
	const slider = document.querySelector('.slider');
	const sliderBody = slider.querySelector('.slider__body');
	const spoilerButton = slider.querySelector('.spoiler__button');
	const hieghtSliderBody = sliderBody.scrollHeight;
	const textButton = slider.querySelector('.spoiler__text');
	spoilerButton.addEventListener('click', function () {
		sliderBody.classList.toggle('show');
		spoilerButton.classList.toggle('open');
		if (sliderBody.classList.contains('show')) {
			sliderBody.style.maxHeight = hieghtSliderBody + 'px';
			textButton.textContent = 'Скрыть';
		} else {
			sliderBody.style.maxHeight = null;
			textButton.textContent = 'Читать далее';
		}
	});
	
	
};
spoiler();
