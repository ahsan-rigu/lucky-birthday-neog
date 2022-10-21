const birthdayInput = document.querySelector("#birthday-input");
const luckyNumber = document.querySelector("#lucky-number");
const findOut = document.querySelector("#find-out");
const outputText = document.querySelector("#output-text");

findOut.addEventListener("click", isBirthdayLucky);

function compareNumbers(sum,luckyNumberValue){
    if(sum%luckyNumberValue === 0){
        outputText.textContent = "congratulations, your birthday is lucky"
    } else outputText.textContent = "your birthday may not be lucky but you can always change the lucky number"
}

function isBirthdayLucky(){
     var dob = birthdayInput.value;
     var sum = sumOfDigits(dob);
     if(sum && luckyNumber.value){
        compareNumbers(sum,luckyNumber.value);
     } else {outputText.textContent = "please enter both your birthday and lucky number"; 
     }
     
}
    
    
function sumOfDigits(dob){
    var birthdayValue = String(dob);
    birthdayValue = birthdayValue.replaceAll("-","");
    var sum = 0;
    console.log(birthdayValue);
    for(let i = 0; i < birthdayValue.length ; i++){
        sum = sum + Number(birthdayValue.charAt(i));
    }
    return sum;
}
