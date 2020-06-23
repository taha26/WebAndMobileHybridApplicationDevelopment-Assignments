// Chapter no. 21 - 25 



// Task no. 1


// var firstName = prompt("Enter Your First Name");
// var lastName = prompt("Enter Your Last Name");
// var fullName = firstName + " " + lastName;
// alert("Hello !! " + fullName);


// Task no. 2


// var userInput = prompt("Enter Your Favorite Mobile Phone Model");
// var length = userInput.length;
// document.write("My favorite phone is : " + userInput + "<br>" + "Length of strings is : " + length);



// Task no. 3


// var name = "Pakistani";
// var indexNum = name.indexOf("n");
// document.write("String : " + name + "<br>" + "Index of 'n' : " + indexNum);


// Task no. 4


// var name = "Hello World";
// var indexNum = name.lastIndexOf("l");
// document.write("String : " + name + "<br>" + "Index of 'l' : " + indexNum);


// Task no. 5


// var name = "Pakistani";
// var indexNum = name.charAt(3);
// document.write("String : " + name + "<br>" + "Character at index 3 : " + indexNum);



// Task no. 6


// var firstName = prompt("Enter Your First Name");
// var lastName = prompt("Enter Your Last Name");
// var fullName = firstName + " ";
// fullName = fullName.concat(lastName)
// alert("Hello !! " + fullName);



// Task no. 7


// var city = "Hyderabad";
// var replace = city.replace("Hyder","Ialam");
// document.write("City : " + city + "<br>" + "After replacement : " + replace);


// Task no. 8


// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var replace = message.replace(/and/g,"&");
// document.write("Before replacement : " + message + "<br>" + "After replacement : " + replace);


// Task no. 9


// var str = "472";
// var type1 = "String";
// var num = parseInt(str);
// var type2 = "Number";

// document.write("Value : " + str + "<br>" + "Type : " + type1 + "<br>" + "Value : " + num + "<br>" + "Type : " + type2);


// Task no. 10


// var userInput = prompt("Write Penuts Here ");
// var conv = userInput.toUpperCase();

// document.write("User Input : " + userInput + "<br>" + "Upper Case : " + conv);



// Task no. 11



// var userInput = prompt("Write JavaScript Here ");
// var char1 = userInput.slice(0,1);
// char1 = char1.toUpperCase();
// var charOth = userInput.slice(1);
// charOth = charOth.toLowerCase();
// var titleChar = char1 + charOth;

// document.write("User Input : " + userInput + "<br>" + "Title Case : " + titleChar);



// Task no. 12


// var num = 35.36;
// var conv = num.toString();
// var rep = conv.replace(".","");
// document.write("Number : " + num + "<br>" + "Result : " + rep);



// Task no. 13


// var userInput = prompt("Enter Your Name");
// var a =0
// for(var i = 0 ; i < userInput.length ; i++){
//     if(userInput[i] === "@" || userInput[i] === "!" || userInput[i] === "," || userInput[i] === "."){
//         a = 1;
//     }
// }

// if(a){
//     alert("Please enter a valid username");
// }else{
//     alert("Thank you! you entered a valid username");
// }



// Task no. 14


// var A = ["cake", "apple pie", "cookie", "chips", "patties"];

// var search = prompt("Welcome to bakery !! What do you want to order !!");
// search = search.toLowerCase();

// if(A.indexOf(search) !== -1){
//     alert(search + " is available at index " + A.indexOf(search) + " in our bakery.");
// }else{
//     alert(search + " is not available in our bakery.");
// }



// Task no. 15


// var userInput = prompt("Enter Your Password\na. It should contain alphabets and numbers\nb. It should not start with a number\nc. It must at least 6 characters long");

// for(var i = 0 ; i < 1 ; i++){
//     if(userInput[i] >= 0){
//         document.write("Entered Password : " + userInput + "<br>" + "Password should not start with a number" + "<br>" + "Please Enter Valid Password !!");
//         break;
//     }else if(userInput.length < 6){
//         document.write("Entered Password : " + userInput + "<br>" + "Password must at least 6 characters long" + "<br>" + "Please Enter Valid Password !!");
//         break;
//     }else{
//         document.write("Entered Password : " + userInput + "<br>" + "You Entered A Password Is Valid !!!")
//     }
// }



// Task no. 16


// var university = "University of Karachi";
// var arr = university.split('');
// for(var i = 0 ; i < arr.length ; i++){
//     document.write(arr[i] + "<br>");
// }



// Task no. 17


// var userInput = prompt("Enter A Value");
// for(var i = 0 ; i < userInput.length ; i++){
//     if(i == userInput.length - 1){
//         document.write("User Input : " + userInput + "<br>" + "Last Character Of User Input : " + userInput[i]);
//     }
// }



// Task no. 18


// var text = "The quick brown fox jumps over the lazy dog";
// var tex = text.toLowerCase();
// var texsplit = tex.split(" ");
// var a = 0
// for (var i=0; i<texsplit.length; i++){
//     if(texsplit[i] === "the"){
//         a++;
//     }
// }
// document.write("Text : " + tex + "<br>" + "There are " + a + " occurrences of word “the”.");






// Chapter no. 26 - 30





// Task no. 1


// var userInput = +prompt("Enter Positive Integer\ne.g (4.6752)");
// var round = Math.round(userInput);
// var floor = Math.floor(userInput);
// var ceil = Math.ceil(userInput);

// document.write("User Input : " + userInput + "<br>" +"Round Off : " + round + "<br>" +"Floor : " + floor + "<br>" +"Ceil : " + ceil );



// Task no. 2


// var userInput = +prompt("Enter Negative Floating Point\ne.g (-4.6752)");
// var round = Math.round(userInput);
// var floor = Math.floor(userInput);
// var ceil = Math.ceil(userInput);

// document.write("User Input : " + userInput + "<br>" +"Round Off : " + round + "<br>" +"Floor : " + floor + "<br>" +"Ceil : " + ceil );



// Task no. 3


// var a = -4;
// var b = 5;
// var a1 = Math.abs(a);
// var b1 = Math.abs(b);
// document.write("The absolute value of " + a + " is : " + a1 + "<br>" + "The absolute value of " + b + " is : " + b1);



// Task no. 4


// var a = Math.random() * 7;
// var b = Math.floor(a);

// document.write("random dice value : " + b + "<br>");



// Task no. 5


// var a = Math.random() * 3;
// var b = Math.floor(a);

// if(b === 2){
//     document.write(b + "<br>" + "Random Coin Value : Heads");
// }else if(b ===1){
//     document.write(b + "<br>" + "Random Coin Value : Tails");

// }else{
//     document.write("Random Coin Value : " + b);

// }



// Task no. 6


// var a = Math.random() * 101;
// var b = Math.floor(a);

// document.write("random number between 1 and 100 is : " + b);


// Task no. 7


// var weight = prompt("Enter your weight in kilograms?");
// var parseWet = parseFloat(weight);
// document.write("The weight of user is "+ parseWet + " kilograms");


// Task no. 8


// var number = Math.random() * 11;
// var Secret = Math.floor(number);

// var userInput = +prompt("Enter any number in between 1 to 10?");
// if(userInput === Secret){
//     document.write("Congratulations !!! You Guess The Secret Number");
// }else{
//     document.write("Try Again !!! " + "<br>" + "Secret Number Is : " + Secret);
// }







// Chapter no. 31 - 34






// Task no. 1


// var date = new Date();
// document.write(date);




// Task no. 2


// var arr = ["January","February","March","April","May","June","July","August","September","October","November","December"];
// var date = new Date();
// var month = date.getMonth();
// var char = arr[month];
// alert("Current Month : " + char);



// Task no. 3


// var arr = ["Sun","Mon","Tue","Wed","Thr","Fri","Sat"];
// var date = new Date();
// var day = date.getDay();
// var char = arr[day];
// alert("Today is : " + char);




// Task no. 4


// var funday = new Date();
// if(funday.getDay() == 6 || funday.getDay() == 0){
//     alert("It’s Fun day");
// }else{
//     alert("Weekdays is going on");
// }





// Task no. 5



// var date = new Date();
// if(date.getDate() < 16){
//     alert("First fifteen days of the month");
// }else{
//     alert("Last days of the month");
// }





// Task no. 6



// var date = new Date();
// var sinceJan1 = date.getTime();
// var min = sinceJan1/1000*60*60;

// document.write("Current Date : " + date + "<br>" + "Milliseconds since January 1, 1970 : " + sinceJan1 + "<br>" + "Minutes since January 1, 1970 : " + min);



// Task no. 7


// var date = new Date();
// var hours = date.getHours;
// if(hours <= '11' ){
//     alert("It's AM");
// }else if(hours >= '12'){
//     alert("It's PM");
// }




// Task no. 8



// var laterDate = new Date("Dec 31, 2020");
// document.write("Later date: " + laterDate);




// Task no. 9


// var ramzanDate = new Date("June 18, 2015");
// var today= new Date();
// var miliToday=today.getTime();
// var miliRamzanDate=ramzanDate.getTime();
// var miliDiff=miliToday-miliRamzanDate
// var dayDiff = miliDiff / (1000 * 60 * 60 * 24);
// dayDiff = Math.floor(dayDiff);
// document.write(dayDiff + " days have passed since 1st Ramzan, 2015");



// Task no. 10


// var date = new Date("Dec 05, 2015");
// var today= new Date("Jan 1, 2015");
// var miliToday=today.getTime();
// var milidate=date.getTime();
// var miliDiff=milidate - miliToday
// var secDiff = miliDiff / (1000 * 60);
// secDiff = Math.floor(secDiff);
// document.write("On reference date " + date + "<br>" + secDiff + " seconds have passed since beginning of 2015");



// Task no. 11


// var today = new Date();
// var hourAgo =  new Date();   
// hourAgo.setHours(today.getHours() - 1);
// document.write("Current date: " + today + "<br>" + "1 hour ago, it was " + hourAgo);



// Task no. 12


// var today = new Date();
// var yearAgo =  new Date();   
// yearAgo.setFullYear(today.getFullYear() - 100);
// alert("Current date: " + today + "\n100 years back, it was " + yearAgo);



// Task no. 13


// var age=prompt("Enter your age");
// var birthYear = new Date();
// birthYear.setFullYear(birthYear.getFullYear() - age);

// document.write("Your age is " + age + "<br>" + "Your birth year is " + birthYear.getFullYear());



// Task no. 14


// var monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var customerName = "ABC Customer";
// var currentDate = new Date();
// var month = currentDate.getMonth();
// var units = 410;
// var priceOneUnit = 16;
// var surcharge = 350;
// var netAmount = units * priceOneUnit;
// var grossAmount = netAmount + surcharge;

// document.write("<h1> K-Electric Bill </h1>" + "<br> " + "Customer Name : " + customerName + "<br>" + "Month : " + monthName[month] + "<br>" + "Number of units : " + units + "<br>" + "Charges per unit : " + priceOneUnit + "<br>" +  "<br>" +"Net Amount Payable (within Due Date) : " + netAmount  + "<br>" + "Late payment surcharge : " + surcharge + "<br>" + "Gross Amount Payable (after Due Date) : " + grossAmount);









// Chapter no. 35 - 38








// Task no. 1


// function currDate(){
//     var date = new Date();
//     document.write(date);
// }

// currDate();



// Task no. 2


// function name(){
//     var firstName = prompt("Enter Your First Name");
//     var lastName = prompt("Enter Your Last Name");
//     var fullName = firstName + " " + lastName;
//     alert("Hello !! " + fullName);
// }


// name();



// Task no. 3


// function num(a,b){
//     var a = +prompt("enter first num");
//     var b = +prompt("enter second num");
//     var c = a + b;
//     alert(c);
//     return
// }

// num();




// Task no. 4



// function calculator(num1,oper,num2) {
//     var num1 = +prompt("CALCULATOR", "Enter First Number");
//     var oper = prompt("CALCULATOR", "Enter Operator e.g (+ , - , * , / , %)");
//     var num2 = +prompt("CALCULATOR", "Enter Second Number");

//     if (oper == "+") {
//         alert("Result : " + (num1 + num2));
//     } else if (oper == "-") {
//         alert("Result : " + num1 - num2);
//     } else if (oper == "*") {
//         alert("Result : " + num1 * num2);
//     } else if (oper == "/") {
//         alert("Result : " + num1 / num2);
//     } else if (oper == "%") {
//         alert("Result : " + num1 % num2);
//     } else {
//         alert("Please Enter Correct Operator");
//     }
//     return
// }

// calculator();



// Task no. 5


// function squareNum(num){
//     document.write("Square of number " + num + " is :  " + (num*num));
// }

// squareNum(3)



// Task no. 6


// function factNum(){

//     function factorial(num){
//         var a = 1;
//         for (let i=num; i>=1; i--){
//             a = a * i;
//         }
//         return a;
//     }

//     var user = +prompt("Enter your number for factorial");
//     document.write("Factorial of " + user + " is: " + factorial(user));
// }

// factNum();




// Task no. 7


// function count(){
//     var userInput1 = +prompt("Enter start number");
//     var userInput2 = +prompt("Enter end number");
//     for (let i = userInput1 ; i <= userInput2 ; i++){
//         document.write(i + "<br>");
//     }
// }

// count();




// Task no. 8


// function calculateHypotenuse() {
//     var base = +prompt("Enter base of triangle");
//     var perpendicular = +prompt("Enter perpendicular");
//     var hypotenuse = calculateSquare(base) + calculateSquare(perpendicular);
//     document.write("Hypotenuse of a right angle triangle is : " + calculateSquare(hypotenuse));


//     function calculateSquare(num) {
//         return (num * num);
//     }
// }

// calculateHypotenuse();




// Task no. 9



// function areaOfRectangle(width,height = 2){
//     var A = width * height;
//     document.write("Area of Rectangle is: " + A);
//     return A ;
// }

// areaOfRectangle(3);



// Task no. 10


// function checkPalindrome() {
//     var userInput = prompt("Enter Palindrome Value");
//     var check = "";
//     for (var i = userInput.length - 1; i >= 0; i--) {
//         check += userInput[i];
//     }

//     if (userInput == check) {
//         alert("Yes " + userInput + " is palindrome !!");
//     } else {
//         alert("No " + userInput + " is not palindrome !!");
//     }
// }

// checkPalindrome();



// Task no. 11


// function tittleCase() {
//     var userInput = prompt("Write JavaScript Here ");
//     document.write("User Input : " + userInput);
//     userInput = userInput.toLowerCase();
//     userInput = userInput.split(",");

//     for (var i = 0; i < userInput.length; i++) {
//         userInput[i] = userInput[i].charAt(0).toUpperCase() + userInput[i].slice(1);
//     }
//     userInput.join(' ');


//     document.write("<br>" + "Title Case : " + userInput);
// }

// tittleCase();




// Task no. 12



// function largerstWord(){

//     function longestWord(userInput) {

//         var strSplit = userInput.split(' ');

//         var longestWord = 0;
//         var longestIndex = 0;

//         for(var i = 0; i < strSplit.length; i++){
//           if(strSplit[i].length > longestWord){ 
//           longestWord = strSplit[i].length; 
//           longestIndex=i;
//            }
//         }
//         return strSplit[longestIndex];
//       }

//     var userInput=prompt("Enter string for finding longest word");
//     document.write("Longest word is: "+ longestWord(userInput));
// }

// largerstWord();



// Task no. 13



// function wordOccurCount(){

//     function wordCounter(str, word){

//         var a = str.toLowerCase();   
//         var a = a.split(""); 

//         // search for pattern in a 
//         var count = 0; 
//         for (var i = 0; i <= a.length; i++)  
//         { 

//         if (a[i] === word) 
//             count++; 
//         }
//         return count;
//     }

//     var str=prompt("Enter a string");
//     var word=prompt("Enter a letter to check its occurrence");

//     document.write("Occurrence of letter " + word +" is: " + wordCounter(str,word)); 
// }

// wordOccurCount();




// Task no. 14



// function circleProperties() {

//     function calCircumference(radi) {
//         const pi = 3.14;
//         return 2 * pi * radi;
//     }
//     function calArea(radi) {
//         const pi = 3.14;
//         return pi * radi * radi;
//     }

//     var userInput = prompt("Enter radius of circle ");
//     document.write("The circumference is " + calCircumference(userInput) + "<br>" + "The area is " + calArea(userInput));
// }

// circleProperties();




// ---------------------------- END -------------------------------------