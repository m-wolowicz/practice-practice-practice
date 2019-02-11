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
    console.log(drinks[i].toLowerCase() + " is number " + i + " in the array of drinks");
  } 

//   same as
  drinks.forEach(function(drink){
      console.log(drink);
  });

  // We can also do this with a function.
  function logArray(list) {
    for (var j = 0; j < list.length; j++) {
      console.log(list[j]);
    }
  }

  // Produces the same result as the raw loop above.
  logArray(drinks);

  // Loops from 0 to 4.
  for (var i = 0; i < 5; i++) {
    // Prints a message and the current i value to the console.
    console.log("I am " + i);
  }



  // This is our starting myFarm array.
  var myFarm = ["chickens", "pigs", "cows", "horses", "ostriches"];

  // Creating a variable to hold our array length.
  var arrayLength = myFarm.length;

  // Looping through our myFarm array.
  for (var j = 0; j < arrayLength; j++) {

    // Console out the farm animal in the current index.
    console.log(myFarm[j]);

    // If the first character in the current animal is "c" or "o", alert the following message.
    if (myFarm[j].charAt(0) === "c" || myFarm[j].charAt(0) === "o") {
      console.log("Starts with a c or an o!");
    }

  }

//   another way:
for (var i = 0; i < arrayLength; i++ ) {
    if(myFarm[i][0] === "c" || myFarm[i][0] === "o") {
        console.log(myFarm[i] + " Starts with a c or an o!");
    }
}

Math.floor(Math.random());




//ROCK PAPER SCISSORS
    // Creates an array that lists out all of the options (Rock, Paper, or Scissors).
    var computerChoices = ["r", "p", "s"];

    // Creating variables to hold the number of wins, losses, and ties. They start at 0.
    var wins = 0;
    var losses = 0;
    var ties = 0;

    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {

      // Determines which key was pressed.
      var userGuess = event.key;

      // Randomly chooses a choice from the options array. This is the Computer's guess.
      var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

      // Reworked our code from last step to use "else if" instead of lots of if statements.

      // This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number
      if ((userGuess === "r") || (userGuess === "p") || (userGuess === "s")) {

        if ((userGuess === "r") && (computerGuess === "s")) {
          wins++;
        } else if ((userGuess === "r") && (computerGuess === "p")) {
          losses++;
        } else if ((userGuess === "s") && (computerGuess === "r")) {
          losses++;
        } else if ((userGuess === "s") && (computerGuess === "p")) {
          wins++;
        } else if ((userGuess === "p") && (computerGuess === "r")) {
          wins++;
        } else if ((userGuess === "p") && (computerGuess === "s")) {
          losses++;
        } else if (userGuess === computerGuess) {
          ties++;
        }

        // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
        var html =
          "<p>You chose: " + userGuess + "</p>" +
          "<p>The computer chose: " + computerGuess + "</p>" +
          "<p>wins: " + wins + "</p>" +
          "<p>losses: " + losses + "</p>" +
          "<p>ties: " + ties + "</p>";

        // Set the inner HTML contents of the #game div to our html string
        document.querySelector("#game").innerHTML = html;
      }
    };



    // CANVAS
    let resizeReset = function() {
      w = canvasBody.width = window.innerWidth;
      h = canvasBody.height = window.innerHeight;
    }
    
    const opts = { 
      particleColor: "rgb(200,200,200)",
      lineColor: "rgb(200,200,200)",
      particleAmount: 30,
      defaultSpeed: 1,
      variantSpeed: 1,
      defaultRadius: 2,
      variantRadius: 2,
      linkRadius: 200,
    };
    
    window.addEventListener("resize", function(){
      deBouncer();
    });
    
    let deBouncer = function() {
        clearTimeout(tid);
        tid = setTimeout(function() {
            resizeReset();
        }, delay);
    };
    
    let checkDistance = function(x1, y1, x2, y2){ 
      return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    };
    
    let linkPoints = function(point1, hubs){ 
      for (let i = 0; i < hubs.length; i++) {
        let distance = checkDistance(point1.x, point1.y, hubs[i].x, hubs[i].y);
        let opacity = 1 - distance / opts.linkRadius;
        if (opacity > 0) { 
          drawArea.lineWidth = 0.5;
          drawArea.strokeStyle = `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${opacity})`;
          drawArea.beginPath();
          drawArea.moveTo(point1.x, point1.y);
          drawArea.lineTo(hubs[i].x, hubs[i].y);
          drawArea.closePath();
          drawArea.stroke();
        }
      }
    }
    
    Particle = function(xPos, yPos){ 
      this.x = Math.random() * w; 
      this.y = Math.random() * h;
      this.speed = opts.defaultSpeed + Math.random() * opts.variantSpeed; 
      this.directionAngle = Math.floor(Math.random() * 360); 
      this.color = opts.particleColor;
      this.radius = opts.defaultRadius + Math.random() * opts. variantRadius; 
      this.vector = {
        x: Math.cos(this.directionAngle) * this.speed,
        y: Math.sin(this.directionAngle) * this.speed
      };
      this.update = function(){ 
        this.border(); 
        this.x += this.vector.x; 
        this.y += this.vector.y; 
      };
      this.border = function(){ 
        if (this.x >= w || this.x <= 0) { 
          this.vector.x *= -1;
        }
        if (this.y >= h || this.y <= 0) {
          this.vector.y *= -1;
        }
        if (this.x > w) this.x = w;
        if (this.y > h) this.y = h;
        if (this.x < 0) this.x = 0;
        if (this.y < 0) this.y = 0;	
      };
      this.draw = function(){ 
        drawArea.beginPath();
        drawArea.arc(this.x, this.y, this.radius, 0, Math.PI*2);
        drawArea.closePath();
        drawArea.fillStyle = this.color;
        drawArea.fill();
      };
    };
    
    function setup(){ 
      particles = [];
      resizeReset();
      for (let i = 0; i < opts.particleAmount; i++){
        particles.push( new Particle() );
      }
      window.requestAnimationFrame(loop);
    }
    
    function loop(){ 
      window.requestAnimationFrame(loop);
      drawArea.clearRect(0,0,w,h);
      for (let i = 0; i < particles.length; i++){
        particles[i].update();
        particles[i].draw();
      }
      for (let i = 0; i < particles.length; i++){
        linkPoints(particles[i], particles);
      }
    }
    
    const canvasBody = document.getElementById("canvas"),
    drawArea = canvasBody.getContext("2d");
    let delay = 200, tid,
    rgb = opts.lineColor.match(/\d+/g);
    resizeReset();
    setup();