// Ass.1
let scoreMatch = prompt("Type your score to see your grade:");
if(scoreMatch<60){
    alert("F");
}else if(scoreMatch>59 && scoreMatch<= 69){
    alert("D");
}else if(scoreMatch>69 && scoreMatch<=79){
    alert("C");
}else if(scoreMatch>79 && scoreMatch<= 89){
    alert("B");
}else if (scoreMatch>89 && scoreMatch<=100){
    alert("A")
}else{
    alert("Invalid!!");
}



// ASS.2
let numCheck = prompt("Check here if a number is even or odd:");
if(numCheck%2 ==1){
    alert("The number is odd");
}else{
    alert("The number is even");
}


// Ass.3
// let tempCheck = prompt("What's the temperature?");
// if(tempCheck<0){
//     alert("It's freezing!")
// }else if(tempCheck>=0 && tempCheck<=15){
//     alert("It's cold");
// }
// else if(tempCheck >=16 && tempCheck<=30){
//     alert("It's warm");
// }else{
//     alert("it's hot!");
// }



// ASS.4
// let numCheck = prompt("Check if a numer is positive or not:");
// if(numCheck>=0){
//     alert("Positive");
// }else{
//     alert("Negative");
// }




// Ass.5
// let AgeCheck = prompt("Type age here");
// if(AgeCheck>=18){
//     alert("You are eligible to vote!");
// }else{
//     alert("You are too young to vote");
// }



// Ass.6
// let timeCheck = prompt("What hour is it of the day?");
// if(timeCheck >=5 && timeCheck<=11){
//     alert("Good Morning");
// }else if(timeCheck >=12 && timeCheck<=17){
//     alert("good afternoon");
// }else if(timeCheck >=18 && timeCheck<=22){
//     alert('good evening');
// }else{
//     alert("Good night")
// }




// Ass. 7
// let colorCheck = prompt("State any color of the traffic light and find their meaning");
// if(colorCheck ==="red"){
//     alert("Stop!")
// }else if(colorCheck==="yellow"){
//     alert("slow down");
// }else if(colorCheck==="green"){
//     alert("Go")
// }else{
//     alert("invalid color")
// }




// ASS. 8
// let password = "12345"
// let passwordCheck = prompt("Password:");
// if(passwordCheck === password){
//     alert("Access Granted")
// }else{
//     alert("Access Denied")
// }



// Ass. 9
// let weekEnd1 = "saturday";
// let weekEnd2 = "sunday";
// let dayCheck=prompt("What day is today?")
// if(dayCheck == weekEnd1 || dayCheck==weekEnd2){
//     alert('It is the weekend!');
// }else if(dayCheck=="monday"){
//     alert("it is a weekday");
// }else if(dayCheck=="tuesday"){
//     alert("it is a weekday");
// }else if(dayCheck=="wednesday"){
//     alert("it is a weekday");
// }else if(dayCheck=="thursday"){
//     alert("it is a weekday");
// }else if(dayCheck=="friday"){
//     alert("it is a weekday");
// }else{
//     alert("You should submit days of the week from sunday - saturday")
// }




// ASS. 10
// let num1 = prompt("Type in a number");
// let num2 = prompt("Type in another");
// if(num1 > num2){
//     alert("number1 is larger");
// }else if(num1<num2){
//     alert("number 2 is larger")
// }else{
//     alert("They're both equal");
// }