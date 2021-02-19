//An integer is given. Print its description string of the 
//form "negative even number", "zero number", 
//"positive odd number", etc.

const myNum = 0;
let message = "";

//tests

if (myNum > 0) {
    message += "positive";
    checkEven();
} else if (myNum < 0) {
    message += "negative";
    checkEven();
} else {
    message += "zero";
}

message += " number";
console.log(message);

function checkEven() {
    (myNum % 2 === 0) ? message += " even" : message += " odd";
}