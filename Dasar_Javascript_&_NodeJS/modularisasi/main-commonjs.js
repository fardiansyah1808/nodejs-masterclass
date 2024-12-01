const { mean, median: med } = require("./statistic") // CommonJS doesnt support browser import

const nums = [1, 2, 4, 8, 16];

const avg = mean(nums);
const median = med(nums);

console.log({avg, median});
