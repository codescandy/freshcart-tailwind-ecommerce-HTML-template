'use strict';

(function () {
	// Multi level menu dropdown
	const dropdownLinks = document.querySelectorAll('.dropdown-menu a.dropdown-toggle');
	dropdownLinks.forEach(function (dropdownLink) {
		dropdownLink.addEventListener('click', function (e) {
			if (!this.nextElementSibling.classList.contains('show')) {
				const parentDropdownMenu = this.closest('.dropdown-menu');
				const currentlyOpenSubMenus = parentDropdownMenu.querySelectorAll('.show');
				currentlyOpenSubMenus.forEach(function (openSubMenu) {
					openSubMenu.classList.remove('show');
				});
			}

			const subMenu = this.nextElementSibling;
			subMenu.classList.toggle('show');

			const parentDropdown = this.closest('li.nav-item.dropdown.show');
			if (parentDropdown) {
				parentDropdown.addEventListener('hidden.bs.dropdown', function (e) {
					const dropdownSubMenus = document.querySelectorAll('.dropdown-submenu .show');
					dropdownSubMenus.forEach(function (dropdownSubMenu) {
						dropdownSubMenu.classList.remove('show');
					});
				});
			}

			e.stopPropagation();
		});
	});

	// Default Tooltip
	var tooltipTriggerElements = document.querySelectorAll('[data-bs-toggle="tooltip"]');

	if (tooltipTriggerElements.length) {
		tooltipTriggerElements.forEach(function (element) {
			new bootstrap.Tooltip(element);
		});
	}

	// Increment Value
	function incrementValue(e) {
		e.preventDefault();
		var target = e.target;
		var fieldName = target.getAttribute('data-field');
		var parent = target.closest('div');
		var inputField = parent.querySelector('input[name="' + fieldName + '"]');
		var currentVal = parseInt(inputField.value, 10) || 0;

		inputField.value = currentVal + 1;
	}

	function decrementValue(e) {
		e.preventDefault();
		var target = e.target;
		var fieldName = target.getAttribute('data-field');
		var parent = target.closest('div');
		var inputField = parent.querySelector('input[name="' + fieldName + '"]');
		var currentVal = parseInt(inputField.value, 10) || 0;

		if (currentVal > 0) {
			inputField.value = currentVal - 1;
		}
	}

	document.querySelectorAll('.input-group').forEach(function (group) {
		group.addEventListener('click', function (e) {
			if (e.target.classList.contains('button-plus')) {
				incrementValue(e);
			} else if (e.target.classList.contains('button-minus')) {
				decrementValue(e);
			}
		});
	});

	// Default Popover
	var popoverTriggerElements = document.querySelectorAll('[data-bs-toggle="popover"]');

	if (popoverTriggerElements.length) {
		popoverTriggerElements.forEach(function (element) {
			new bootstrap.Popover(element);
		});
	}

	// Rater
	var starRating1;
	var raterElements = document.querySelectorAll('.rater');

	raterElements.forEach(function (element, index) {
		starRating1 = raterJs({
			starSize: 20,
			element: element,
			rateCallback: function rateCallback(rating, done) {
				this.setRating(rating);
				done();
			},
		});
	});

	// Flatpickr
	var flatpickrElements = document.querySelectorAll('.flatpickr');

	if (flatpickrElements.length) {
		flatpickrElements.forEach(function (element) {
			flatpickr(element, {
				disableMobile: true,
				// You can specify a default date here if needed
				// defaultDate: '2023-08-01',
			});
		});
	}

	// Stop event for dropdown
	var stopeventElements = document.querySelectorAll('.stopevent');

	if (stopeventElements.length) {
		stopeventElements.forEach(function (element) {
			element.addEventListener('off.bs.collapse.data-api', function (e) {
				e.stopPropagation();
			});
		});
	}

	// Check all for checkbox
	const checkAll = document.querySelector('#checkAll');

	if (checkAll) {
		checkAll.addEventListener('click', function () {
			var checkboxes = document.querySelectorAll('input[type="checkbox"]');
			checkboxes.forEach(function (checkbox) {
				if (checkbox !== checkAll) {
					checkbox.checked = checkAll.checked;
				}
			});
		});
	}

	// Live Alert Placeholder
	var liveAlertPlaceholder = document.getElementById('liveAlertPlaceholder');

	if (liveAlertPlaceholder) {
		var alert = function (message, type) {
			var wrapper = document.createElement('div');
			wrapper.innerHTML = `
        <div class="alert alert-${type} alert-dismissible" role="alert">
          <div>${message}</div>
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>`;
			liveAlertPlaceholder.append(wrapper);
		};

		var alertTrigger = document.getElementById('liveAlertBtn');

		if (alertTrigger) {
			alertTrigger.addEventListener('click', function () {
				alert('Nice, you triggered this alert message!', 'success');
			});
		}
	}

	// Price Range Slider
	var priceRangeSlider = document.getElementById('priceRange');

	if (priceRangeSlider) {
		noUiSlider.create(priceRangeSlider, {
			connect: true,
			behaviour: 'tap',
			start: [49, 199],
			range: {
				min: [6],
				max: [300],
			},
			format: wNumb({
				decimals: 1,
				thousand: '.',
				prefix: '$',
			}),
		});

		var priceRangeValueElement = document.getElementById('priceRange-value');

		priceRangeSlider.noUiSlider.on('update', function (values) {
			priceRangeValueElement.innerHTML = values.join(' - ');
		});
	}

	// File Input
	var fileInputs = document.querySelectorAll('.file-input');

	if (fileInputs.length) {
		fileInputs.forEach(function (input) {
			input.addEventListener('change', function () {
				var curElement = input.parentElement.parentElement.querySelector('.image');
				var reader = new FileReader();

				reader.onload = function (e) {
					curElement.setAttribute('src', e.target.result);
				};

				reader.readAsDataURL(input.files[0]);
			});
		});
	}

	const toastTrigger = document.getElementById('liveToastBtn');
	const toastLiveExample = document.getElementById('liveToast');

	// Check if both elements exist
	if (toastTrigger && toastLiveExample) {
		toastTrigger.addEventListener('click', () => {
			// Show the toast
			toastLiveExample.classList.add('show');
			toastLiveExample.classList.remove('hide');

			// Hide the toast after a certain time (e.g., 5 seconds)
			setTimeout(() => {
				toastLiveExample.classList.remove('show');
				toastLiveExample.classList.add('hide');
			}, 5000);
		});
	}
})();

// Input tags (Tagify) Manasvi
const tagsInput = document.querySelector('input[name=tags]');
if (tagsInput) {
	new Tagify(tagsInput);
}
