// when button is clicked a prompt shows password criteria
// prompt for length of password -between 8 and 120-
// prompt for character type -lowercase, uppercase, numbers, and special characters-

// when prompts are answered the password is generated 
// then the password is displayed in an alert or written to the page 

function generatePassword () {
  
   let passwordLength= Number(window.prompt("How many characters do you want your password to be?(must be between 8-120 characters long)", ""));
   let lowerCaseCharacters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
   let upperCaseCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
   let numberCharacters = [1,2,3,4,5,6,7,8,9,0];
   let specialCharacters = ["!","@","#","$","%","&","?"]

   let allCharacters = lowerCaseCharacters.concat(upperCaseCharacters, numberCharacters, specialCharacters);

   var allRandomCharacters = Math.floor(Math.random() * allCharacters.length )

   passwordLength = parseInt(passwordLength);

   if (isNaN(passwordLength)) {
     alert("Invalid Input");
   }

   else {
     alert("The number of characters is " + passwordLength + ".")
   }
   

  //  setting password length 
   if (passwordLength <= 7) {
     console.log("your password is too short")
   } else if (passwordLength >= 120) {
     console.log("your password is too long")
   } else {
     console.log("your password length is set")
   }
  
   for (let i = 0; i < passwordLength.length; i++) {
     const element = array[i];
     
   }
  //  setting password character type 



  }



generatePassword();
