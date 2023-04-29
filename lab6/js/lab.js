// index.js - Lab 6: Arrays and Objects
// Author: Melody Caudill
// Date: 28 April 2023 

//Define Variables
//Array
myTransport = ["shuttle", "walk"];

//create object for my main ride 
//Object
var myMainRide = {
  make: "Honda",
  model: "Civic",
  color: "Gray",
  year: "2009",
  age: function() {
      return 2023 - this.year;
  }
}

//output 
document.writeln("Getting around: " + myTransport + "<br>");
document.writeln("This is how I get around! ",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
    




