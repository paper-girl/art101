// index.js - Conditionals
// Author: Hanna Nunnelley & Melody Caudill
// Date: 22 May 2023

function sortingHat(str) {
    len = str.length; 
    mod = len % 4; 
    if (mod == 0) {
        return "Gryffindor"
    }
    else if (mod == 1) {
        return "Ravenclaw"
    }
    else if (mod == 2) {
        return "Slytherin"
    }
    else if (mod == 3) {
        return "Hufflepuff"
    }
}
function getHouse(num){
   var remainder = num % 4;
   if (remainder == 0) {
     var str = "Gryffindor";
   } else if (remainder == 1) {
    var str = "Ravenclaw";
   } else if (remainder == 2) {
     var str = "Hufflepuff";
   } else if (remainder == 3) {
     var str = "Slytherin";
   }
   return str;
 }
$("#button").click(function(){
   var name = $("#input").val()
   console.log(name);
   var nameLength = name.length;
   console.log(nameLength);
   var house = getHouse(nameLength);
   console.log(house);
   $("#output").html("<h1>" + house + "</h1>");
 })