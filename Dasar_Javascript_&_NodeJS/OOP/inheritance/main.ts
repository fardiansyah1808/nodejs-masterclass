// ==== Inheritence ====
// Animal
//   |   \
//  Dog  Cow
//       |   \
//     Dairy  Cattle

class Animal {
  name
  age
  gender

  constructor(name, age, gender) {
    this.name = name
    this.age = age
    this.gender = gender
  }

  walking() {
    console.log(`${this.name} is walking 1 meter`);
  }
}


class Dog extends Animal {
  static species;
  static count;
  static {
    Dog.species = "Canis lupus familiaris";
    Dog.count = 0;
  }

  static {
    console.log("Class Dog is initialized");
  }

  race;

  constructor(name, age, race, gender) {
    super(name, age, gender)
    this.race = race
    Dog.count++;
    console.log("Object Dog is created");
  }

  barking() {
    console.log(`${this.name} is barking`);
  }
}

class Cow extends Animal {
  constructor(name, age, gender) {
    super(name, age, gender)
  }

  speaking() {
    console.log(`${this.name} is Moo..`)
  }
}

class DairyCow extends Cow {
  constructor(name, age, gender) {
    super(name, age, gender)
  }
}

class BeefCattle extends Cow {
  constructor(name, age, gender) {
    super(name, age, gender)
  }
}

let dog = new Dog("Bing", 2, "Shiba Inu", "Male")
dog.walking()
dog.barking()

let cow = new Cow("Otis", 7, "Male")
cow.walking()

let dairy = new DairyCow("Dessy", 4, "Female")
dairy.walking()
dairy.speaking()

let cattle = new DairyCow("Yard", 3, "Male")
cattle.walking()
cattle.speaking()