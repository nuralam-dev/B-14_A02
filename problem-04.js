function topRatedRestaurant(restaurants) {
  if (Array.isArray(restaurants) === false || restaurants.length === 0) {
    return "Invalid";
  }
  let topRestaurants = restaurants[0];
  for (let i = 1; i < restaurants.length; i++) {
    if (restaurants[i].rating > topRestaurants.rating) {
      topRestaurants = restaurants[i];
    }
  }

  return topRestaurants.name.toUpperCase();
}

console.log(
  topRatedRestaurant([
    { name: "Chillox", rating: 4.5 },
    { name: "Sultan's Dine", rating: 4.8 },
  ]),
); // Output: SULTAN'S DINE[cite: 1]

console.log(
  topRatedRestaurant([
    { name: "KFC", rating: 4.2 },
    { name: "Pizza Hut", rating: 4.6 },
  ]),
); // Output: PIZZA HUT[cite: 1]

console.log(topRatedRestaurant([])); // Output: Invalid[cite: 1]
console.log(topRatedRestaurant("restaurants"));
