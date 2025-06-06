// app.js file content
console.log("Hello World")

const sum = (a, b) => {
    return a + b
}

// Just a console log for ourselves
console.log(sum(7, 3))




//Conversiones de monedas
// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

function fromDollarToYen(dollars) {
    return dollars / oneEuroIs.USD * oneEuroIs.JPY
}

function fromEuroToDollar(euros) {
    return euros * oneEuroIs.USD
}

function fromYenToPound(yens) {
    return yens / oneEuroIs.JPY * oneEuroIs.GBP
}




console.log(fromDollarToYen(3.5));

console.log(fromYenToPound(1));

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
module.exports = { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound };

