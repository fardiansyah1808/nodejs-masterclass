// ==== Encapsulation ====
//              World     Class     SubClass
// Public         v         v           v
// Private        x         v           x
// Protected      x         v           v

class Animal {
  protected name: string;
  protected age: number;
  protected gender: string;

  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  walking() {
    console.log(`${this.name} is walking 1 meter`);
  }

  get getName() {
    let name = this.name.charAt(0).toUpperCase() + this.name.substring(1).toLowerCase()
    return name
  }

  set setName(name) {
    for (let i = 0; i < name.length; i++) {
      if (name[i] === " ") {
        throw new Error("Name cannot contain spaces");
      } else if (name.charCodeAt(i) >= 65 && name.charCodeAt(i) <= 90 || name.charCodeAt(i) >= 97 && name.charCodeAt(i) <= 122) {
        this.name = name
      } else {
        throw new Error("Name must contain only letters");
      }
    }
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

  private race;

  constructor(name, age, race, gender) {
    super(name, age, gender)
    this.race = race
    Dog.count++;
    console.log("Object Dog is created");
  }

  barking() {
    console.log(`${this.race}, ${this.name} is barking`);
  }
}

class Cow extends Animal {
  constructor(name, age, gender) {
    super(name, age, gender)
  }

  speaking() {
    console.log(`${this.name} is Moo..`);
  }
}

let dog = new Dog("Bing", 2, "Shiba Inu", "Male")
dog.setName = "pandoASDASD"
console.log(dog.getName)
dog.barking()

let cow = new Cow("Otis", 7, "Male")