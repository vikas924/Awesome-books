const arr = JSON.parse(localStorage.getItem('array')) || [];

class Books {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  display() {
    const list = document.querySelector('#list');
    const value1 = this.title.trim();
    const value2 = this.author.trim();
    const div = document.createElement('div');
    div.classList.add('div');
    div.innerHTML = `<div class="paradiv" <p>"${value1}" by "${value2}"</p></div><div class="buttondiv"><button id="button">Remove</button></div>`;
    list.appendChild(div);
    for (let i = 0; i < arr.length; i += 1) {
      const button = document.querySelectorAll('#button');
      button[i].addEventListener('click', Books.remove);
    }
    const change = document.querySelectorAll('.div');
    for (let i = 0; i < arr.length; i += 1) {
      if (i % 2 === 0) {
        change[i].classList.add('background');
      }
    }
  }

  static displayall() {
    const list = document.querySelector('#list');
    for (let i = 0; i < arr.length; i += 1) {
      const div = document.createElement('div');
      div.classList.add('div');
      div.innerHTML = `<div class="paradiv"><p>"${arr[i].title}" by "${arr[i].author}"</p></div><div class="buttondiv"><button id="button">Remove</button></div>`;
      list.appendChild(div);
      const button = document.querySelectorAll('#button');
      button[i].addEventListener('click', Books.remove);
    }
    const change = document.querySelectorAll('.div');
    for (let i = 0; i < arr.length; i += 1) {
      if (i % 2 === 0) {
        change[i].classList.add('background');
      }
    }
  }

  static remove() {
    const parent = document.querySelector('#list');
    const button = document.querySelectorAll('#button');
    const butto = Array.from(button).indexOf(this);
    const reele = this.parentNode.parentNode;
    parent.removeChild(reele);
    arr.splice(butto, 1);
    localStorage.setItem('array', JSON.stringify(arr));
  }
}

Books.displayall();

function add() {
  const title = document.querySelector('#title');
  const author = document.querySelector('#author');
  const value1 = title.value.trim();
  const value2 = author.value.trim();
  if ((value1.length !== 0) && (value2.length !== 0)) {
    const books = new Books(value1, value2);
    arr.push(books);
    localStorage.setItem('array', JSON.stringify(arr));
    books.display();
  }
  title.value = '';
  author.value = '';
}

document.querySelector('.add').addEventListener('click', add);
