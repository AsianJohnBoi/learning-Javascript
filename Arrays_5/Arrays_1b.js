let groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift(0);
console.log(groceryList);

groceryList.unshift(0);
groceryList[0] = 'popcorn';
console.log(groceryList);

console.log(groceryList.slice(1, 4));
