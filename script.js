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

