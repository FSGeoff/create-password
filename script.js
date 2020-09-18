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
	var length = prompt(
		"Choose the length of your password(8-128 characters)?"
	);
	var lCase = confirm(
		"Would you like lower case characters in your password?"
	);
	if (lCase) {
	}
	var uCase = confirm(
		"Would you like upper case characters in your password?"
	);
	if (uCase) {
	}
	var cNum = confirm("Would you like numbers in your password?");
	if (cNum) {
	}
	var sChars = confirm("Would you like special characters in your password?");
	if (sChars) {
	}

	// Checked to see that values were being passed
	console.log(length);
	console.log(lCase);
	console.log(uCase);
	console.log(cNum);
	console.log(sChars);

	document.getElementById("password").innerHTML = "Your Password is:";
}
