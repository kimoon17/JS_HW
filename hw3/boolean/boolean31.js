//You are given integers a, b, c, 
//which are sides of some triangle. 
//Check the truth of the statement: 
//"A triangle with sides a, b, c is isosceles."

let a = 3, b = 3, c = 7;
console.log("This triangle is isosceles: " + ( (a == b) || (b == c) || (a == c) ));
