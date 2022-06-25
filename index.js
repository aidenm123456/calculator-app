let inputString = "";
let inputArray = [];

function createInputArray(input) {
    
    if(input.includes("+")) {

        let tempInputArray = input.split("+").filter(Boolean);

        if (tempInputArray.length == 2) {

            inputArray = tempInputArray
            inputArray.push("+")

        }

        else {
            return
        }
    }
    

    else if(input.includes("-")) {
        
        let tempInputArray = input.split("-").filter(Boolean);

        if (tempInputArray.length == 2) {

            inputArray = tempInputArray
            inputArray.push("-")

        }

        else {
            return
        }
    }

    else if(input.includes("*")) {
        
        let tempInputArray = input.split("*").filter(Boolean);

        if (tempInputArray.length == 2) {

            inputArray = tempInputArray
            inputArray.push("*")

        }

        else {
            return
        }
    }

    else if(input.includes("/")) {
        
        let tempInputArray = input.split("/").filter(Boolean);

        if (tempInputArray.length == 2) {

            inputArray = tempInputArray
            inputArray.push("/")

        }

        else {
            return
        }
    }

    else {
        return
    }
    

}


// button clicking function and error checking

function numberClick(value) {

    // if fullstring is empty, add value to it but value cannot be operator

    if (inputString == '') {

        if(value != '+' && value != '-' && value != '*' && value != '/') {
            inputString += value;
        }

    }

    // if full string has only 1 number and no operator yet, add value to fullString, whether it is a number or operator

    else if (inputString.includes('+') == false && inputString.includes('-') == false && inputString.includes('*') == false && inputString.includes('/') == false) {
        inputString += value;
    }

    // if full string includes an operator already, only add values that equal numbers no operators allowed.
    else if (inputString.includes('+') == true || inputString.includes('-') == true || inputString.includes('*') == true || inputString.includes('/') == true) {

        if(value != '+' && value != '-' && value != '*' && value != '/') {
            inputString += value;
        }

        else {
            return
        }
    }

}

function operate(arr) {

    let num1 = Number(arr[0]);
    let num2 = Number(arr[1]);
    let operator = arr[2];

    if(operator == "+") {
        return addition(num1, num2);
    }

    else if(operator == "-") {
        return subtraction(num1, num2);
    }

    else if(operator == "*") {
        return multiplication(num1, num2);
    }

    else if(operator == "/") {
        return division(num1, num2);
    }

}

function addition(num1, num2) {
    return (num1 + num2);
}

function subtraction(num1, num2) {
    return (num1 - num2);
}

function multiplication(num1, num2) {
    return (num1 * num2);
}

function division(num1, num2) {
    return (num1 / num2);
}