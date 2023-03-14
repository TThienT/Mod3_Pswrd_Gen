//Query Variable
var genButton = document.querySelector("#generate");


// Array of uppercase 
var upperCasedChar = [
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
];

// Array of lowercase 
var lowerCasedChar = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
];

// Array of numbers
var numbChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of special characters 
var specialChar = [
  "@", "%", "+", "\\", "/", "'", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", ".",
];




//Get and store user options
function getPasswordOptions(userNumChar) {
  if (isNaN(userNumChar)) {
    alert("Please enter a valid number.");
    return false;
  } else if (parseInt(userNumChar) < 8) {
    alert("Password length must be at least 8 characters.");
    return false;
  } else if (parseInt(userNumChar) >= 128) {
    alert("Password must be less than 129 characters.");
    return false;
  }
  return true;
}

//Get random characters from each arrays
function getRandElFromArray(collection) {
  return collection[Math.floor(Math.random() * collection.length)];
}

//Function to prompt user for password options
function generatePassword() {
  var userNumChar = prompt(
    "How many characters do you want your password to contain?"
  );
  var passwordValid = getPasswordOptions(userNumChar);
  if (passwordValid) {
    var inclSpecialChar = confirm(
      "Click OK to confirm special characters."
    );
    var inclNumb = confirm("Click OK to confirm adding numeric characters.");
    var inclLowerCase = confirm(
      "Click OK to confirm adding lowercase characters."
    );
    var inclUpperCase = confirm(
      "Click OK to confirm including uppercase characters."
    );
  }
  //If statements to check user selection
  if (
    [inclSpecialChar, inclNumb, inclLowerCase, inclUpperCase].includes(
      true
    )
  )

    var chosenChar = [];

    var guaranteedChar = [];

  //If statement for incorporating user selection of options into generated password
  if (inclSpecialChar) {
    chosenChar = chosenChar.concat(specialChar);
    guaranteedChar.push(
      specialChar[Math.floor(Math.random() * specialChar.length)]
    );
  }
  if (inclNumb) {
    chosenChar = chosenChar.concat(numbChar);
    guaranteedChar.push(
      numbChar[Math.floor(Math.random() * numbChar.length)]
    );
  }
  if (inclLowerCase) {
    chosenChar = chosenChar.concat(lowerCasedChar);
    guaranteedChar.push(
      lowerCasedChar[
        Math.floor(Math.random() * lowerCasedChar.length)
      ]
    );
  }
  if (inclUpperCase) {
    chosenChar = chosenChar.concat(upperCasedChar);
    guaranteedChar.push(
      upperCasedChar[
        Math.floor(Math.random() * upperCasedChar.length)
      ]
    );
  }

  //For loop to iterate chosen password length 
  var randomChar = [];
  for (var i = 0; i < userNumChar; i++) {
    var index = Math.floor(Math.random() * chosenChar.length);
    randomChar.push(chosenChar[index]);
  }
  var replacedPosition = {};

  //While loop for replaced characters
  while (guaranteedChar.length > 0) {
    var replaceChar = Math.floor(Math.random() * randomChar.length);
    if (!replacedPosition[replaceChar]) {
      randomChar[replaceChar] = guaranteedChar.pop();
      replacedPosition[replaceChar] = true;
    }
  }
  return randomChar.join("");
}

// // Display password 
function writePassword() {
  var passwordText = document.querySelector("#password");
  var password = generatePassword();
  

  passwordText.value = password;
}

// // Add event listener for genButton
genButton.addEventListener("click", writePassword);


