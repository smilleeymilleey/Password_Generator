// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write newPass to the #newPass input

function generatenewPass() {

  let alphaBig = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  let alphaLittle = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  let specialSymbols = ["!","@","#","$","%","&","?"];
  let num = [1,2,3,4,5,6,7,8,9,0];
  let uniqueCharacters = [];
  let newPass = "";



// accepting & determining the password length 


 let passLength = prompt("Please enter the number of characters you want to use for your password. (Remember to keep between 8 and 128 characters long");
   passLength = parseInt(passLength);
 
  if (isNaN(passLength) || 8 > passLength || passLength > 120){
    alert("Invalid Input");
    return;
  }
  else {
    alert("The number of characters is " + passLength + ".");
  }



// deternining what will happen when numbers, uppercase , lowercase , and symbols are inputed 

 let lowercase = confirm("Do you want to use lowercase letters?");
  if (lowercase == true){
    uniqueCharacters = uniqueCharacters.concat(alphaLittle);
    
  }
 let uppercase = confirm("Do you want to use uppercase letters?");
  if (uppercase == true){
    uniqueCharacters = uniqueCharacters.concat(alphaBig);
    
  }
  let specialCharacters = confirm("Do you want to use any special symbols?");
  if (specialCharacters == true){
    uniqueCharacters = uniqueCharacters.concat(specialSymbols);
    
  }
 let numbersOf = confirm("Do you want to use numbers?");
  if (numbersOf == true){
    uniqueCharacters = uniqueCharacters.concat(num);
    
  }


// assigning the length to a random mash up of the selected numbers, string, or symbol and adding them all to a string 


  for (let i = 0; i < passLength; i++) {
    let selectCharacters = Math.floor(Math.random() * uniqueCharacters.length);
       selectCharacters = uniqueCharacters[selectCharacters];
         newPass = newPass.concat(selectCharacters);
  }

  return newPass;

}

//assigining the output/new password to the button 

function writenewPass() {
  let newPass = generatenewPass();
  let newPassText = document.querySelector("#password");
    newPassText.value = newPass;

}

generateBtn.addEventListener("click", writenewPass);