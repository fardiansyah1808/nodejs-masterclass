// ==== Encapsulation ====
//              World     Class     SubClass
// Public         v         v           v
// Private        x         v           x
// Protected      x         v           v
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
var Animal = /** @class */ (function () {
    function Animal(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    Animal.prototype.walking = function () {
        console.log("".concat(this.name, " is walking 1 meter"));
    };
    Object.defineProperty(Animal.prototype, "getName", {
        get: function () {
            var name = this.name.charAt(0).toUpperCase() + this.name.substring(1).toLowerCase();
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Animal.prototype, "setName", {
        set: function (name) {
            for (var i = 0; i < name.length; i++) {
                if (name[i] === " ") {
                    throw new Error("Name cannot contain spaces");
                }
                else if (name.charCodeAt(i) >= 65 && name.charCodeAt(i) <= 90 || name.charCodeAt(i) >= 97 && name.charCodeAt(i) <= 122) {
                    this.name = name;
                }
                else {
                    throw new Error("Name must contain only letters");
                }
            }
        },
        enumerable: false,
        configurable: true
    });
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, age, race, gender) {
        var _this = _super.call(this, name, age, gender) || this;
        _this.race = race;
        Dog.count++;
        console.log("Object Dog is created");
        return _this;
    }
    Dog.prototype.barking = function () {
        console.log("".concat(this.race, ", ").concat(this.name, " is barking"));
    };
    return Dog;
}(Animal));
(function () {
    Dog.species = "Canis lupus familiaris";
    Dog.count = 0;
})();
(function () {
    console.log("Class Dog is initialized");
})();
var Cow = /** @class */ (function (_super) {
    __extends(Cow, _super);
    function Cow(name, age, gender) {
        return _super.call(this, name, age, gender) || this;
    }
    Cow.prototype.speaking = function () {
        console.log("".concat(this.name, " is Moo.."));
    };
    return Cow;
}(Animal));
var dog = new Dog("Bing", 2, "Shiba Inu", "Male");
dog.setName = "Pando";
console.log(dog.getName);
dog.barking();
var cow = new Cow("Otis", 7, "Male");
