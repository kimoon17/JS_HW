//An integer N (> 1) is given. Find the smallest integer 
//K for which the inequality holds: 3 ^ K> N.

const n = 7;
let k = 1;

while (Math.pow(3, k) <= n) {
    k++;
}

console.log(k);