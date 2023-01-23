// // Scope

// var b = "Can I access this?"
// function bb() {
//     var a  = "hello";
// }

// // The root scope (Window)
// var fun = 5;
// function funFunction() {
//     // Child scope
//     var fun = "heloo";
//     console.log(1,fun);
// }
// function funerFunction() {
//      //Child scope
//     var fun = "Byee";
//     console.log(2,fun);
// }

// // In the first and second function, we have overwritten the root scope. The consequence of this is that we lose access to the root scope, and we won't be able to regain it.
// function funestFunction() {
//      //Child scope
//     fun = "AHHHH";
//     console.log(3,fun);
// }
// // In the third function, we have modified the root variable to something else.
// console.log("window",fun);
// funFunction();
// funerFunction();
// funestFunction();

// var fun = 5;
// function funestFunction() {
//     //Child scope
//     console.log(fun);
// }
// In the example above, we have a variable and a function  the console.log questions ( hey, do you know who fun is? and are we have the fun defined in the var? It responds, yes, the fun var is = 5 ); if we do not indicate the mar of a function we will receive an error message.




// // For all of these, what is the value of a when the function gets called with the alert()
// // #1
// function q1() {
//     var a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(a); //3
// }

// //#2
// // you must first run q2() in your console to add the new value. then run q22()
// var a = 0;
// function q2() {
//     a = 5;
// }

// function q22() {
//     alert(a); //5
// }

// // run in the console:
// // q22() -- 0
// // q2() -- undefined
// // q22() -- 5

// //#3
// function q3() {
//     window.a = "hello";
// }

// // you must first run q3() in your console to add the a property to the window. then run q32()
// function q32() {
//     alert(a); //"hello"
// }

// //#4
// var a = 1;
// function q4() {
//     var a = "test";
//     alert(a); //"test"
// }

// //#5 with var keyword, if statements do not create a new scope
// var a = 2;
// if (true) {
//     var a = 5;
//     alert(a); // 5
// }
// alert(a); // 5

//||Ternary Operator||
// function isUserValid(bool) {
//     return bool;
// }

// var answer = isUserValid(true) ? "you may enter" : "Access denied";

// // var automatedAnswer =
// var answer =
//     "Your account # is " + (isUserValid(false) ? "1234" : "not available");


    //the below function is a else if condition function
// function condition() {
//     if (isUserValid(true)) {
//         return "You may enter";
//     } else {
//         return "Access denied";
//     }
// }
// var answer2 = condition();


//|| Switch||
// function moveCommand(direction){
//     var whatHappens;
//     switch (direction) {
//         case "foreward":
//             whatHappens = "you encountere a monster";
//             break;
//         case "back":
//             whatHappens = "you arrived home";
//             break;
//         case "right":
//             whatHappens = "you found a river";
//             break;
//         case "left":
//             whatHappens = "you run into a troll";
//             break;
//         default:
//             whatHappens = "please enter a valid direction";
//     }
//     return whatHappens;
// }

// //#1 change this function into a ternary and assign it to variable called experiencePoints
// function experiencePoints() {
//     if (winBattle()) {
//         return 10;
//     } else {
//         return 1;
//     }
// }

// var experiencePoints = winBattle() ? 10 : 1;

// //Using this function, answer the questions below:
// function moveCommand(direction) {
//     var whatHappens;
//     switch (direction) {
//         case "forward":
//             break;
//             whatHappens = "you encounter a monster";
//         case "back":
//             whatHappens = "you arrived home";
//             break;
//             break;
//         case "right":
//             return whatHappens = "you found a river";
//             break;
//         case "left":
//             break;
//             return whatHappens = "you run into a troll";
//             break;
//         default:
//             whatHappens = "please enter a valid direction";
//     }
//     return whatHappens;
// }

// //#2 return value when moveCommand("forward");
// undefined

// //#3 return value when moveCommand("back");
// "you arrived home"

// //#4 return value when moveCommand("right");
// "you found a river"

// //#5 return value when moveCommand("left");
// undefined

// //BONUS: practice makes perfect. Go and write your own switch function. It takes time to get used to the syntax!
