//You are given a real number A and an integer N (> 0). 
//Using one loop, find the sum "1 + A + A ^ 2 + A ^ 3 + ... + A ^ N"

const a = 3.14;
let n = 6;
let sum = 0;

for (let i = 0; i <= n; i++) {
    sum += Math.pow(a, i);
}

console.log(sum);