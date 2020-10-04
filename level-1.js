// Question 1
var aString = "This is a string value";

// Question 2
var person = {
    name: "Susanna",
    height: 180,
};

// Question 3
var outOfStock = false;

if (outOfStock === true) {
    console.log("Out of stock");
}
else {
    console.log("In stock");
};

// Question 4
var numbers = [1, 2, 3, 4, 5]
var manyNumbers = numbers.length;

for (var i = 0; i < manyNumbers; i++) {
    console.log(numbers[i]);
}

// Question 5
for(var count = 15; count <= 25; count++) {
    console.log(count);
}

// Question 6
    // I don't understand what this is asking me to do, I tried but I'm lost, please explain

// Question 7
var horses =  [
    {
        Name: "Bella",
        Height: 150,
        Stallion: false
    },
    {
        Name: "Nick",
        Height: 170,
        Stallion: true
    }
];
for(var i = 0; i < horses.length; i++) {
    var Height = horses[i].Height;
    var Stallion = horses[i].Stallion;
    console.log(Height);
    console.log(Stallion);
}

// Question 8
function whatIDontLike(theDislike) {
    console.log("I don't like " + theDislike);
}

// Question 9
function subtract(number1, number2) {
    var sum = number2 - number1;
    console.log(sum);
}

// Question 10
var emptyArray = [];

function fillArray(content) {
    var something = "something";
    emptyArray.push(something);
}
