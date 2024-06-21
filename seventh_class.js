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
let trafficlight = 'red';
// creating a type in which only specific values can be given------------
let trafficlights = 'green';
let trafficlights1 = 'green';
let student1 = {
    name: 'zainab',
    rollno: 8
};
let teacher1 = {
    name: 'zainab',
    salary: 300
};
let both = {
    name: 'zainab',
    rollno: 6,
    salary: 500
};
console.log(both.name);
console.log(both.rollno);
console.log(both.salary);
export {};
