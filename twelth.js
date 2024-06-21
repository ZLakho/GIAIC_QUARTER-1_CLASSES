// ------------------------------------------Object Oriented Programming-----------------------------------------------
export {};
// tell us way to do programming
//  main things 
// -> objects will be there during programming
// FOUR pillars / principles
// 1. encapsulation 2. abtsraction 3.polymorphism 4.inheritance
// class is a blueprint for creating objects
//-------------------------------------------------------------------------------
// class Person{
//     name = "Zainab Lakho" ;
//     age = 21;
//     constructor(name : string , age : number){
//         this.name = name;
//         this.age = age;
//     }
// }
// let p1 = new Person("Zain",6);
// console.log(p1)
// to change any field
// p1.name = "Zain-ul-Abdeen"
// console.log(p1)
//--------------------------------------------------------------------------------
// class Student{
//     name : string ;
//     age : number;
//     roll_no : number;
//     constructor(name : string , age : number, roll_no : number){
//         this.name = name;
//         this.age = age;
//         this.roll_no = roll_no;
//     }
//     walk(){
//         console.log('Walking...')
//     }
//     sum(n1:number,n2:number){
//         console.log(n1+n2)
//     }
// }
// let s1 = new Student("Zainab",21,8)
// console.log(s1.name, s1.walk())
// console.log(s1.sum(2,6))
// "this" value depends upon k where we are using it
//----------------------------------------------------------------------------------
// class Person{
//     //readonly se bs aik dfa hi value channge krdkty baar baar nh
//     readonly name :string ;
//     age : number;
//     private salary : number; // srf issi class m access krskengy salary ko issy bahar nh, known as "Encapsulation"
//     // public salary : number; // second type of encapsulation
//     constructor(name : string , age : number, salary : number){
//         this.name = name;
//         this.age = age;
//         this.salary = salary;
//     }
//     walk(){
//         console.log('Walking...')
//     }
//     }
// let p1 = new Person('zainab',21,50000);
// console.log(p1)
// console.log(p1.salary) // throws error
// p1.name = "zain" // error
//----------------------------------- INHERITANCE ----------------------------------------------
// class animal{
//     typeOfAnimal : string;
//     voice : string;
//     constructor(typeOfAnimal : string , voice : string){
//         this.typeOfAnimal = typeOfAnimal;
//         this.voice = voice;
//     }
// }
// class Dog extends animal{
//     walk(){
//         console.log("Running")
//     }
//     woof(){
//         console.log("bhaowwww bhaowww");
//     }
// }
// let d1 = new Dog("Dog","bark");
// console.log(d1)
// console.log(d1.walk())
// console.log(d1.woof())
//------------------------------------------------------------------------------------
// class animal{
//     name : string;
//     voice : string;
//     constructor(name : string , voice : string){
//         this.name = name;
//         this.voice = voice;
//     }
// }
// class cat extends animal{
//     // name : string;
//     constructor(name : string, voice : string){
//         super(name,voice) // calls parent's constructor 
//     }
//     walk(){
//         console.log("Running")
//     }
//     meow(){
//         console.log("Meowwwwwwwwwwwwwwwwwww");
//     }
// }
// let c1 = new cat("tun tun","meowww")
// console.log(c1.walk())
