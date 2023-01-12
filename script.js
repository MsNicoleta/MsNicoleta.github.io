

/* Function Declaration */
function sayHello() {
    console.log("Hello");
}
sayHello();

/* Function Expression */
/* also caled Anonumous Function  ( so there is no way of recaling back the function)*/
var sayBye = function () {
    console.log("Bye");
}
sayBye();
/* 
function sing() {
    console.log("aaaahhhhhhhhhh");
    console.log("peeeeeeeeeee");
}

sing();
 */
// the function below is a more efficient way to to have the same result as the function above.
/* function sing(song) {
    console.log(song);
}
sing("lalalalaaallallslslslslslslslslslslslslslslslslsl");
sing("lalalalaaallallslslslslslslsl");
 */

 /* Function Multiply */
function multiply(a, b) {
   // console.log(a, b);
    return a * b
}
multiply(5, 10);
