console.log("===== Operator =====");

let x = 3;
// let y = 3;
let y = "3";

// const status = x === y;
// const status = x !== y;
const status = x <= y;
console.log(status);


console.log("===== Math Unary Operator =====");

let a = 5;
// a = a + 1;
// a += 1;
let b = a++;

let c = ++a;
console.log({ a, b, c });


console.log("===== Math Binary Operator =====");

let q = 10;
let e = 3;

let z = q * e;
console.log(z);

let i = 10
let j =3
let k = i % j;
console.log(k);

let s = "2"
let t = "3"
let u = s + t;
console.log(u);

let v = 40;
let w = -3;
let h = v ** w;
console.log(h);



console.log("===== Logical Operator =====");

let m = 10;
let n = 3;

let o = m > n && m === 10;
console.log(!o);

let p = m > n || m === 10;
console.log(p);

let l = !(m > n || m === 10);
console.log(l);

const email = "fardi@gmail.com";
const password = "rahasia";

const isEmailValid = email === "fardi@gmail.com";
const isPasswordValid = password === "rahasia2";

const isLogin = isEmailValid && isPasswordValid;
console.log(isLogin);
