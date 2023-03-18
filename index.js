
// Code your solution in this file!
function distanceFromHqInBlocks (x) {
    return Math.abs(x - 42); 
}

function distanceFromHqInFeet(x) {
    return distanceFromHqInBlocks(x) * 264;
}

function distanceTravelledInFeet(x, y) {
   return distanceFromHqInFeet(y) - distanceFromHqInFeet(x);
}

function calculatesFarePrice(x, y) {
    if (distanceTravelledInFeet(x, y) <= 400) {
        return 0;
    } else if (distanceTravelledInFeet(x, y) <= 2000) {
        return .02 * (distanceTravelledInFeet(x, y) - 400)
    } else if (distanceTravelledInFeet(x, y) <= 2500) {
        return 25;
    } else if (distanceTravelledInFeet(x, y) > 2500) {
        return "cannot travel that far";
    }
}
