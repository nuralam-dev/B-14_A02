// problem _01
function matchWinner(teamAGoals, teamBGoals) {
  if (typeof teamAGoals !== "number" || typeof teamBGoals !== "number") {
    return "Invalid";
  }
  if (teamAGoals > teamBGoals) {
    return "Team A Won";
  } else if (teamAGoals < teamBGoals) {
    return "Team B Won";
  } else if (teamAGoals === teamBGoals) {
    return "Draw";
  }

  return matchWinner;
}

// problem 02
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

// problem 03

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
