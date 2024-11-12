// Langunage switch by country

function changeLanguage(language) {
	// Change the text of the selected language
	document.getElementById('selectedLanguage').innerText = language;

	// Change the SVG based on the selected language
	const languageIcon = document.getElementById('languageIcon');
	switch (language) {
		case 'English':
			// Set SVG content for English
			languageIcon.innerHTML = `
    <g clip-path="">
      <path d="M0 0.5H16V12.5H0V0.5Z" fill="#012169" />
      <path d="M1.875 0.5L7.975 5.025L14.05 0.5H16V2.05L10 6.525L16 10.975V12.5H14L8 8.025L2.025 12.5H0V11L5.975 6.55L0 2.1V0.5H1.875Z" fill="white" />
      <path d="M10.6 7.525L16 11.5V12.5L9.225 7.525H10.6ZM6 8.025L6.15 8.9L1.35 12.5H0L6 8.025ZM16 0.5V0.575L9.775 5.275L9.825 4.175L14.75 0.5H16ZM0 0.5L5.975 4.9H4.475L0 1.55V0.5Z" fill="#C8102E" />
      <path d="M6.025 0.5V12.5H10.025V0.5H6.025ZM0 4.5V8.5H16V4.5H0Z" fill="white" />
      <path d="M0 5.325V7.725H16V5.325H0ZM6.825 0.5V12.5H9.225V0.5H6.825Z" fill="#C8102E" />
    </g>`;
			break;
		case 'Deutsch':
			// Set SVG content for Deutsch
			languageIcon.innerHTML = `
    <g clip-path="url(#clip0_5543_19751)">
      <path d="M0 8.5H16V12.5H0V8.5Z" fill="#FFCE00" />
      <path d="M0 0.5H16V4.5H0V0.5Z" fill="black" />
      <path d="M0 4.5H16V8.5H0V4.5Z" fill="#DD0000" />
    </g>
    <defs>
      <clipPath id="clip0_5543_19751">
        <rect width="16" height="12" fill="white" transform="translate(0 0.5)" />
      </clipPath>
    </defs>`;
			break;
		// Add cases for more languages
	}
}
