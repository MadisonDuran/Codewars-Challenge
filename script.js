// 1. Training JS #1: create your first JS function and print "Hello World
// Task
//Please refer to two example above and write your first JS function.
//mission 1:
//use keyword function to define your function, function name should be helloWorld(don't forget the () and {})
//mission 2:
//use keyword var (or let or const) to define a variable str, value of str should be a string: 
// "Hello World!"(don't forget the =).
//mission 3:
//type the console.log() in the next line (don't forget to put the str in the parentheses).
//When you have finished the work, click "Run Tests" to see if your code is working properly.
//In the end, click "Submit" to submit your code pass this kata.

//Solution: 
function helloWorld() {
  const str = "Hello World!";
  console.log(str);
}
// This function is straight forward and easy to understand. 
// How  I found the solution was by reading the instructions
// Define your function, name it helloWorld and put parenthesis after it. 
// Don't forget the curly braces afterwards.
// Declare variable 'str' and equal string to the value "Hello World!", Semi colon afterwards.
// Console.log str so "Hello World" will print in your console.

// 2.
//Task
//I've written five function equal1,equal2,equal3,equal4,equal5, 
//defines six global variables v1 v2 v3 v4 v5 v6, every function has two local variables a,b, 
//please set the appropriate value for the two variables(select from v1--v6), making these 
//function return value equal to 100. the function equal1 is completed, please refer to this 
//example to complete the following functions.
//When you have finished the work, click "Run Tests" to see if your code is working properly.
//In the end, click "Submit" to submit your code pass this kata.
let v1 = 50,
    v2 = 100,
    v3 = 150,
    v4 = 200,
    v5 = 2,
    v6 = 250;

function equal1(){
  let a = v1,   
      b = v1;   
  return a + b;
}

function equal2(){
  let a = v3, 
      b = v1; 
  return a - b;
}

function equal3(){
  let a = v1, 
      b = v5; 
  return a * b;
}

function equal4(){
  let a = v4, 
      b = v5; 
  return a / b;
}

function equal5(){
  let a = v6, 
      b = v3; 
  return a % b;
}
// I thought this problem was pretty easy, just some longer steps to take!
// How I found my solution is by reading the instructions carefully.
// I was able to pick it up quickly because function equal gave us an example of what we need to do.
// Look at the declared variables and values and call the function.
// declare variables a and b, equal a and b to variables that equal 100.
// return a and b using the following operators +, -, *, /. %.

//3. Task
//misson 1: I've create three function, and defined some global variables, 
// please select some variables that can make up the name of the function, 
// and return them(Please note the uppercase and lowercase letters are different).
//When you have finished the work, click "Run Tests" to see if your code is working properly.
//misson 2: After misson 1 finished. you should click "Attempt" to see my three questions, 
// and write the answer in function answer1, answer2,answer3
//If everything is right, click "Submit" again to submit your code pass this kata.
//Log
//John's iron axe fell into the river. He cried sadly by the river.
//Then a monster came out of the water, with a golden axe in his hand.
//He asked John: is this golden axe yours?
//Log
//John replied that it was not his axe. The monster took out a silver axe.
//He asked John: is this silver axe yours?
//Expected: '\'no\'', instead got: '\'\''
//Log
//John replied that it was not his axe. The monster took out a iron axe.
//He asked John: is this iron axe yours?
var a1="A",a2="a",b1="B",b2="b",c1="C",c2="c",d1="D",d2="d",e1="E",e2="e",n1="N",n2="n"
function Dad(){
  return d1+a2+d2;
}
function Bee(){
  return b1+e2+e2;
}
function banana(){
  return b2+a2+n2+a2+n2+a2;
}

function answer1(){
  return "no";
}
function answer2(){
  return "no";
}
function answer3(){
  return "yes";
}
// These 2 tasks are pretty easy.
// How I found the solution was looking over my glocal variables and values
// Looking at the function name and how I could use the variables to spell, Dad, Bee, and banana.
//return the variables that spell those words correctly.
//For task 2 it was easy. 
// How I found the solutions was by re-reading those prompts a couple times and answrering those
//questions with a yes or no answer.

// 4. Task
//I've written five functions. Each function receives a parameter arr which is an array. 
// Complete the functions using arr inside the function bodies.

   // 1. getLength(arr)    should return length of arr
  //  2. getFirst(arr)     should return the first element of arr
  //  3. getLast(arr)      should return the last element of arr
  //  4. pushElement(arr)  should push an element to arr, and then return arr
  //  5. popElement(arr)   should pop an element from arr, and then return arr
//When you have finished the work, click "Run Tests" to see if your code is working properly.
//In the end, click "Submit" to submit your code pass this kata.
function getLength(arr){
  //return length of arr
  return arr.length;
}
function getFirst(arr){
  //return the first element of arr
  return arr.at(0);
}
function getLast(arr){
  //return the last element of arr
  return arr.at(-1);
}
function pushElement(arr){
  var el=1;
  arr.push(1);
  return arr;
}
function popElement(arr){
 arr.pop();
  return arr;
}

// This problem is easy/medium.
// How I found my solution was by re-reading the instructions and reading over the functions
// Using the .length property to count the length of the parameter arr and returning it
// Using the .at(0) method to get the first character of the parameter arr and returning it
// Using the .at(-1) method to get the last character of the parameter arr and returning it
// Using the .push method to push 1 into the arr and returning arr
// Using .pop method to remove a element from arr and return arr.

// 5. Task
//Give you a function animal, accept 1 parameter:obj like this:
//{name:"dog",legs:4,color:"white"}
//and return a string like this:
//"This white dog has 4 legs."
function animal(obj){
  return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
}

//  This problem was easy/medium 
// How I found the solution was looking back at the task instructions
// This took me a few tries to get right.
// I made an object with the properties {name: dog, color: white, legs: 4}
// I would run the tests and it didn't run
// I added the my object properties inside the strong inside the ${}
// Then I returned the string wrong I didn't put enough spaces.
// I added more spaces after the words 'This, has, legs' 
// Then ran my code and it passed

// 6. Task
//Coding in function trueOrFalse, function accept 1 parameters:val, 
// try to use the conditional statement if...else, if val value is false 
// (val==false or it can convert to false), should return a string "false", if not, return a string "true".
//When you have finished the work, click "Run Tests" to see if your code is working properly.
//In the end, click "Submit" to submit your code pass this kata.

function trueOrFalse(val){
  if (val) {
  return 'true';  
  }              
  else {
    return 'false';
  }
}

// This problem was pretty easy.
// I had to give this a few tries. 
// I forgot to put the curly braces after the if else statements
// and I did some extra steps like if (val == true), (val == false)
// In this problem you are just checking if 'val' is true or false.
// Created a if/statement, if val is true it's going to return true
// else the function will return false

//Task 7:
//Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function 
// accepts 1 parameter:n, n is the number of hotdogs a customer will 
// buy, different numbers have different prices (refer to the following table), 
// return how much money will the customer spend to buy that number of hotdogs.
//number of hotdogs	price per unit (cents)
//n < 5	100
//n >= 5 and n < 10	95
//n >= 10	90
//You can use if..else or ternary operator to complete it.
//When you have finished the work, click "Run Tests" to see if your code is working properly.
//In the end, click "Submit" to submit your code and pass this kata.
function saleHotdogs(n){
  let money = 0;
  if (n < 5 ) {
    money = n * 100
  }
  else if ( n >= 5 && n < 10 ) {
    money = n * 95
  }
  else if ( n >= 10 )  {
   money = n * 90 
  }
  return money;
}
// This problem is pretty straightforward and easy.
// I had to code this a few times to get the syntax correct.
// I also used decimal point at first when multiplying n to the price of the hotdogs.
// How I found the solution was by reading through the instructions thoroughly and trying it few times.
// First you are going to create a function called saleHotdogs with a parameter n
// the you are going to declare the money variable and set it to 0
// Then you will start with your if else statements 
// if the conditions are met then you mutiply in by $1, $0.95, $0.90.
// Then at the end return the money that was made.

// 8. Task
//Complete the function howManydays. It accepts 1 parameter month, 
// which means the month of the year. Different months have a different 
// number of days as shown in the table below. Return the number of days 
// that are in month. There is no need for input validation: month will 
// always be greater than 0 and less than or equal to 12.
//+---------------+-------------+
//|    month      |    days     |
//+---------------+-------------+
//|1,3,5,7,8,10,12|     31      |
//+---------------+-------------+
//|4,6,9,11       |     30      |
//+---------------+-------------+
//|2              |     28      |  (Do not consider the leap year)
//+---------------+-------------+
//Tip: Using default for most of the cases can reduce your work.
//When you have finished, click "Test" to test your code against 
// initial tests and "Attempt" to test your code against all tests. 
// If you pass in all tests you can click "Submit" to submit your code.

  function howManydays(month){
  let days="";
  switch (month){
  /*this is the months which has 31 days*/
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
  days=31
  break;
  /*this is the months which has 30 days*/
  case 4:
  case 6:
  case 9:
  case 11:
  days=30
  break;
  /*this is the months which has 28 days  */
  case 2:
  days=28;
  break;
  }
  return days;
}

// I thought the function was easy/medium.
// It was a few more steps.
// I had to run through this a few times because it was a lot of info to input.
// How I solved this was reading the task thouroughly and I used some switch statments 
// in one of my projects so I went back and looked at that for an example of how to use it.
// First you call the function howManyDays with the parameter month.
// Then you declare a empty days variable.
// Then use your switch statment for months, you are switching betweeen each month
// Case 1, 3, 5 , 7, 8, 10, 12 have 31 days in the month.
// Case 4,6,9,11, have 30 days in a month
// Case 2 has 28 days. Make sure to put the breaks in between those sections or the switch case will keep running 
// and the code will break.
// return days