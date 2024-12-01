import { average as avg, median as med } from "./statistic.js";

const nums = [1, 2, 4, 8, 16];

const average = avg(nums);
const median = med(nums);

console.log({average, median});
