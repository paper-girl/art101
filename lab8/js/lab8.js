//index.js: Anon Functions and Callbacks 
//Author: Melody and Hanna
//Date: 8 May 2023 

function melodyFunction (x) {
    var results = x + 1 
    return results 
}

//test fucntion 
console.log(melodyFunction(7));
console.log(melodyFunction(64));

array = [4, 16, 24, 40]
console.log("My array", array);

var result = array.map(melodyFunction); 
console.log("Testing  the function", result);

array.map(function(x) {
    var results = x * 2
    return results; 
})

console.log("multiply array:", result)

