// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = ""
var upperCase = ""
var number = ""
var special = ""
var length = 0
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
