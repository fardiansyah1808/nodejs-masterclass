const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

let n = getRandomNumber(0, 10);

while (n <= 5) {
    console.log(`n is ${n}`);
    n = getRandomNumber(0, 10);
}

let m = getRandomNumber(0, 10);

do {
    console.log(`m is ${m}`);
    m = getRandomNumber(0, 10);
} while (m > getRandomNumber(0, 5));

for (let i = getRandomNumber(0, 10); i <= 5; i = getRandomNumber(0, 10)) {
    console.log(`i is ${i}`);
}

