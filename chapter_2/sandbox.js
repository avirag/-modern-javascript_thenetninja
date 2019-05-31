let people = ['mario', 'luigi', 'shaun', 'ryu', 'chun-li'];

const ul = document.querySelector('.people');

let html = '';
people.forEach(person => {
  html += `<li style="color: purple">${person}</li>`;
});

ul.innerHTML = html;