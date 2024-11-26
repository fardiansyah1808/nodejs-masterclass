function readingBook() {
    console.log("I'm reading a book");
}

function watchingMovie() {
    console.log("I'm watching a movie");
}
function listeningMusic() {
    console.log("I'm listening to music");
}

function playingGame() {
    console.log("I'm playing a game");
}


// Callback function
// function orderFood(callback:()=>void){
//     console.log("I'm ordering food");
//     setTimeout(() => {
//         console.log("Food is being prepared");
//     }, 1000);
//     setTimeout(() => {
//         console.log("Waiting for food to be delivered");
//     }, 2000);
//     setTimeout(() => {
//         console.log("Food is delivered");
//         callback();
//     }, 3000);
// }

// orderFood(eatFood);


// Promise function
//  pending, fulfilled, rejected
// function orderFood() {
//     console.log("I'm ordering food");
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Food is being prepared");
//         }, 1000);
//         setTimeout(() => {
//             console.log("Waiting for food to be delivered");
//         }, 2000);
//         setTimeout(() => {

//             let foodIsDelivered = false;
//             if (foodIsDelivered) { resolve(true); console.log("Food is delivered") }
//             else { reject(false); console.log("Food is not delivered") };
//         }, 3000);
//     });
// }

// let foodPromise = orderFood();
// foodPromise.then(eatFood).catch(complain);

// function complain() {
//     console.log("I'm complaining to the restaurant");
// }


// Async and Await
// async function orderFood() {
//     console.log("I'm ordering food");
//     let result = await fetch("https://jsonplaceholder.typicode.com/posts");
//     if (result.ok) return "Food is delivered";
//     else throw new Error("Food is not delivered");
// }

// let foodPromise = orderFood();
// foodPromise.then(eatFood).catch(complain);

// function complain(message) {
//     console.log("I'm complaining, " + message.message);
// }

// function eatFood(result) {
//     console.log(result + ", I'm eating food ");
// }


// Promise.all
// async function orderFood() {
//     console.log("I'm ordering food");
//     let result = await fetch("https://jsonplaceholder.typicode.com/posts");
//     if (result.ok) return "Food is delivered";
//     else throw new Error("Food is not delivered");
// }

// function complain(message) {
//     console.log("I'm complaining, " + message.message);
// }

// function eatFood(result) {
//     console.log(result + ", I'm eating food ");
// }

// let foodPromise = Promise.all([orderFood(), orderFood(), orderFood()]);
// foodPromise.then(eatFood).catch(complain);

async function orderFood() {
    console.log("I'm ordering food");
    let result = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (result.ok) return "Food is delivered";
    else throw new Error("Food is not delivered");
}

function complain(message) {
    console.log("I'm complaining, " + message.message);
}

function eatFood(result) {
    console.log(result + ", I'm eating food ");
}

readingBook();
watchingMovie();
listeningMusic();

let foodPromise = Promise.all([orderFood(), orderFood(), orderFood()]);
foodPromise.then(eatFood).catch(complain);
playingGame();
