import { choices, remove } from "./helpers";
import fruits from "./foods";

let fruit = choices(fruits);
console.log(`I'd like one ${fruit}, please`);
console.log(`Here you go: ${remove(fruits, fruit)}`);
console.log(`Delicious! May I have another?`);
console.log(`I'm sorry we are all out. We have ${fruits.length} left.`);
