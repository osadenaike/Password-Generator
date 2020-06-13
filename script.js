// Assignment code here

// Created all variabes needed
var uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var number = [0,1,2,3,4,5,6,7,8,9];
var specialcharacter = ['!','#','$','%','&','*','+','-','.','/',':',';','<','=','>','?','@','^','_','~'];
var result = []; 

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //initial prompts and criteria
  var Passwordlength= window.prompt("Password needs to be between 8-128 characters in length.");
  if (Passwordlength < 8 || Passwordlength > 128) {
    window.alert("Password needs to be between 8-128 charcters. Please try again.");
      return writePassword();
  };
  //variables and prompts for criteria
  var firstConfirm = window.confirm("Would you like to include Upper Case letters")
  var secondConfirm = window.confirm("Would you like to include Lower Case letters");
  var thirdConfirm = window.confirm("Would you like to include Numbers");
  var fourthConfirm = window.confirm("Would you like to include Special characters");

  //conditional statement for criteria and alert if not criteria not met
  if(firstConfirm == false && secondConfirm == false && thirdConfirm == false && fourthConfirm == false)
 {
   alert("you need to pick at least one type!");
 };

 while(result.length <= Passwordlength-1){

  if(firstConfirm == true)
   {
    var randomuppercase = uppercase[Math.floor(Math.random()*uppercase.length)];
     result.push(randomuppercase)
    if(result.length==Passwordlength) {
      break;
    }
   }
    
   if(secondConfirm == true)
   {
    var randomlowercase = lowercase[Math.floor(Math.random()*lowercase.length)];
    result.push(randomlowercase)
    if(result.length==Passwordlength) {
      break;
    }
   }
   if(thirdConfirm == true)
   {
    var randomnumber = number[Math.floor(Math.random() * number.length)];
    result.push(randomnumber)
    if(result.length==Passwordlength) {
      break;
    }
   }
  
  if(fourthConfirm == true)
   {
    var randomspecialcharacter = specialcharacter[Math.floor(Math.random()*specialcharacter.length)];
    result.push(randomspecialcharacter)
    if(result.length==Passwordlength) {
      break;
    }
   }
  
  }
  console.log(result.length);
  console.log(result);

  var passwordText = document.querySelector("#password");

  passwordText.value = result.join("");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
