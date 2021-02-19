//An integer N (> 0) is given. Using one cycle, 
//find the sum "1 + 1 / (1!) + 1 / (2!) + 1 / (3!) + ... 
//+ 1 / (N!)" (Expression N! - N – factorial - denotes the 
//product of all integers from 1 to N: "N! = 1 · 2 · ... · N"). 
//The resulting number is an approximate value of the 
//constant e = exp (1).

const n = 5;
sum = 1;
temp = 1;

for (let i = 1; i <= n; i++) {
    temp *= i;
    sum += 1/temp;
}

console.log(sum);

// console.log(getProduct(n));

// function getProduct(x) {
//     if (x == 1) {
//         return 1;
//     } else {
//         temp *= getProduct(n-1);
//         sum += 1/temp;
//     }
// }

