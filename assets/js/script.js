// strings
var myName = "Melissa";
var myLastname = "Wolowicz";

// numbers
var age = 33;

// boolean
var married = true;

console.log(myName + " " + myLastname);

// alert("Now it's your turn");

//     // Notice that the confirm and prompt take in variables but the alert doesn't
//     var play = confirm("Do you want to play?");
    // var howOld = prompt("How old are you?");

// console.log("our age difference is: " + (age - howOld));

// document.write() overwrites the entire page. 
// document.write("Hello");

// IF/ELSE STATEMENTS

// if (howOld < age) {
//     console.log("Our age difference is: " + (age - howOld));
// }
// else if (howOld > age){
//     console.log("our age difference is: " + (howOld - age));
// }
// else {
//     console.log("We are the same age!!!");
// }

// ARRAYS
// Our array of zoo animals. [0,1,2,3]
var zooAnimals = ["Zebra", "Rhino", "Giraffe", "Owl"];

// Prints 4 to the console because there are 4 items in our zooAnimals array.
console.log(zooAnimals.length);

// Prints Rhino to the console. Remember, the first item in an array has an index position of 0!
console.log(zooAnimals[1]);

// Prints undefined... because the last index ("Owl") is 3.
console.log(zooAnimals[4]);



// Fill in the question marks with what the output will be.
var animals = ["parrot", "cat", "dog"];

// ???
console.log(animals.length);

// ???
console.log(animals[1]);

// ???
console.log(animals[2]);

// ???
console.log(animals[0]);

// ???
console.log(animals[animals.length]);

// ???
console.log(animals[animals.length - 1]);

// ???
console.log(animals.indexOf("bear"));

// ???
console.log(animals.indexOf("parrot"));




var catAge = "22";

      // Won't work as expected
      console.log(catAge + 2);

      // Works as expected
      console.log(parseInt(catAge) + 2);


var drinks = ["Coke", "Pepsi", "Water", "Orange Juice"];
// We can either overwrite an element of the array to make it lowercase, or we can use the toLowerCase() method.
drinks[3] = drinks[3].toLowerCase();
console.log(drinks);

// FOR LOOP
for (var i = 0; i < drinks.length; i++) {
    console.log("I love " + drinks[i]);
  }
