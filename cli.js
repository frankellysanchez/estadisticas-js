import { calculateAverage, calculateMedian, getApproved } from "./stats.js";

const grades = [70, 80, 88, 90, 100, 96, 60, 65];

const media = calculateAverage(grades);
console.log(`Media: ${media}`);

const median = calculateMedian(grades);
console.log(`Median: ${median}`);

const approved = getApproved(grades);
console.log(`Approved: ${approved}`);