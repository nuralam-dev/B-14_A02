function calculateAiCost(tokensUsed) {
  if (typeof tokensUsed !== "number" || tokensUsed < 0) {
    return "Invalid";
  }
  if (tokensUsed <= 500) {
    return 0;
  }
  let extraToken = tokensUsed - 500;
  let chargedUnit = Math.floor(extraToken / 100);
  let totalCost = chargedUnit * 5;
  return totalCost;
}

console.log(calculateAiCost(300));
console.log(calculateAiCost(500));
console.log(calculateAiCost(650));
console.log(calculateAiCost(1000));
console.log(calculateAiCost(-10));
console.log(calculateAiCost("400"));
