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
	var length = prompt(
		"Choose the length of your password(8-128 characters)?"
	);
	var lCase = confirm(
		"Would you like lower case characters in your password?"
	);
	var uCase = confirm(
		"Would you like upper case characters in your password?"
	);
	var cNum = confirm("Would you like numbers in your password");
	var sChars = confirm("would you like special characters in your password?");
}
