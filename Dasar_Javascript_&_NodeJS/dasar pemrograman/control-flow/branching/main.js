console.log("====== Branching ======");

const getRandomNumber = (start, end) => Math.floor(Math.random() * (end - start + 1)) + start;
console.log("Program Started");

const min =1
const max =100

const randomNumber = getRandomNumber(min, max);

const isOdd = randomNumber % 2 === 1;

const isEven = !isOdd;

if (isOdd) {
    console.log(`${randomNumber} is odd`);
} else if (randomNumber % 10 === 0) {
    console.log(`${randomNumber} is even and divisible by 10`);
} else {
    console.log(`${randomNumber} is even`);
}

const day = "Monday";

switch (day) {
    case "Monday":
        console.log(`Today is ${day}. There is school today`);
        break;
    case "Wednesday":
        console.log(`Today is ${day}. There is school today but out of town`);
        break;
    case "Friday":
        console.log(`Today is ${day}. There is school today but in the city`);
        break;
    default:
        console.log(`Today is ${day}. There is no school today`);
}

const randomScore = getRandomNumber(0, 10);

const x = randomScore >= 6 ? "You Passed" : "You Shall Not Pass";

console.log(`${randomScore} is ${x}`);

console.log("Program Ended");
