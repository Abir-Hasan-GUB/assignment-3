// Problem 01: Convert Feet to maile ... 
function feetToMile(distance){
    var unit = 0.000189394; // 1 feet = 0.000189394 mile.
    if(distance<0){
        console.log("Distance can not be negetive...");
    }else{
        var maile = distance * unit; // convert feet to maile
    }
    return maile;
}

var feet = 5684;
var mile = feetToMile(feet).toFixed(4); // call function for convert
console.log(feet + " Feet = "+mile+" Mile. \n");