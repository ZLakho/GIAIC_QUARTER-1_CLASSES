// quiz step 0 to step 10
// step 4 union and literal , currently there are things left so going to cover 
let myage; // this is a union
// in union either we have string or number data type
//  in intersection we have either student properties or teacher properties
// myage = 20
// myage = '20'
// myage = true
// myage = `true${33}` // typescript string m convert krega marks ki wjah se
// myage = `true${99+1}` // typescript string m convert krega marks ki wjah se
// ${} --> template literal 
// console.log(myage)
// console.log(typeof(myage))  // also write as typeof myage
// these below 3 methods are common in both number and string data type
// 1. myage.toLocaleString
// 2. myage.toString
// 3. myage.valueOf
// ab esa kia krein k ye issue resolve hojae
// here comes the concept of narrowing
// myage = 18 // narrowing start from here
// narrowing options kum hogye qk humne datatype restrict krdi number p
// console.log(myage.toFixed(2)) // point lg jayengy agay
// NARROWING IN STRING
// myage = '20'
// console.log(myage.replace('20','70'))
// narrowing dosn't change original datatype , it just dhrink type so that we can
//  use that specific type methods
// applicable in union
// myage = Math.random()
// console.log(myage)
myage = Math.random() > 0.6 ? "zainab" : 18;
// console.log/(myage)
if (typeof (myage) === 'number') {
    console.log(myage.toFixed(5));
}
else {
    console.log(myage.replace("18", "200"));
}
export {};
