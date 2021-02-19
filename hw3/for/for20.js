//An integer N (> 0) is given. Using one cycle, 
//find the sum "1! + 2! + 3! + ... + N!"

let n = 5;

console.log(getFactorial(n));

function getFactorial(x) { 
    if (x === 1) { // TODO: use "===" when you don't want transform variable to general type
        return 1;
    }
    else {
        return x * getFactorial(x-1); // recursion is very good practice ))
    }
}

