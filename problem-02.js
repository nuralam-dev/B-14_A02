function isElevatorSafe(weights) {
  if (Array.isArray(weights) === false) {
    return "Invalid";
  }
  let totalWeight = 0;
  for (let i = 0; i <= weights.length - 1; i++) {
    totalWeight += weights[i];
  }
  if (totalWeight <= 400) {
    return true;
  } else {
    return false;
  }

  return totalWeight;
}

// const array = [60, 75, 500];
const array = 40000;
const result = isElevatorSafe(array);
console.log(result);
