let generator = require('generate-password');

// let password = generator.generate({});

// console.log(password); 

// ---------------------------------------------

var passwords = generator.generateMultiple(10, {
	length: 10,
	uppercase: false
});
//look a documentation

// userPasswords = {
//     user1:
//     user2:
//     user3:
// }

// store passwords in an object with the username as the key?
// store array items in a object? 

//get array items in javascript

userPasswords = {
    user1: passwords[0],
    user2: passwords[1],
    user3: passwords[2]
}
// console.log(userPasswords)  

// --------------------------------------------

//unexpected token
// var passwords = generator.generateMultiple(3, {
// 	length: 10,
// 	uppercase: false
// });

// -------------------------

//dynamically set array, could be smaller could be bigger
//create passwords for the number of users stored in the usersList array 

let usersList = ['Alex', 'user2', 'user3', 'user4', 'user5', 'user6'] 
//find length of an array?
let arraySize = usersList.length


var passwords = generator.generateMultiple(arraySize, {
	length: 10,
	uppercase: false
});

// console.log(passwords)

//store each username and password as an array of objects, with the username as the key and password as the value
//can't do this
// var userPasswords = {
// 	'user1' : passwords[0]
// }
// console.log(userPasswords) 

//store array value as key in an array of objects 
const result = usersList.map((id, i) => ({ user: id, password: passwords[i] }));
console.log(result);











