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

const secretCodes = ['dukhi Aatma', 'Dukhi aatma', 'dukhi aatma', 'Dukhi Aatma']; // Add multiple secret codes here
const nextPageUrl = 'main.html'; // URL of the new page

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const userInput = codeInput.value.trim();

	if (secretCodes.includes(userInput)) {
		resultDiv.innerHTML = 'Yes, Thats My Baby';
		window.location.href = nextPageUrl; // Redirect to new page
	} else {
		resultDiv.innerHTML = 'Naa Tum meri baby nhi hoo kon hooo tum kaha hai meri Dukhi Aatma';
	}
});
