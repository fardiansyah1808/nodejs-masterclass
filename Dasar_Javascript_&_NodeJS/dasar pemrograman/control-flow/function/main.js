const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

function sayHello() {
    console.log("Hello");
}

const n = getRandomNumber(0, 10);

if (n > 5) {
    console.log(`${n} is greater than 5`);
    sayHello();
} else {
    console.log(`${n}`);
    sayGoodbye();
}

function sayGoodbye() {
    console.log("Goodbye");
}
