

/* Function Declaration 
function sayHello() {
    console.log("Hello");
}
sayHello();

 Function Expression */
/* also caled Anonumous Function  ( so there is no way of recaling back the function)
var sayBye = function () {
    console.log("Bye");
}
sayBye();

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
/* function multiply(a, b) {
    console.log(a, b);
    return a * b;
}
multiply(5, 10);
 */
/* 
function multiply(a, b) {
    console.log(a, b);
    if (a > 10 || b > 10) {
        
        return "that's too hard";
    } else {
        return a*b;
    }
    
}
    multiply(5, 10);
     */

    var age = prompt("What is your age?");

if (Number(age) < 18) {
    alert("Sorry, you are too yound to drive this car. Powering off");
} else if (Number(age) > 18) {
    alert("Powering On. Enjoy the ride!");
} else if (Number(age) === 18) {
}

//1. Make the above code have a function called checkDriverAge(). Whenever you call this function, you will get prompted for age. Use Function Declaration to create this function.

//Function Declaration
    function checkDriverAge(){
        var age = prompt("What is your age?");
        if (Number(age) < 18) {
            alert("Sorry, you are too yound to drive this car. Powering off");
        } else if (Number(age) > 18) {
            alert("Powering On. Enjoy the ride!");
        } else if (Number(age) === 18) {
            alert("Congratulations on your first year of driving. Enjoy the ride!");
        }
        }
        
//checkDriverAge();

//2. Create another function that does the same thing, assign it to checkDriverAge2 variable using Function Expression.
//Function Expression
var checkDriverAge2 = function() {
	var age = prompt("What is your age?");
	if (Number(age) < 18) {
		alert("Sorry, you are too yound to drive this car. Powering off");
	} else if (Number(age) > 18) {
		alert("Powering On. Enjoy the ride!");
	} else if (Number(age) === 18) {
		alert("Congratulations on your first year of driving. Enjoy the ride!");
	}
}


//BONUS: Instead of using the prompt. Now, only use console.log and make the checkDriverAge() function accept an argument of age, so that if you enter:
// checkDriverAge(92);
// it returns "Powering On. Enjoy the ride!" 
function checkDriverAge(age) {
    console.log(checkDriverAge);
	if (Number(age) < 18) {
		return "Sorry, you are too yound to drive this car. Powering off";
	} else if (Number(age) > 18) {
		return "Powering On. Enjoy the ride!";
	} else if (Number(age) === 18) {
		return "Congratulations on your first year of driving. Enjoy the ride!";
	}
}