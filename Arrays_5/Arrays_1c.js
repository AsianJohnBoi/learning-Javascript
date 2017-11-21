let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments.push('Banana ketchup');
console.log(condiments);

condiments = ['Banana ketchup'];
console.log(condiments);

utensils.pop(3);
console.log(utensils);

utensils = ['Chopsticks']; //error as utensils array is constant
