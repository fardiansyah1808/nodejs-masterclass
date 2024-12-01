let z = [0, 1, 2, 3, 4, 5];

z[0] = 100;
console.log(z);

console.log("after slice 0", z.slice(0));

console.log("after slice 2-4", z.slice(2, 4));

z.push(69);
console.log("after push 69", z);

z.unshift(-69);
console.log("after unshift -69", z);

const pop = z.pop();
console.log("after pop", z, "pop", pop);

const shift = z.shift();
console.log("after shift", z, "shift", shift);

for (let i = 0; i < z.length; i++) {
  console.log("Elemen ke", i, "adalah", z[i]);
}

for (let element of z) {
  console.log("value adalah", element);
}
