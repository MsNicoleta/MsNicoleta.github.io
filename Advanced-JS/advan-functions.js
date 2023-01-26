// Advanced Functions

// const first =()=>{
//     const greet = 'Hi';
//     const second = () => {
//         const name = "bobby"
//         alert (greet);
//     }
//     return second
// }
// const newFunc = first();
// newFunc();

// Closures - a function ran, the function executed is not going to execute again.
// But it's going to remember there are references to those variables.
// So the child scope always has access to the parens sscope
// The paresnt scope don't have access to their children.


// Currying - The process of converting a function that takes multiple arguments in to a function that takes them one at the time
// const multiply = (a, b) => a * b;
// const curriedMultiply = (a)/* a function that accespts a  */ => (b)/* another function thtat accepts b  */ => a * b; /* the last function calculates both a and b  */
// curriedMultiply(3)(4);
/*We can also add   multiplyBY4  or any other number after the key word */

// Compose - the act of puting two functions together to form a third function where the output of one function is the input of the other

// const compose = (f, g) => (a) => f(g(a)); /* as f&g are sum and a is 5 we look what the function returnes   */
// const sum = (num) => num + 1;
// compose(sum, sum)(5);/*  here having two brackets we are executing the first part of the function which retunes us another function which is : (a) =>f(g(a)) so a is f and g are sum sais give me 5 and then 5+1 and then we have 6 + sum =7     */

// A MUST FOR WEB DEVELOPERS!!
//  Avoiding Side Efects, functional purity

//By avoiding side efects and always returning we create something that we call Deterministic- which means indipendentely of what my inputs going throught a dunction the return value will be always the same 

//Solve these problems:

//#1 Create a one line function that adds two parameters

//Closure: What does the last line return?
// const addTo = x => y => x + y
// var addToTen = addTo(10)
// addToTen(3)

//Currying: What does the last line return?
// const sum = (a, b) => a + b
// const curriedSum = (a) => (b) => a + b
// curriedSum(30)(1)


//Currying: What does the last line return?
// const sum = (a, b) => a + b
// const curriedSum = (a) => (b) => a + b
// const add5 = curriedSum(5)
// add5(12)

//Composing: What does the last line return?
// const compose = (f, g) => (a) => f(g(a));
// const add1 = (num) => num + 1;
// const add5 = (num) => num + 5;
// compose(add1, add5)(10)

//What are the two elements of a pure function?


//Arrays

const array = [1, 2, 10, 16];
const double = []
const newArray = array.forEach((num) => {
    double.push(num * 2);
})
console.log('forEach',double);

// map, filter, reduce

const mapArray = array.map(num => num * 2);
console.log('map', mapArray);

// for the use of a loop and do some action -  will be better to use map instead of forEach because:
// with forEach The operation may do nothing we can leave it completely blank forEach carea about to iterate one by one over a colection of elements and apply whathever we tell each element.
// With map for example has some restrictions on the operation it expects the operation to return an element.
//The map iterats loops through over a collection of elements applying the operation on each element- storing the result of each invocation of the operation into another collection which is map array.
//
// map tansforms the array it creates a new array which is the map array

//filter
const filterArray = array.filter(num => num > 5);
console.log('filter', filterArray);

//reduce

const reduceArray = array.reduce((accumulator, num) => {
    return accumulator + num
}, 5);
console.log ('reduce', reduceArray);
// accumulator 
// 
// 
// 
// 

// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
const modifiedUsernames = [];
array.forEach(user => {
    modifiedUsernames.push(user.username + "!");
});
console.log(modifiedUsernames);

//Create an array using map that has all the usernames with a "? to each of the usernames
const modifiedUsernames1 = array.map(user => user.username + "?");
console.log(modifiedUsernames1);

//Filter the array to only include users who are on team: red

const redTeamUsers = array.filter(user => user.team === "red");
console.log(redTeamUsers);
//This will output an array with the users that are on team red:

//Find out the total score of all users using reduce
const totalScore = array.reduce((acc, user) => acc + user.score, 0);
console.log(totalScore);
//This will output the total score of all the users in the array.

// (1), what is the value of i?
// The value of i in this case is the index of the current element in the arrayNum.
// (2), Make this map function pure:
const arrayNum1 = [1, 2, 4, 5, 8, 9];
const newArray1 = arrayNum1.map((num, i) => {
	console.log(num, i);
	alert(num);
	return num * 2;
})

//Here's an example of a pure version of the function:


const arrayNum2 = [1, 2, 4, 5, 8, 9];
const newArray3 = arrayNum2.map(num => num * 2);

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.

const newArray4 = array.map(user => {
    user.items = user.items.map(item => item + "!");
    return user;
})
console.log(newArray4);