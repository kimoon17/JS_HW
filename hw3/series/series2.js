//Ten real numbers are given. Find their product.

const array = [2.4, 1.2, 4.6, 7.8, 5, 7.6, 9.8, 6.5, 3.2, 1.2];
let sum = 1;

array.map((item) => {
    sum *= item;
});

console.log(sum);