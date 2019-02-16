/*
	progressbar.js (https://kimmobrunfeldt.github.io/progressbar.js/)
*/

var timeDuration = 5000; // Время до переключения следующего слайда

var animationTime = 1500; // Время анимации слайда

var slider = new Swiper('.js-slider', {
	slidesPerView: 1,
	init: false,
	animation: animationTime,
	direction: 'vertical',
	spaceBetween: 0,
	watchSlidesProgress: true,
	watchSlidesVisibility: true,
	navigation: {
		nextEl: '.slider__nav-next',
		prevEl: '.slider__nav-prev'
	},
	autoplay: {
		delay: timeDuration,
		disableOnInteraction: true
	},
	pagination: {
		el: '.slider__pag',
		type: 'custom',
		renderCustom: function renderCustom(swiper, current, total) {
			var curr = current <= 9 ? "0" + current : current;
			var tot = total <= 9 ? "0" + total : total;
			document.querySelector('.slider__num-current').innerHTML = curr;
			document.querySelector('.slider__num-total').innerHTML = tot;
		}
	}
});
var progressBarElement = document.querySelector('.slider__progress-wrap');
var progressBar = new ProgressBar.Line(progressBarElement, {
	strokeWidth: 4,
	duration: timeDuration,
	color: '#000',
	trailColor: '#83838f',
	trailWidth: 1,
	svgStyle: {
		width: '100%',
		height: '2px'
	}
});
var progressValue = 0;
slider.on('init', function () {
	return progressBar.animate(1);
});
slider.init();
slider.on('slideChangeTransitionStart', function () {
	return progressBar.set(0);
});
slider.on('slideChangeTransitionEnd', function () {
	return progressBar.animate(1);
});
document.querySelector('.js-slider').addEventListener('mouseenter', function () {
	progressBar.stop();
	slider.autoplay.stop();
	progressValue = progressBar.value();
});
document.querySelector('.js-slider').addEventListener('mouseleave', function () {
	progressBar.animate(1);
	slider.autoplay.start();
});