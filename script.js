// const form = document.getElementById('login-form');
// const codeInput = document.getElementById('code');
// const submitBtn = document.getElementById('submit-btn');
// const resultDiv = document.getElementById('result');

// const secretCode = 'dukhi Aatma'; // Replace with your secret code
// const nextPageUrl = 'main.html'; // Replace with the URL of the new page

// form.addEventListener('submit', (e) => {
// 	e.preventDefault();
// 	const userInput = codeInput.value.trim();
// 	if (userInput === secretCode) {
// 		resultDiv.innerHTML = 'Yes, Thats My Baby';
// 		window.location.href = nextPageUrl; // Redirect to new page
// 	} else {
// 		resultDiv.innerHTML = 'Naa Tum meri baby nhi hoo kon hooo tum kaha hai meri Dukhi Aatma';
// 	}
// });
const form = document.getElementById('login-form');
const codeInput = document.getElementById('code');
const submitBtn = document.getElementById('submit-btn');
const resultDiv = document.getElementById('result');

// Multiple secret codes (case-insensitive)
const secretCodes = ['dukhi aatma', 'Baby', 'Meethi Rasmalai']; 
const nextPageUrl = 'main.html'; // URL of the new page

// Ensure input is visible (not a password field)
codeInput.setAttribute('type', 'text');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const userInput = codeInput.value.trim().toLowerCase(); // Convert input to lowercase

	// Convert all secret codes to lowercase and check
	if (secretCodes.some(code => code.toLowerCase() === userInput)) {
		resultDiv.innerHTML = 'Yes, Thats My Baby';
		window.location.href = nextPageUrl; // Redirect to new page
	} else {
		resultDiv.innerHTML = 'Naa Tum meri baby nhi hoo kon hooo tum kaha hai meri Dukhi Aatma';
	}
});
