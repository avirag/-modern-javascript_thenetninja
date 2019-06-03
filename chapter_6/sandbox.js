
const element = document.querySelector('body > h1');
console.log(element);

const elements = document.querySelectorAll('p');
console.log(elements);

elements.forEach(el => console.log(el));

const title = document.getElementById('page-title');
console.log(title);

const errors = document.getElementsByClassName('error');
console.log(errors);

const elementsByTagName = document.getElementsByTagName('p');
console.log(elementsByTagName);

const elementByQuerySelector = document.querySelector('p');
console.log(elementByQuerySelector.innerHTML);

const elementsByQuerySelector = document.querySelectorAll('p');
elementsByQuerySelector.forEach(el => console.log(el.innerText));

const people = ['shaun', 'ryu', 'chun-li'];

let content = document.querySelector('.list');
console.log(content.innerHTML);

people.forEach(person => {
  content.innerHTML += `<li>${person}</li>`
});


const link = document.querySelector('a');
console.log(link.getAttribute('href'));
link.setAttribute('style', 'color: green');
title.style.color = 'red';
title.style.fontSize = '38px';

// element.classList.add('error')
// element.classList.remove('error')
// element.classList.toggle('error')
// innerHTML vs. textContent

const article = document.querySelector('article');
console.log(article.children);
console.log(Array.from(article.children));

Array.from(article.children).forEach(child => {
  child.classList.add('article-element');
});

// parentElement, nextElementSibling, previousElementSibling

const button = document.querySelector('button');
const popup = document.querySelector('.popup-wrapper');
const close = document.querySelector('.popup-close');

button.addEventListener('click', event => {
  console.log('You clicked the button!', event.target);

  popup.style.display = 'block';
});

close.addEventListener('click', event => {
  popup.style.display = 'none';
});

popup.addEventListener('click', event => {
  popup.style.display = 'none';
});

const items = document.querySelectorAll('li');

items.forEach(item => {
  item.addEventListener('click', event => {
    event.target.style.textDecoration = 'line-through';
  })
});