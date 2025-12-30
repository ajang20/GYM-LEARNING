// type Result = "pending" | "approved" | "rejected";

// function evaluateScore(score: number): Result {
//   if (score > 90) return "approved";
//   if (score > 70) return "pending";
//   return "denied"; 
// }
const thresholds = {
  approved: 90,
  pending: 70,
} as const;

type Result = "pending" | "approved" | "rejected";

function evaluateScore(score: number): Result {
  if (score > 90) return "approved";
  if (score > 70) return "pending";
  return "rejected"; 
}

console.log(evaluateScore(thresholds.pending))
console.log(evaluateScore(100))