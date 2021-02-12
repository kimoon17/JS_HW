//B1
let b1_side = 6;
let b1_per = 4 * b1_side;
console.log("B1)")
console.log("Perimeter: " + b1_per);

//B2
let b2_side = 6;
let b2_area = b2_side * b2_side;
console.log("B2)");
console.log("Area: " + b2_area);

//B3
let b3_length = 6;
let b3_width = 8;
let b3_area = b3_length * b3_width;
let b3_per = 2 * (b3_length + b3_width);
console.log("B3)");
console.log("Perimeter: " + b3_per);
console.log("Area: " + b3_area);

//B4
let diameter = 4;
let pi = 3.14;
let b4_length = diameter * pi;
console.log("B4)");
console.log("Length: " + b4_length);

//B5 
let cubeEdge = 6;
let volume = cubeEdge*cubeEdge*cubeEdge;
let faceArea = cubeEdge * cubeEdge
let surfaceArea = 6 * faceArea;
console.log("B5)");
console.log("Volume: " + volume);
console.log("Surface Area: " + surfaceArea);

//B6 * 
let a = 4; 
let b = 6; 
let c = 7; 
let b6_volume = (a * b) * c;
let b6_surfaceArea = 2 * ((a*b) + (b*c) + (a*c));
console.log("B6)");
console.log("Volume: " + b6_volume);
console.log("Surface Area: " + b6_surfaceArea);

//I1 
let l = 16;
let m = l / 100;
console.log("I1)");
console.log("Meters: " + m);

//I4
let i4_a = 16;
let i4_b = 10;
let seg = i4_a / i4_b;
console.log("I4)");
console.log("Segments: " + seg);

//I5 
let i5_a = 16;
let i5_b = 10;
let i5_seg = i5_a % i5_b;
console.log("I5)");
console.log("Remainder: " + i5_seg);

//I6
let twoDigit = 25;
let leftDigit = Math.floor(25 / 10);
let rightDigit = 25 % 10;
console.log("I6)");
console.log("Two digit number: " + twoDigit);
console.log("Left digit: " + leftDigit);
console.log("Right digit: " + rightDigit);