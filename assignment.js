// Problem 01: Convert Feet to maile ... 

function feetToMile(distance) {
    var unit = 0.000189394; // 1 feet = 0.000189394 mile.
    if (distance < 0) {
        console.log("Distance can not be negetive...\n");
        return 0;
    } else {
        var maile = distance * unit; // convert feet to maile
    }
    return maile;
}

var feet = 5897;
var mile = feetToMile(feet).toFixed(5); // call function for convert
if (feet >= 0) {
    console.log(feet + " Feet = " + mile + " Mile. \n");
}


// Problem 02: WoodCalculator... 

function woodCalculator(chair, table, bed) {
    //set dimension for every particle in cubic feet.
    const dimensionOfChair = 1;
    const dimensionOfTable = 3;
    const dimensionOfBed = 5;

    var amountOfChair = chair * dimensionOfChair;
    var amountOfTable = table * dimensionOfTable;
    var amountOfBed = bed * dimensionOfBed;

    var totalAmountOfWood = amountOfChair + amountOfTable + amountOfBed;
    return totalAmountOfWood;
}

var chair = 6;
var table = 2;
var bed = 3;
var totalAmountOfWood = woodCalculator(chair, table, bed);//call function for calculate total wood.
console.log("Total wood in cubic feet: " + totalAmountOfWood + "\n");

