// Swiper js

// Slider

function initializeSwiperCarousels() {
	const swiperContainers = document.querySelectorAll('.swiper-container');

	swiperContainers.forEach((swiperContainer) => {
		const speed = swiperContainer.getAttribute('data-speed') || 400;
		const spaceBetween = swiperContainer.getAttribute('data-space-between') || 100;
		const paginationEnabled = swiperContainer.getAttribute('data-pagination') === 'true';
		const navigationEnabled = swiperContainer.getAttribute('data-navigation') === 'true';
		const autoplayEnabled = swiperContainer.getAttribute('data-autoplay') === 'true';
		const autoplayDelay = swiperContainer.getAttribute('data-autoplay-delay') || 3000;
		const paginationType = swiperContainer.getAttribute('data-pagination-type') || 'bullets';
		const effect = swiperContainer.getAttribute('data-effect') || 'slide';

		// Parse breakpoints from data attribute
		const breakpointsData = swiperContainer.getAttribute('data-breakpoints');
		let breakpoints = {};
		if (breakpointsData) {
			try {
				breakpoints = JSON.parse(breakpointsData);
			} catch (error) {
				console.error('Error parsing breakpoints data:', error);
			}
		}

		const swiperOptions = {
			speed: parseInt(speed),
			spaceBetween: parseInt(spaceBetween),
			breakpoints: breakpoints,
			effect: effect,
		};

		if (effect === 'fade') {
			swiperOptions.fadeEffect = {
				crossFade: true,
			};
		}

		if (paginationEnabled) {
			const paginationEl = swiperContainer.querySelector('.swiper-pagination');
			if (paginationEl) {
				swiperOptions.pagination = {
					el: paginationEl,
					type: paginationType,
					dynamicBullets: true,
					clickable: true,
				};

				// Custom pagination with numbers
				if (paginationType === 'custom') {
					swiperOptions.pagination.renderCustom = function (swiper, current, total) {
						var text = '';
						for (let i = 1; i <= total; i++) {
							if (current == i) {
								text += `<span class="swiper-pagination-numbers swiper-pagination-numbers-active">${i}</span>`;
							} else {
								text += `<span class="swiper-pagination-numbers">${i}</span>`;
							}
						}
						return text;
					};
				}
			}
		}

		if (navigationEnabled) {
			swiperOptions.navigation = {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			};
		} else {
			// Add the class to hide the navigation container
			const navigationEl = swiperContainer.querySelector('.swiper-navigation');
			if (navigationEl) {
				navigationEl.classList.add('swiper-navigation-hidden');
			}
		}
		if (autoplayEnabled) {
			swiperOptions.autoplay = {
				delay: parseInt(autoplayDelay),
			};
		}

		new Swiper(swiperContainer, swiperOptions);
	});
}

initializeSwiperCarousels();
