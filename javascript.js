
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









// this is my code and above is what the homework gave 



function getRandomPassword() {
    let characters = ["a","b","c","d","e","f","g","h","i"]

    console.log(Math.floor(Math.random() * characters.length))

    for (let i = 0 < characters.length; i++)      
        let newCharacter = characters[i] + "";
    
   
};

getRandomPassword();