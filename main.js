//chickenmonkey
// for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
//     if (currentNumber % 5 === 0 && currentNumber % 7 === 0) {
//         console.log("ChickenMonkey") 
//     } else if (currentNumber % 7 === 0) {
//         console.log("Monkey")
//     } else if (currentNumber % 5 === 0) {
//             console.log("Chicken")
//     } else {
//         console.log(currentNumber)
//     }
    
// }

//battle of the bands 
// let bandNumber = 1

// const takeNumber = function (bandName) {
//     let list = `${bandNumber}. ${bandName}`
//     bandNumber +=1
//     return list
// }

// const scum = takeNumber("Galactic Scum")
// console.log(scum)  // This should print "1. Galactic Scum" in the console

// const under = takeNumber("Underdogs")
// console.log(under)  // This should print "2. Underdogs" in the console

const hamburger = {
	name: 'Hamburger',
	type: 'beef',
	cooked: false,
}
const zucchini = {
	name: 'Zucchini',
	type: 'vegetable',
	cooked: false,
}
const chickenBreast = {
	name: 'Chicken Breast',
	type: 'chicken',
	cooked: false,
}
const corn = {
	name: 'Corn',
	type: 'vegetable',
	cooked: false,
}
const steak = {
	name: 'Steak',
	type: 'beef',
	cooked: false,
}

// An array that is grouping the objects together.
const foods = [hamburger, zucchini, chickenBreast, corn, steak];

// An empty array that will store the objects after the `grill()` function cooks the food.
const cookedFood = []; 
console.log("cooked food before pushing", cookedFood)

// function grill (currentObject) {
//     currentObject.forEach(food => {
//         food.cooked = true;
//         cookedFood.push(currentObject);
        
//     });
// };

// function print (array) {
//     array.forEach(food => {
//         console.log("print function", food)
//     });
// }
// grill(foods)
// print(cookedFood)

// function grill2 (currentObject) {
//     // Modify the food so that it is cooked
//     currentObject.cooked = true;

//     // Put the cooked food into the appropriate array
//     cookedFood.push(currentObject);
// };
// foods.forEach(food => {
//     debugger
//     console.log("cooked food after grilling", cookedFood)
//     grill2(food)
// }) 