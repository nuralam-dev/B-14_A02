function topRatedRestaurant(restaurants) {
    // চ্যালেঞ্জ: Input Array না হলে অথবা Array Empty হলে "Invalid" রিটার্ন করা
    if (!Array.isArray(restaurants) || restaurants.length === 0) {
        return "Invalid";
    }

    // প্রথম রেস্টুরেন্টকে প্রাথমিক সেরা ধরে নেওয়া
    let topRestaurant = restaurants[0];

    // Loop চালিয়ে সর্বোচ্চ Rating প্রাপ্ত রেস্টুরেন্ট খুঁজে বের করা
    for (let i = 1; i < restaurants.length; i++) {
        if (restaurants[i].rating > topRestaurant.rating) {
            topRestaurant = restaurants[i];
        }
    }

    // নামটি Uppercase করে রিটার্ন করা
    return topRestaurant.name.toUpperCase();
}

// --- Sample Test Cases & Output ---
console.log(topRatedRestaurant([
    { name: "Chillox", rating: 4.5 },
    { name: "Sultan's Dine", rating: 4.8 }
])); // Output: SULTAN'S DINE[cite: 1]

console.log(topRatedRestaurant([
    { name: "KFC", rating: 4.2 },
    { name: "Pizza Hut", rating: 4.6 }
])); // Output: PIZZA HUT[cite: 1]

console.log(topRatedRestaurant([]));             // Output: Invalid[cite: 1]
console.log(topRatedRestaurant("restaurants"));  // Output: Invalid[cite: 1]