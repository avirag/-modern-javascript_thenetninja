let ninjas = ['shaun', 'ryu', 'chun-li', 'william', 'liam'];
for (let i = 0; i < ninjas.length; i++) {
  if(ninjas[i] == 'ryu') {
    continue;
  }

  if(ninjas[i] == 'william') {
    break;
  }

  console.log(ninjas[i]);
}

let j = 0;
while (j < 5) {
  console.log(j);
  j++;
}

let k = 0;
do {
  console.log(k);
  k++;
} while (k < 5)

let grade = 50;
switch(grade) { // === strict comparision
  case 10:
    console.log(grade);
    break;
  case '50':
    console.log('string');
    break;
  default:
    console.log('not a valid grade');
    break;
}

let l = 30;

if(true) {
  let m = 40;
  let n = 50;
  console.log('inside 1st code block', l, m);
}

if(true) {
  // ReferenceError: m is not defined
  // console.log('inside 2nd code block', l, m);
}

// ReferenceError: n is not defined
// console.log('outside', n);
