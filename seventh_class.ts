// // # creatiing object datatype --------------------------------------
// let user1 : {
//     name : string,
//     age : number,
//     rollno : string
// } = {
//     name : 'zainab',
//     age : 21,
//     rollno : '21f_cs_08'
// };
// console.log(user1.age)

import { TaggedTemplateExpression } from "typescript";



// // # creatiing object datatype ----------------------------------
// type user = {
//     name : string,
//     age : number,
//     rollno : string
// } 
// let user2 : user = {
//     name : 'zainab',
//     age : 21,
//     rollno : '21f_cs_08'
// };
// let user3 : user = {
//     name : 'Asma',
//     age : 21,
//     rollno : '21f_cs_09'
// };
// console.log(user2.age)
// console.log(user2.name)
// console.log(user3.name)


// nested objects ------------------------------------
// type user = {
//         name : string,
//         age : number,
//         rollno : string,
//         children : {
//             name : string,
//             age : number,
//             rollno : string,
//         }
//     } 

// let user1 : user = {
//         name : 'Asma',
//         age : 21,
//         rollno : '21f_cs_09',
//         children : {
//             name : 'zainab',
//             age : 23,
//             rollno: 'gggg'
//         }
//     };    
// console.log(user1.children.name)    

// creating a type in which only specific value can be given----------
let trafficlight : 'red' = 'red';
// creating a type in which only specific values can be given------------
let trafficlights : 'green' | 'blue' = 'green';
let trafficlights1 : 'green' | 'blue' | 'red' = 'green';
// let drinks : 'tea' | 'water' | 'milk' = 'tea';

// type drinkss = ['coldrink','juice','shake','water','milk','tea']--------
// let drinks : drinkss = 'tea';


// INTERSECTION ---------------------------------------
type student ={
    name:string,
    rollno:number
};
type teacher ={
    name:string,
    salary:number
};
let student1:student ={
    name :'zainab',
    rollno:8
};
let teacher1:teacher ={
    name :'zainab',
    salary:300
};
let both : student&teacher = {
    name : 'zainab',
    rollno : 6,
    salary : 500
}
console.log(both.name)
console.log(both.rollno)
console.log(both.salary)




