class Dog {
  static species;
  static count;
  static {
    Dog.species = "Canis lupus familiaris";
    Dog.count = 0;
  }

  static {
    console.log("Class Dog is initialized");
  }

  name;
  age;
  race;
  gender;

  constructor(name, age, race, gender) {
    this.name = name;
    this.age = age;
    this.race = race;
    this.gender = gender;
    Dog.count++;
    console.log("Object Dog is created");
  }

  walking() {
    console.log(`${this.name} is walking`);
  }

  barking() {
    console.log(`${this.name} is barking`);
  }
}

let milo = new Dog("Milo", 2, "Shih Tzu", "Male");
console.log(milo);
milo.walking();
milo.barking();

let molly = new Dog("Molly", 3, "Poodle", "Female");
console.log(molly);
molly.walking();
molly.barking();

console.log(Dog.species);
console.log(Dog.count);
