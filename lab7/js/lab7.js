//index.js: Creating Functions
//Author: Melody and Hanna
//Date: 4 May 2023 

function sortUserName() {
    var userName = window.prompt("What is your name?");
    console.log("userName =", userName);
    //split string to array 
    var nameArray = userName.split(' ');
    console.log("nameArray =", nameArray);
    //sort the array 
    var nameArraySort = nameArray.sort();
    console.log("nameArraySort =", nameArraySort);
    //join array back to a string
    var nameSorted = nameArraySort.join('');
    console.log("nameSorted =", nameSorted);
    return nameSorted;
}
//output 
document.writeln("I fixed your name for you!: ",
    sortUserName(), "</br>");