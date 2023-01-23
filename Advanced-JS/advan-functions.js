// Advanced Functions

const first =()=>{
    const greet = 'Hi';
    const second = () => {
        const name = "bobby"
        alert (greet);
    }
    return second
}
const newFunc = first();
newFunc();

// Closures - a function ran, the function executed is not going to execute again.
// But it's going to remember there are references to those variables.
// So the child scope always has access to the parens sscope
// The paresnt scope don't have access to their children.


// Currying - The process of converting a function that takes multiple arguments in to a function that takes them one at the time
const multiply = (a, b) => a * b;
const curriedMultiply = (a)/* a function that accespts a  */ => (b)/* another function thtat accepts b  */ => a * b; /* the last function calculates both a and b  */
curriedMultiply(3)(4);
/*We can also add   multiplyBY4  or any other number after the key word */

// Compose - the act of puting two functions together to form a third function where the output of one function is the input of the other

const compose = (f, g) => (a) => f(g(a)); /* as f&g are sum and a is 5 we look what the function returnes   */
const sum = (num) => num + 1;
compose(sum, sum)(5);/*  here having two brackets we are executing the first part of the function which retunes us another function which is : (a) =>f(g(a)) so a is f and g are sum sais give me 5 and then 5+1 and then we have 6 + sum =7     */

// A MUST FOR WEB DEVELOPERS!!
//  Avoiding Side Efects, functional purity 

//By avoiding side efects and always returning we create something that we call Deterministic- which means indipendentely of what my inputs going throught a dunction the return value will be always the same 

//Solve these problems:

//#1 Create a one line function that adds two parameters

//Closure: What does the last line return?
const addTo = x => y => x + y
var addToTen = addTo(10)
addToTen(3)

//Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
curriedSum(30)(1)


//Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
const add5 = curriedSum(5)
add5(12)

//Composing: What does the last line return?
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10)

//What are the two elements of a pure function?