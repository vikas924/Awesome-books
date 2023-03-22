const arr = JSON.parse(localStorage.getItem('array')) || [];

function add() {
  const title = document.querySelector('#title');
  const author = document.querySelector('#author');
  const value1 = title.value.trim();
  const value2 = author.value.trim();
  if ((value1.length !== 0) && (value2 !== 0)) {
    const book = {
      title: value1,
      author: value2,
    };
    arr.push(book);
    localStorage.setItem('array', JSON.stringify(arr));
  }
}
// this will remove a book
function remove() {
  const parent = document.querySelector('#list');
  const button = document.querySelectorAll('#button');
  const butto = Array.from(button).indexOf(this);
  const reele = this.parentNode;
  parent.removeChild(reele);
  arr.splice(butto, 1);
  localStorage.setItem('array', JSON.stringify(arr));
}
// This will display a book that is instantly added
function display() {
  const list = document.querySelector('#list');
  const title = document.querySelector('#title');
  const author = document.querySelector('#author');
  const value1 = title.value.trim();
  const value2 = title.value.trim();
  if ((value1.length !== 0) && (value2 !== 0)) {
    for (let i = arr.length - 1; i < arr.length; i += 1) {
      const div = document.createElement('div');
      div.innerHTML = `<p>${arr[i].title}</p><p>${arr[i].author}</p><button id="button">Remove</button>`;
      list.appendChild(div);
    }
    for (let i = 0; i < arr.length; i += 1) {
      const button = document.querySelectorAll('#button');
      button[i].addEventListener('click', remove);
    }
    title.value = '';
    author.value = '';
  }
}

document.querySelector('.add').addEventListener('click', add);
document.querySelector('.add').addEventListener('click', display);

const list = document.querySelector('#list');
for (let i = 0; i < arr.length; i += 1) {
  const div = document.createElement('div');
  div.innerHTML = `<p>${arr[i].title}</p><p>${arr[i].author}</p><button id="button">Remove</button>`;
  list.appendChild(div);
  const button = document.querySelectorAll('#button');
  button[i].addEventListener('click', remove);
}