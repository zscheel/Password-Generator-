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

function generatePassword() {
    var chars = "";
    var password = "";
    content();

    if (lowerCase) {
        chars = "abcdefghijklmnopqrstuvwxyz"
    }
    if (upperCase) {
        chars = chars + "ABCDEFGHIJKLMNOPQRSTUVXYZ"
    }
    if (number) {
        chars = chars + "1234567890"
    }
    if (special) {
        chars = chars + "!@#$%^&*()"
    }

    console.log(chars);

    for (var i = 0; i <= length -1; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    console.log(password);
    return password;
}

function content () {
    length = prompt("How long do you want your password?");
    if (length >=  8 && length <= 128) {
        lowerCase = confirm("Do you want lowercase letters? (y or n)");
        upperCase = confirm("Do you want uppercase letters? (y or n)");
        number = confirm("Do you want to include numbers?");
        special = confirm("Do you want special character?");
    } else {
        alert("Password length needs to be between 8 and 128 Characters")
        content();
    }

    
    if (!lowerCase && !upperCase && !number && !special) {
        alert("You need to choose at least one criteria!");
        content()
    }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
