//There are three points on the numerical axis: 
//A, B, C. Determine which of the last two points 
//(B or C) is closer to A, and derive this point 
//and its distance from point A.

const a = 6;
const b = 18;
const c = -6;

if (Math.abs(b-a) > Math.abs(c-a)) {
    console.log("c closer.")
} else if (Math.abs(b-a) < Math.abs(c-a)) {
    console.log("b closer.")
} else {
    console.log("equally as far.")
}