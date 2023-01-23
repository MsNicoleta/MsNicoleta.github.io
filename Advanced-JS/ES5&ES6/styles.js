// ||let + const||

// const player = 'bobby'
// let experience = 100;
// let wizardLevel = false;

// if (experience > 90) {
//     let wizardLevel = true;
// }
 

//|| Destructuring ||

const obj= {
    player: 'bobby',
 experience:  100,
wizardLevel:  false
}
// The example below is a older method of indicating the same information as the example lower down.
// const player = obj.player;
// const experience = obj.experience;
// let wizardLevel = obj.wizardLevel;

const { player, experience } = obj;
let { wizardLevel } = obj;



// change everything below to the newer Javascript!

// let + const
var a = 'test';
var b = true;
var c = 789;
a = 'test2';

const a = 'test';
const b = true;
const c = 789;
a = 'test2';

// Destructuring
var person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};

const person = person.firstName + " " + person.lastName

var firstName = person.firstName;
var lastName = person.lastName;
var age = person.age;
var eyeColor = person.eyeColor;


// Object properties
var a = 'test';
var b = true;
var c = 789;

var okObj = {
  a: a,
  b: b,
  c: c
};


// Template strings
var message = "Hello " + firstName + " have I met you before? I think we met in " + city + " last summer no???";


// default arguments
// default age to 10;
function isValidAge(age) {
    return age
}

// Symbol
// Create a symbol: "This is my first Symbol"

// Arrow functions
function whereAmI(username, location) {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}