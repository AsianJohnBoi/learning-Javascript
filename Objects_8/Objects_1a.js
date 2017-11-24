let alarm;

let person = {
  person: 'Human',
  name: 'John',
  age: 19,
  weekendAlarm: 'No alarms needed',
  weekAlarm: 'Alarm set to 7AM',
  sayHello: function() {
    return `Hello, my name is ${this.name}`;
  },
  sayGoodbye: () => {
  	return 'Goodbye!'
	},
}

let friend = {
  name: 'Bruno',
}
friend.sayHello = person.sayHello;

let day = 'Friday';

if (day === 'Saturday' || day === 'Sunday'){
  alarm = 'weekendAlarm';
}
else{
  alarm = 'weekAlarm';
}

person.hobbies = ['Football'];

console.log(person[alarm]);
console.log(person.hobbies);

console.log(person.sayHello());
console.log(person.sayGoodbye());

console.log(person.name);
console.log(person.age);
console.log(person['name']);
console.log(person['age']);

console.log(friend.sayHello());
