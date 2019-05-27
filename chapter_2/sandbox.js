let name = 'Lion';

console.log(name[0]); // L
console.log(name.toUpperCase()); // LION
console.log(name.indexOf('o')); 2

let email = "hello@word.com";

const index = email.lastIndexOf('.');

const result1 = email.slice(0, 10);
const result2 = email.substr(6, 4);
const result3 = email.replace('com', 'co.uk');

const pi = 3.14;

let template = `The PI equals to ${pi}`;

let html = `
  <h2>The name is ${name}</h2>
`;

let ninjas = ['shaun', 'ryu', 'chun-li'];
ninjas[1] = 'ken';

let mixed = ['shaun', 'ryu', 2, 3];
console.log(mixed.length); 4
console.log(ninjas.join(', ')); // shaun, ken, chun-li

let result4 = ninjas.concat(['kate', 'crystal']);
ninjas.push('john');
console.log(ninjas); // ['shaun', 'ken', 'chun-li', 'john]
console.log(ninjas.pop()); // john

console.log(email.includes('@')); // true
console.log(ninjas.includes('shaun')); // true

name = 'Shaun';
console.log(name > 'cecil'); // false
console.log(name > 'Cecil'); // true

let age = 25;
console.log(age == 25); // true
console.log(age == '25'); // true
console.log(age === 25); // true
console.log(age === '25'); // false

let score = '100';
let sum = score + 1;
console.log(sum, typeof sum); // '1001' string
console.log(Number(score) + 1); // 101


