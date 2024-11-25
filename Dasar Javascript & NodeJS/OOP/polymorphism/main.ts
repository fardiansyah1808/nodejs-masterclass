// Polymorphism
// Poly = many shapes
// Morphism = forms
// 
// Polymorphism is the ability of an object to take on many forms.
// In OOP, polymorphism is achieved through inheritance and method overriding.
// 1. Inheritance
// 2. Method overriding

class Animal {
    protected name: string;
    protected age: number;
    protected gender: string;
  
    constructor(name: string, age: number, gender: string) {
      this.name = name;
      this.age = age;
      this.gender = gender;
    }

    eat(){
        console.log(`${this.name} is eating`);
    }
}

class Dog extends Animal {
    private race:string;

    constructor(name:string,age:number,gender:string,race:string){
        super(name,age,gender);
        this.race=race;
    }

    eat(){
        console.log(`${this.name} is eating meat`);
    }
}

class Cow extends Animal{
    constructor(name:string,age:number,gender:string){
        super(name,age,gender);
    }

    eat(){
        console.log(`${this.name} is eating grass`);
    }
}

class Fish extends Animal{
    constructor(name:string){
        super(name,1,"Female");
    }

    eat(){
        console.log(`${this.name} is eating worms`);
    }
}

let animals = [
  new Dog("Rex",5,"male","labrador"),
  new Dog("Max",3,"male","poodle"),
  new Dog("Bella",2,"female","golden retriever"),
  new Cow("Molly",4,"female"),
  new Cow("Bessie",6,"female"),
  new Cow("Daisy",3,"female"),
  new Fish("Dory")
]

function feeding(...animals:Animal[]){
    for (let animal of animals){
        animal.eat();
    }
}

feeding(...animals);