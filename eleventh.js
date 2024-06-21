// asynchronous javascript
export {};
// in synchronous js , lines are executed sequentially  line by line
// in asynchronous js, 
// console.log("hello Zainab1");
// console.log("hello Zainab2");
// console.log("hello Zainab3");
// this above code will execute line by line
// asynchronous re efficient than synchronous
// type fn = () => number;
//////------first method to creaate a function--------------------
// let greet (callBack : ( ) => void ) => {
// let greet = (callBack : fn) => {
//     callBack()
// }
//////------second method to creaate a function--------------------
// function greet (callback:fn) {
//     console.log("I am Zainab");
//     callback();
// }
////------first method to pass an argument----------------
// function callBack(){
//     console.log("Hello Zainab")
// }
// greet(callBack)
////------second method to pass an argument--------------------
// greet(()=>{
//     console.log("Hello")
// })
// function sum(a: number, b: number): number {
//     return a + b;
// }
// function result(cb: () => number): void {
//     console.log("The sum of a and b is " + cb());
// }
// result(() => sum(5, 9));
// --------------another delay function example-------------------
// console.log("hello, I am ")
// setTimeout(() => {
//     console.log("Zainab")
// },3000 )
// console.log("Lakho")
// hello and lakho will print first then it will wait for 3 seconds to print zainab
// if we are passing a function into a then it is known as "call back"
// console.log("hello, I am ")
// setTimeout(() => {
//     console.log("Zainab")
// },0 )
// console.log("lakho")
// console.log("lakho")
// console.log("lakho")
// console.log("lakho")
// console.log("lakho")
//-------------------------- merging settimeout and cal back function ----------------------------
//----------------------CREATING AN EXAMINATION FUNCTION THAT CALCULATE GRADE-------------------------------
// XXXXXXXXXXXXXXXXX-------------------simple function without call back-----------------------XXXXXXXXXXXXXXXXXXXXXXXXX
// function checkMarks( marks : number ){
//     setTimeout(()=>{},3000);
//     if(marks >= 90){
//         return "Congatzzz you are a topper"
//     }
//     if(marks >= 80 && marks < 90){
//         return "Congatzzz you you got A+"
//     }
//     if(marks >= 70 && marks < 80){
//         return "Congatzzz you A"
//     }
//     if(marks >= 60 && marks < 70){
//         return "OOPs you got B"
//     }
//     if(marks >= 50 && marks < 60){
//         return "OOPs you got C"
//     }
// }
// console.log(checkMarks((99)));
// function with call back--------------XXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// function celebrate(){
//     console.log("Congratulations")
// };
// function checkMarks( cb : any,marks : number ){
//     setTimeout(()=>{},3000);
//     if(marks >= 90){
//         return cb() ," you are a topper 👌"
//     }
//     if(marks >= 80 && marks < 90){
//         return cb() , " you got A+ 💕"
//     }
//     if(marks >= 70 && marks < 80){
//         return "Good, you got A 😏"
//     }
//     if(marks >= 60 && marks < 70){
//         return "OOPs you got B 😒"
//     }
//     if(marks >= 50 && marks < 60){
//         return "OOPs you got C 😒"
//     }
// };
// console.log(checkMarks(celebrate,(99)));
// second way for call back function--------------------------
//-------------- new promise a special type of function,will study in next class -------------------
// function checkmarksprom(marks : number) : any  {
//     new Promise ( (pass,fail) => {
//         setTimeout( () => {
//             if (marks > 90){
//                 pass("Pass");
//             }
//             else{
//                 fail("Fail");
//             }
//         },2000 );
//     });
// };
// checkmarksprom(95)
// .then( () =>  // if pass this code will execute
//     console.log("congratulations")
//  )
//  .catch( () => { /// if fail this code will execute
//     console.log("Nalaik")
//  })
// promises are easier than callback functions
// third way for call back functions---------------------------------------------------------------
// by using await----------------------------------------------------------------------------------
// try{
//    let res = await checkmarksprom(99)
// }
// catch (err){
//     console.log(err)
// }
