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
	var pwdArr = "";
	var characterArr = "";
	var letters = "abcdefghijklmnopqrstuvwxyz";
	var numbers = "1234567890";
	var specialChar = "!@#$%^&*()_-+={}[]`~';:,.|<>?/";

	// Asks for length of password between 8-128 character validation
	do {
		var pwdLength = prompt(
			"Choose the length of your password(8-128 characters)?"
		);
	} while (pwdLength < 8 || pwdLength > 128);

	do {
		// Asks if lower case characters should be included
		var selectLCase = confirm(
			"Would you like lower case characters in your password?"
		);

		if (selectLCase) {
			characterArr += letters;
		}
		// Asks if upper case characters should be included
		var selectUCase = confirm(
			"Would you like upper case characters in your password?"
		);
		if (selectUCase) {
			characterArr += letters.toUpperCase();
		}

		// Asks if numbers should be included
		var selectNum = confirm("Would you like numbers in your password?");
		if (selectNum) {
			characterArr += numbers;
		}
		//  Asks if special characters should be included
		var selectChars = confirm(
			"Would you like special characters in your password?"
		);
		if (selectChars) {
			characterArr += specialChar;
		}
	} while (
		selectChars === false &&
		selectLCase === false &&
		selectUCase === false &&
		selectNum === false
	);

	// Selects randomly from the array of selected options
	do {
		for (let i = 0; i < pwdLength; i++) {
			pwdArr +=
				characterArr[Math.floor(Math.random() * characterArr.length)];
		}
	} while (
		pwdArr.includes(letters) !== true &&
		pwdArr.includes(numbers) !== true &&
		pwdArr.includes(letters.toUpperCase()) !== true &&
		pwdArr.includes(specialChar !== true)
	);

	// Checked to see that values were being passed
	console.log(pwdLength);
	console.log(selectLCase);
	console.log(selectUCase);
	console.log(selectNum);
	console.log(selectChars);
	console.log(characterArr);
	console.log(pwdArr);

	return pwdArr;
}
