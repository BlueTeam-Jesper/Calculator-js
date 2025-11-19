// My script

// Declare variables for display and buttons
const display = document.getElementById("displayText");
const buttons = document.querySelectorAll("button");
// Declaring boolean to check if display is cleard and set to 0
let isCleard = false;
// Add eventlistners to all buttons
buttons.forEach(function(button){
    button.addEventListener('click', function(e){
        // Declare value to hold clicked buttons value
        const value = e.target.textContent;
        // If value of button is an integer add number to handleNumber()
       if(isFinite(value)){
            handleNumber(value);
       }
       // if not an integer then send operator to handleOperator()
       else{
        handleOperator(value)
       }
    })
})
// Handles the number buttons
function handleNumber(number){
     // Checking if the display placeholder "0" has to be removed
     if(!isCleard){          
        display.innerHTML = "";
        isCleard = true;
    }
    // Add the number to display
    display.innerHTML += number;
}
// Handles the operator buttons
function handleOperator(operator){
    let firstNumber;
    let secondnumber;
    let currentOperator;
     // Do addition
     if(operator == "+"){
        console.log('add')
    }
    // Do Subtraction
    else if (operator == "-"){
        console.log("subtract")
    }
    // Do Multiplication
    else if(operator == "x"){
        console.log("multiply")
    }
    //Do Division
    else if(operator == "/"){
        console.log("divide")
    }
}
// Handles the clear button
function handleClear(){
    
}
// Handles the result
function calculateResult(){

}