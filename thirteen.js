// --------------------------- POLYMORPHISM ------------------------------
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// class Animal{
//     name:string;
//     constructor(name:string){
//         this.name=name
//     }
//     makeSound(){
//         console.log("bhao bhao")
//     }
// }
// --------------------------- example 1
// class dog extends Animal{
//     makeSound(){
//         console.log("heyyyyy")
//     }
//     walking(){
//         console.log("i am walking")
//     }
// }
// let d1 = new dog("tommy")
// d1.makeSound()
// --------------------------- example 2
// class cat extends Animal{
//     makeSound(){
//         console.log("meowww meooowww")
//     }
// }
// let c1 = new cat("mano")
// c1.makeSound()
// --------------------------- hierarchy inheritance
// class giraffe extends dog{
// }
// let g1 = new giraffe("hehe")
// g1.makeSound()
// g1.walking()
// --------------------------- encapsulation
var person = /** @class */ (function () {
    // age;
    function person(name, age) {
        this.name = name;
        this.age = age;
    }
    return person;
}());
var p1 = new person("zainab", 21);
// p1.age; throws error on accessing private or protected variables with objects
/**************************************/
// private variables can be used withinn a class itself
//protected can be accessed with extended class too but not with objects
/**************************************/
var teacher = /** @class */ (function (_super) {
    __extends(teacher, _super);
    function teacher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    teacher.prototype.ageclass = function () {
        console.log(this.age); // can accessed protected variables in extended class
    };
    return teacher;
}(person));
var t1 = new teacher("zainab", 21);
t1.ageclass();
