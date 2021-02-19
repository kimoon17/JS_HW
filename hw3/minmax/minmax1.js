//Given an integer N. Generate an array of N random integers. 
//Find the minimum and maximum of the elements of the given array 
//and print them in the specified order.

let randomArray = new Array(7);

for (let i = 0; i < randomArray.length; i++) {
    randomArray[i] = Math.floor(Math.random() * 100);
}

// TODO: try to find min and max firstly

randomArray.sort(function(a, b) { // TODO: you do not have to get name function if you use it only
    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    } else {
        return 0;
    }
})

console.log(randomArray);
console.log("Min: " + randomArray[0]);
console.log("Max: " + randomArray[randomArray.length - 1]);