/* //ternary even
let num = 970;
num % 2 == 0 ? console.log("even"):console.log("odd");
//ternary odd
num = 97;
num % 2 == 0 ? console.log("even"):console.log("odd"); */


/* var AQI = 340;
if (AQI > 500) {
    console.log("bad");
} else if (AQI > 200) {
    console.log("normal");
} else if (AQI > 100) {
    console.log("good");
} else {
    console.log("excellent");
} */


/* console.log((AQI>300)?"bad":"normal":"good"); */
var AQI =340;
    console.log( AQI > 300? "Air Quality is BAD": AQI > 200 ? "Air Quality is NORMAL" : AQI > 100 ? "Air Quality is GOOD": "Air Quality is EXCELLENT"); 