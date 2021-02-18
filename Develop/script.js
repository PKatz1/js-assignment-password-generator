/ Assignment Code
var generateBtn = document.querySelector("#generate");
var alphabet =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numbers =["0","1","2","3","4","5","6","7","8","9"];
var special =[ "!", "#", "$", "%", "&", ")", "(", "*", "+", "?", "@", "~" ];
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
var lengthPrompt = function() {
  var userChoice = window.prompt("Enter a number between 8 - 128 characters:");
  // If user pressed Cancel, immediately end function
  if (!userChoice) {
    return;
  }
  else if (userChoice < 8 && userChoice < 128) {
    window.alert("Please choose a password length between 8 - 128 characters");
    return;
  }
  else if (userChoice >= 8 && userChoice <= 128) {
    var characterLength = userChoice;
    console.log(characterLength);
    return;
  }
};
var lowerCasePrompt = function() {
  var answerLowerCase = window.prompt("Lowercase letters? (Y/N)");
  if (!answerLowerCase) {
    window.alert("Please choose yes or no");
    console.log("they did not make a choice");
    lowerCasePrompt();
  }
  else if (answerLowerCase === "Y"){
    console.log("the user picked lowercase password");
    return;
  }
  else {
  console.log ("The user did not pick lowercase password");
  return;
  }
};
var upperCasePrompt = function() {
  var answerUpperCase = window.prompt("Uppercase letters? (Y/N)");
  if (!answerUpperCase) {
    window.alert("Please choose yes or no");
    console.log("they did not make a choice");
    upperCasePrompt();
  }
  else if (answerUpperCase === "Y") {
    //there needs to be a function that runs there to join the array
    console.log("the user picked uppercase password");
    return;
  }
  else {
  console.log("The user did not pick uppercase password");
  return;
  }
};
var numberPrompt = function() {
  var answerNumber = window.prompt("Numbers? (Y/N)");
  if (!answerNumber) {
    window.alert("Please choose yes or no");
    console.log("they did not make a choice");
    numberPrompt();
  }
  else if (answerNumber === "Y") {
    //there needs to be a function that runs there to join the array
    console.log("the user picked numbers in their password");
    return;
  }
  else{
  console.log("The user did not pick numbers in their password");
  return;
  }
};
var specialPrompt = function() {
  var answerSpecial = window.prompt("Special Characters? (Y/N)");
  if (!answerSpecial) {
    window.alert("Please choose yes or no");
    console.log("they did not make a choice");
    specialPrompt();
  }
  else if (answerSpecial === "Y") {
    //there needs to be a function that runs there to join the array
    console.log("the user picked Special Characters in their password");
    return;
  }
  else{
  console.log("The user did not pick Special Characters in their password");
  return;
  }
};
//Start password generation on button click
var generatePassword = function(){
//run the length prompt function
  lengthPrompt();
//run the lowercase function
  lowerCasePrompt();
//run the uppercase prompt
  upperCasePrompt();
//run the number prompt
  numberPrompt();
//run the special characters prompt
  specialPrompt();
//
};
