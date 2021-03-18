// when button is clicked a prompt shows password criteria
// prompt for length of password -between 8 and 120-
// prompt for character type -lowercase, uppercase, numbers, and special characters-

// when prompts are answered the password is generated 
// then the password is displayed in an alert or written to the page 

function generatePassword () {
   let passLength;
   let lowercase = true;
   let uppercase = true; 
   let numeric = true;
   let specChar = true;
   let setOfChar = [];
   let password = [];

   let passwordLength= window.prompt("How many characters do you want your password to be?(must be between 8-120 characters long)", "");
   let lowerCaseCharacters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
   let upperCaseCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
   let numberCharacters = [1,2,3,4,5,6,7,8,9,0];
   let specialCharacters = ["!","@","#","$","%","&","?"]

  //  adding different versions of possible arrays and randomizing 

   let allCharacters = lowerCaseCharacters.concat(upperCaseCharacters, numberCharacters, specialCharacters);
   
  //  let allRandomCharacters = Math.floor(Math.random() * allCharacters.length)

   passwordLength = parseInt(passwordLength);

 
   

  //  setting password length 

   if (isNaN(passwordLength) || 8 > passwordLength || passwordLength > 120) {
    alert("Invalid Input");
    // return;
  } else {
    alert("The number of characters is " + passwordLength + ".");
  
  }


    lowercase = confirm("Do you want to use lowercase letter?")
      if (lowercase == true) {
      setofchar = setOfChar.concat(lowerCaseCharacters); 
      }

     uppercase = confirm("Do you want to use uppercase letters?")
      if (uppercase == false) {
    setofchar = setOfChar.concat(upperCaseCharacters)
  }
     specChar = confirm("Do you want to use special characters?")
      if (specChar == true){
        setOfChar = setOfChar.concat(specialCharacters);
      }
     numeric = confirm ("Do you want to use numbers?")
      if (numeric == true) {
        setOfChar = setOfChar.concat(numberCharacters)
      }

     

        for (let i = 0; i < passLength; i++) {
          let charSelection = Math.floor(math.random() * setOfChar.length);
          charSelection = setOfChar[chatSelection];
          password = password.concat(characterselection); 

      
        }
  
};


generatePassword()
