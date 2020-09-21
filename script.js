// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
	var password = generatePassword();
	var passwordText = document.querySelector("#password");

	passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
function generatePassword() {
	// Empty array to hold password
	var pwdArr = [];
	// Asks for length of password between 8-128 character validation
	do {
		var pwdLength = prompt(
			"Choose the length of your password(8-128 characters)?"
		);
	} while (pwdLength < 8 || pwdLength > 128);

	// Takes the password length and divides it by 4
	section = Math.floor(Number(pwdLength) / 4);

	var selectLCase = confirm(
		"Would you like lower case characters in your password?"
	);

	// Function that selects lower case characters
	function getLowerCase() {
		var letters = [
			"a",
			"b",
			"c",
			"d",
			"e",
			"f",
			"g",
			"h",
			"i",
			"j",
			"k",
			"l",
			"m",
			"n",
			"o",
			"p",
			"q",
			"r",
			"s",
			"t",
			"u",
			"v",
			"w",
			"x",
			"y",
			"z",
		];
		if (selectLCase) {
			for (let i = 0; i <= Math.floor(section); i++) {
				pwdArr.push(Math.floor(Math.random(letters.length - 1)));
			}
		}
	}
	var selectUCase = confirm(
		"Would you like upper case characters in your password?"
	);
	if (selectUCase) {
		// Function to select Upper Case Letters
		function getUpperCase() {
			var letters = [
				"a",
				"b",
				"c",
				"d",
				"e",
				"f",
				"g",
				"h",
				"i",
				"j",
				"k",
				"l",
				"m",
				"n",
				"o",
				"p",
				"q",
				"r",
				"s",
				"t",
				"u",
				"v",
				"w",
				"x",
				"y",
				"z",
			];

			for (let i = 0; i <= Math.floor(section); i++) {
				pwdArr.push(
					Math.floor(Math.random(letters.toUpperCase().length - 1))
				);
			}
		}
		var selectNum = confirm("Would you like numbers in your password?");
		if (selectNum) {
			// Function that selects random numbers
			function getNumbers() {
				for (let i = 0; i <= Math.floor(section); i++) {
					pwdArr.push(Math.floor(Math.random() * 10 + 1));
				}
			}
		}
	}

	var selectChars = confirm(
		"Would you like special characters in your password?"
	);
	if (selectChars) {
		// Function to get special characters
		function getSpecialChars() {
			var specialChar = [
				"!",
				"@",
				"#",
				"$",
				"%",
				"^",
				"&",
				"*",
				"(",
				")",
				"-",
				"_",
				"=",
				"+",
				"`",
				"~",
				"{",
				"}",
				"[",
				"]",
				"|",
				"?",
				";",
				":",
			];
		}
	}

	// Checked to see that values were being passed
	console.log(pwdLength);
	console.log(section);
	console.log(selectLCase);
	console.log(selectUCase);
	console.log(selectNum);
	console.log(selectChars);
	console.log(pwdArr);
}
