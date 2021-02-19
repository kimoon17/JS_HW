//An integer N (> 0) is given. 
//Using the operations of integer division and 
//taking the remainder of the division, display all its digits, 
//starting with the rightmost one (the ones place)

// FINISH //

let n = 25324;
let isMoreDigits = true;

while (isMoreDigits) {
    let right = n % 10;
    console.log(right);
    n = Math.floor(n / 10);
    if (Math.floor(n / 10) == 0) {
        isMoreDigits = false;
        right = n % 10;
        console.log(right);
    }

}

