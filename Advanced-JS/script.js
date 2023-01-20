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



// For all of these, what is the value of a when the function gets called with the alert()
// #1
function q1() {
    var a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(a);
}

//#2
var a = 0;
function q2() {
    a = 5;
}

function q22() {
    alert(a);
}


//#3
function q3() {
    window.a = "hello";
}


function q32() {
    alert(a);
}

//#4
var a = 1;
function q4() {
    var a = "test";
    alert(a);
}

//#5
var a = 2;
if (true) {
    var a = 5;
    alert(a);
}
alert(a);