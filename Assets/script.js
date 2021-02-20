//password generator homework assignment number 3
//strings that will grab different types of characters to include in password
var lowerString = "abcdefghijklmnopqrstuvwxyz";
var upperString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericString = "0123456789";
var specialCharString = "!()?[]'~;:!@#$%^&*+=-";


//Password generator prompts after button pushed
function generatePassword () {
  var password = [];
  var passwordLength = window.prompt("Enter a number between 8 and 128 characters");
  if (!passwordLength) {
    window.alert("You did not choose a number between 8 and 128 characters. Try again.");
    return;
  }
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("You did not choose a number between 8 and 128 characters. Try again");
    return;
  }

  //Number confirmation checker
  if (isNaN(passwordLength)) {
    window.alert("Please pick a NUMBER not a character.")
    return;
  }
  if (passwordLength >= 8 || passwordLength <= 128) {
    console.log(passwordLength);
  }

  //Password options
  var lowerString = confirm("Do you want to include lowercase letters in your password?");
  console.log(lowerString);

  var upperString = confirm("Do you want to include uppercase letters in your password?");
  console.log(upperString);

  var numericString = confirm("Do you want to include numbers in your password?");
  console.log(numericString);

  var specialCharString = confirm("Do you want to include special characters in your password?");
  console.log(specialCharString);

  //confirmation that selections were made function

  if (
    lowerString === false &&
    upperString === false &&
    numericString === false &&
    special === false
  ) {
    window.alert("Try again, you have not chosen one of the four options to generate a password.")
    return;
  }
  
  //combination function
  var combinePassword = "";
  if (lowerString) {
    combinePassword = lowerString;
  }
  if (upperString) {
    combinePassword = combinePassword + upperString;
  }
  if (numericString) {
    combinePassword = combinePassword + numericString;
  }
  if (specialCharString) {
    combinePassword = combinePassword + numericString;
  }

  //randomizer function
  for (var i = 0; i < passwordLength; i++) {
    password += combinePassword[Math.floor(Math.random() * combinePassword.length)];
  }

  //forward password to array function
  return password;
}

//Generator Button Functionality
var generateBtn = document.getElementById("generate");

//Password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
if(generateBtn){
// Event listener button function
generateBtn.addEventListener("click", writePassword)
}