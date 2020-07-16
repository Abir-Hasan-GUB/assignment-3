// Problem 01: Convert Feet to maile ... 
function feetToMile(distance){
    var unit = 0.000189394; // 1 feet = 0.000189394 mile.
    if(distance<0){
        console.log("Distance can not be negetive...");
        return 0;
    }else{
        var maile = distance * unit; // convert feet to maile
    }
    return maile;
}

var feet = 5897;
var mile = feetToMile(feet).toFixed(5); // call function for convert
if(feet >= 0){
    console.log(feet + " Feet = "+mile+" Mile. \n");
}