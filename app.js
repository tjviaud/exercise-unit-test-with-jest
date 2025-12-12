// This is my function that sums two numbers
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}
const sum = (a,b) => {
    return a + b
}
function fromDollarToYen(dollars) {
    let euros = dollars * 1.07; // Convert dollars to euros
    let yen = euros * 156.5; // Convert euros to yen
    return yen; // Return the amount in yen
}
function fromYenToPound(yen) {
    let euros = yen / 156.5; // Convert yen to euros
    let pounds = euros * 0.87; // Convert euros to pounds
    return pounds; // Return the amount in pounds
}

// Just a console log for ourselves
console.log(sum(7,3))
console.log(fromDollarToYen(10)); // Test for $10 to Yen
console.log(fromYenToPound(1000)); // Test for 1000 Yen to Pounds

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
module.exports = { sum, fromEuroToDollar }