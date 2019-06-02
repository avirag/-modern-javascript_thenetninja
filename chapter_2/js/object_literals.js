
const blogs = [
  { title: 'cooking', likes: 500 },
  { title: 'gardening', likes: 210 },
  { title: 'sport', likes: 310 }
];

let user = {
  name: 'Crystal',
  age: 30,
  location: 'Berlin',
  blogs: [
    { title: 'cooking', likes: 500 },
    { title: 'gardening', likes: 210 },
    { title: 'sport', likes: 310 }
  ],
  login: function() {
    console.log('The user logged in!');
  },
  logBlogs: function() {
    this.blogs.forEach(blog => console.log(blog.title, blog.likes));
  }
};

console.log(user);

user.age = 35;
console.log(user);
console.log(user);

user['name'] = 'Ryan';
console.log(user);
console.log(user);

const key = 'location';
user[key] = 'Dublin';

console.log(user);
console.log(typeof user);

user.login();
user.logBlogs();

console.log(Math);
console.log(Math.PI);

const area = 7.7;
console.log(Math.round(area));

const random = Math.random();
console.log(Math.round(random * 100));


// primite types on stack
// reference types on heap

let scoreOne = 50;
let scoreTwo = scoreOne;

console.log(`scoreOne: ${scoreOne}, scoreTwo: ${scoreTwo}`);

scoreOne = 100;
console.log(`scoreOne: ${scoreOne}, scoreTwo: ${scoreTwo}`);
// reference types on heap

let userOne = { name: 'ryu', age: 30};
let userTwo = userOne;

console.log(userOne, userTwo);

userOne.age = 35;
console.log(userOne, userTwo);
