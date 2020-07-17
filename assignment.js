// ******* Problem 01: Convert Feet to maile  *******

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


// ******* Problem 02: Wood Calculator *******

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


// ******* Problem 03: Brick Calculator ******* 

function brickCalculator(floor) {
    const maximumHeight = 15, mediumHeight = 12,
        lowerHeight = 10, brickPerFeet = 1000;

    var totalAmountOfBrick, firstTenFloor, afterTenFloor, lastAllFloor,
        brickOfFirst10th, brickOfSecond10th, brickOfLastFloor;

    if (floor <= 0) {
        return -1;
    }
    else if (floor >= 1 && floor <= 10) {
        totalAmountOfBrick = floor * maximumHeight * brickPerFeet;
        return totalAmountOfBrick;
    }
    else if (floor > 10 && floor <= 20) {
        afterTenFloor = floor - 10; // Find after 10 floor
        firstTenFloor = floor - afterTenFloor; // find 1st 10 floor.
        brickOfFirst10th = firstTenFloor * maximumHeight * brickPerFeet; // brick for 1st 10th floor
        brickOfSecond10th = afterTenFloor * mediumHeight * brickPerFeet;// brick for after 10th floor
        totalAmountOfBrick = brickOfFirst10th + brickOfSecond10th;
        return totalAmountOfBrick;
    }
    else if (floor > 20) {
        firstTenFloor = afterTenFloor = 10;
        lastAllFloor = (floor - (firstTenFloor + afterTenFloor));// find floor after 20th floor.
        brickOfFirst10th = firstTenFloor * maximumHeight * brickPerFeet; // brick for 1st 10th floor
        brickOfSecond10th = afterTenFloor * mediumHeight * brickPerFeet;// brick for after 10th floor
        brickOfLastFloor = lastAllFloor * lowerHeight * brickPerFeet;// brick for after 20th floor
        totalAmountOfBrick = brickOfFirst10th + brickOfSecond10th + brickOfLastFloor;
        return totalAmountOfBrick;
    }
}

var floor = 31;
var totalAmountOfBrick = brickCalculator(floor);// Call function for calculate brick
if (totalAmountOfBrick <= 0) {
    console.log("Floor Must Be Start With minimum 1 ...\n");
} else {
    console.log("Total Amount of Brick: " + totalAmountOfBrick + "\n");
}
