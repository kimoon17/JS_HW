//It is known that X kg of chocolates costs A rubles, 
//and Y kg of toffee costs B rubles. Determine how much 1 kg of chocolates, 
//1 kg of toffee, and how many times are more expensive than toffee.

//var
const choco_FiveKGCost = 9.50;
const toffee_FiveKGCost = 3.50;

//main
const choco_OneKGCost = choco_FiveKGCost / 5;
const toffee_OneKGCost = toffee_FiveKGCost / 5;
const times = choco_OneKGCost / toffee_OneKGCost;
console.log("1 kg of chocolate is: "+ times.toFixed(2) +"x more expensive than the toffee.");