//password generator homework assignment number 3
//strings that will grab different types of characters to include in password
//Generator Button Functionality
var generateBtn = document.querySelector("#generate");
//var generateBtn = document.getElementById("generate");

//password strings
var lowerString = "abcdefghijklmnopqrstuvwxyz";
var upperString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericString = "0123456789";
var specialCharString = "!()?[]'~;:!@#$%^&*+=-";

// Event listener button function
generateBtn.addEventListener("click", writePassword);

//Password generator prompts after button pushed
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  if (password == undefined){
    return;
  }
  else
  passwordText.value = password;
}

//Start pasword generation when button is clicked
var generatePassword = function(){
  var password =[];
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
  if (passwordLength >= 8 || passwordLength <=128){
    console.log(passwordLength);
  }
  //password options
  var lowercase = confirm("Would you like to use lowercase letters in your password?");
  console.log(lowercase);
  var uppercase = confirm("Would you like to use uppercase letters in your password?");
  console.log(uppercase);
  var numbers = confirm("Would you like to use numbers in your password?");
  console.log(numbers);
  var special = confirm("Would you like to use special characters in your password?");
  console.log(special);
  
  if (
    lowerString === false &&
    upperString === false &&
    numericString === false &&
    specialCharString === false
    ) {
      window.alert("Try again, you have not chosen one of the four options to generate a password.");
      return;
    }
    
    else {
      //combination function
      var combinePassword = "";
      if (lowercase) {
        combinePassword = lowerString;
      }
      if (uppercase){
        combinePassword = combinePassword + upperString;
      }
      if (numbers){
        combinePassword = combinePassword + upperString;
      }
      if (special){
        combinePassword = combinePassword + specialCharString;
  
    //randomizer function
    for (var i = 0; i < passwordLength; i++) {
      password += combinePassword[Math.floor(Math.random() * combinePassword.length)];
    }
   //adds password to the array
   console.log (password);
    return password;
  }
  }
}