// function declaration
function greet() {

}

// function expression
const speak = function () {

}

// arrow functions
const calc = () => {

}

const hi = () => console.log('hello');

hi();

// callbacks
const myFunc = callbackFunc => {
  let value = 50;
  callbackFunc(value);
};

myFunc(function(value) {
  console.log(value);
});

let people = ['shaun', 'ryu', 'chun-li'];

people.forEach(function(person, index) {
  console.log(index + ' ' + person);
});

people.forEach(person => console.log(person));
