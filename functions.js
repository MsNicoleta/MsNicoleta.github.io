// var list = ["tiger", "cat", "bear", "bird"];
// console.log(list[1]);
// 

// var array = ["Banana", "Apples", "Oranges", "Blueberries"];

// console.log(array);

// var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// console.log(array2);

// Create an object and an array which we will use in our facebook exercise. 

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.
// var user = {
//     username: "Starfly",
//     password: "blablabla",
// };



// 2. Create an array which contains the object you have made above and name the array "database".
// var database = [
//      {
//        username: "Starfly",
//        password: "blablabla",
//    }

// ]
// // 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".

// var newsfeed = [
//     {username: "John Doe", timeline: "Just posted a new photo"},
//     {username: "Jane Smith", timeline: "Feeling excited for the weekend"},
//     {username: "Bob Johnson", timeline: "Off to work"}
// ]


// var database = [
//     {
//         username: "nick",
//         password: "secret"
//     }
// ];

// var newFeed = [
//     { username: "John Doe", timeline: "Just posted a new photo" },
//     { username: "Jane Smith", timeline: "Feeling excited for the weekend" },
    
// ];

// var userNameP/courses/complete-web-developer-in-2020-zero-tomastery/lectures/12621107rompt = prompt("Please enter your username");
// var passwordPrompt = prompt("Please enter your password");

// function signIn(user, pass) {
//     if (user === database[0].username &&
//         pass === database[0].password) {
//         console.log(newFeed);
//     } else {
//         alert("sorry, Wrong username and password");
//     }
// }
// signIn(userNamePrompt, passwordPrompt);

// LOOPS

var database = [

   { username: "John",
        password: "secret"
    },

   { username: "Sammy",
        password: "123"
    },

   { username: "Ingrid",
        password: "777"
    }
];
var newsfeed = [
    {
        username: "John Doe",
        timeline: "Just posted a new photo"
    },
    {
        username: "Jane Smith",
        timeline: "Feeling excited for the weekend"
    },
    {
        username: "Bob Johnson",
        timeline: "Off to work"
    }
]


function isUsernameValid(username, password) {
    for (var i = 0; i < database.length; i++) {
        if (database[i].username === username &&
             database[i].password === password ) {
            return true;
        } 
     }
    
    return false;
}

function signIn(username, password) {
    if (isUsernameValid(username, password)) {
        console.log(newsfeed); 
        }else {
            alert("Sorry, wrong username or password");
        }
    }
    

var userNamePrompt = prompt("What\'s your username")
var passwordPrompt = prompt("What\'s your password")
signIn(userNamePrompt, passwordPrompt);