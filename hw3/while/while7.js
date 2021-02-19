//An integer N (> 0) is given. Find the smallest positive integer
//K whose square is greater than N: K ^ 2> N

const n = 25;
let k = 1;

while (k*k <= n) {
    k++;
}

console.log(k);