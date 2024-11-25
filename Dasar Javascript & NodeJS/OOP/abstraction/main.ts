// Abstraction
// 1. Generalization Object with same characteristics
// 2. Hiding implementation details
// 3. Showing essentials

// Class Hierarchy
// Base Class => More Common Characteristics
// ...
// Sub Class => More Specific Characteristics
//

abstract class Animal{
    abstract name:string;
    abstract move():void;
    eat():void{
        console.log("Eating...");
    }
}

class Dog extends Animal{
    name:string;
    move():void{
        console.log("Running...");
    }
}

class Fish extends Animal{
    name:string;
    move():void{
        console.log("Swimming...");
    }
}

class Bird extends Animal{
    name:string;
    move():void{
        console.log("Flying...");
    }
}

function moveAnimal(animal:Animal){
    animal.move();
}

moveAnimal(new Dog());
moveAnimal(new Fish());
moveAnimal(new Bird());
