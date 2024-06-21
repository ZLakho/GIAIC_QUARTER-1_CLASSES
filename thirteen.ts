// --------------------------- POLYMORPHISM ------------------------------

class Animal{
    name:string;
    constructor(name:string){
        this.name=name
    }
    makeSound(){
        console.log("bhao bhao")
    }
}

// --------------------------- example 1

class dog extends Animal{
    makeSound(){
        console.log("heyyyyy")
    }

    walking(){
        console.log("i am walking")
    }

}
let d1 = new dog("tommy")
d1.makeSound()

// --------------------------- example 2

class cat extends Animal{
    makeSound(){
        console.log("meowww meooowww")
    }
}
let c1 = new cat("mano")
c1.makeSound()

// --------------------------- hierarchy inheritance

class giraffe extends dog{

}
let g1 = new giraffe("hehe")
g1.makeSound()
g1.walking()

// --------------------------- encapsulation

class person{
    name;
    // private age;
    protected age; // can't use with objects but canbe used with extended classes
    // age;
    constructor(name:string,age:number){
        this.name = name;
        this.age = age

    }
}

let p1 = new person("zainab",21)
// p1.age; throws error on accessing private or protected variables with objects

/**************************************/

// private variables can be used withinn a class itself
//protected can be accessed with extended class too but not with objects

/**************************************/

class teacher extends person{
    ageclass(){
        console.log(this.age) // can accessed protected variables in extended class
    }
}
let t1 = new teacher("zainab",21)
t1.ageclass()

//-------------------- ABSTRACTION ---------------------

interface shape{ // used to define types of objects and functions
    draw(): void;
} // hiding unnecessary details only showing that function exists but how we are not showing this

// by using keyword "implement" we used interface in our class and we have to implement that function in our class

class Circle implements shape{ 
    name;
    draw(){
        console.log("Drawing a circle")
    }
    constructor(name:string){
        this.name = name
    }

}

let cc1 = new Circle("Zainab")

// *******************************----------------also use this with types ----------------*******************************

type shapee  = {
    draw():void;
}

class square implements shapee{
    draw(): void {
        
    }
}

// *******************************----------------___________________________----------------*******************************

/// what are static members?
// what are abstract classes?

















