//const for constant we are not abble to reeasign a variable
// we cange change the properties but we cannot resign the veariable of the const
//let the let though is it possible to change/ reasign the variable 


// const player = 'bobby'
// let experience = 100;
// let wizardLevel = false;

// if (experience > 90) {
//     let wizardLevel = true;
// }
 

//|| Destructuring ||

// const obj= {
//     player: 'bobby',
//  experience:  100,
// wizardLevel:  false
// }
// The example below is a older method of indicating the same information as the example lower down.
// const player = obj.player;
// const experience = obj.experience;
// let wizardLevel = obj.wizardLevel;

// const { player, experience } = obj;
// let { wizardLevel } = obj;



// change everything below to the newer Javascript!
//Ecample
// let + const
// var a = 'test';
// var b = true;
// var c = 789;
// a = 'test2';

//Solution
// let a = 'test';
// const b = true;
// const c = 789;
// a = 'test2';


// Destructuring

// Example
// var person = {
//     firstName : "John",
//     lastName  : "Doe",
//     age       : 50,
//     eyeColor  : "blue"
// };

// const person = person.firstName + " " + person.lastName
//Solution
// const { firstName,
//  lastName,
// age,
// eyeColor }
//  = person;

// var firstName = person.firstName;
// var lastName = person.lastName;
// var age = person.age;
// var eyeColor = person.eyeColor;


// Object properties

// const name = 'john snow';
// const obj = {
//     [name]: 'hello'
//     ['ray + smith']: 'hihih'
// }

// var a = 'test';
// var b = true;
// var c = 789;
//const okObj = { a, b, c };
// var okObj = {
//   a: a,
//   b: b,
//   c: c
// };




// Template strings
// const name = "Sally";
// const age = 34;
// const pet = "horse"

// const greeting = "hello" + name + " you seem to be doing " + greeting + "!";

// const greetingBest = `Hello ${name} you seem to be ${age - 10}. What a lovely pet you have`;


// Template strings

//const message = `Hello ${firstName} have I met you before? I think we met in ${city}. last summer no???`;




// default arguments -- When we use default arguments they work even after we change our  parameters.
//// default arguments
// default age to 10;
const isValidAge = (age = 10) => age;

// function greet(name = '', age = 30, pet = 'cat') {
//     return `Hello ${name} you seem to be ${age - 10}. What a lovely pet you have`;
// }
// // default age to 10;
// function isValidAge(age) {
//     return age
// }

// Symbol
// Symbols are used because they can create a  unique type is it mostly used for object properties.
// Create a symbol: "This is my first Symbol"
// let sim1 = Symbol(0);
// let sim2 =Symbol(1);
// let sim3 = Symbol(2);

// Symbol
// Create a symbol: "This is my first Symbol"
//const sym = Symbol('This is my first Symbol');



// Arrow functions
// function add(a, b) {
//     return a + b;
// }
// const add2 = (a,b) => a + b;

// // we have  a function expression that exepts a parameter wit the arrow function it returns automaticly.

// function whereAmI(username, location) {
//     if (username && location) {
//         return "I am not lost";
//     } else {
//         return "I am totally lost!";
//     }
// }


// const whereAmI = (username, location) => {
//     if (username && location) {
//         return "I am not lost";
//     } else {
//         return "I am totally lost!";
//     }
// }