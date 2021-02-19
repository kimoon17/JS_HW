//A real number X and an integer N (> 0) are given. 
//Find the value of the expression "1 + X + X ^ 2 / (2!) + ... + X ^ N / (N!)"

const x = 2.7;
let n = 5;
let sum = 0;
let factorial = 1;

for (let i = 1; i <= n; i++) {
    factorial *= i;
    sum += Math.pow(x, i) / factorial;
}

console.log(sum);