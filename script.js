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
	var letters = [
		"a",
		"b",
		"c",
		"d",
		"e",
		"f",
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
	var arr = [];
	var section = 0;
	pwdLength = 0;
	while (pwdLength < 8 || pwdLength > 128) {
		var pwdLength = prompt(
			"Choose the length of your password(8-128 characters)?"
		);
	}

	var selectLCase = confirm(
		"Would you like lower case characters in your password?"
	);
	if (selectLCase) {
		for (let i = 0; i <= Math.floor(section); i++) {
			arr.push(letters[Math.random() * Number(letters.length - 1)]);
		}
	}
	var selectUCase = confirm(
		"Would you like upper case characters in your password?"
	);
	if (selectUCase) {
	}
	var selectNum = confirm("Would you like numbers in your password?");
	if (selectNum) {
	}
	var selectChars = confirm(
		"Would you like special characters in your password?"
	);
	if (selectChars) {
	}

	// Checked to see that values were being passed
	console.log(pwdLength);
	console.log(section);
	console.log(selectLCase);
	console.log(selectUCase);
	console.log(selectNum);
	console.log(selectChars);
	console.log(arr);
}
