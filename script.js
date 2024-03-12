let button = document.querySelector('#button');
let show = document.querySelector('.container');
let button1 = document.querySelector('#button1');
let button2 = document.querySelector('#button2');
let container = document.querySelector('.container');
let none2 = document.querySelector('.none2');

let increase = 3;
let decrease = 1.8;

button.addEventListener('click', () => {
    button.classList.add('none');
    show.classList.remove('none');
});

button1.addEventListener('click', () => {
    container.classList.add('none');
    none2.classList.remove('none');
});

button2.addEventListener('click', () => {
    // button1.classList.add('increase');
    button1.style.fontSize = increase + 'rem';
    button2.style.fontSize = decrease + 'rem';
    decrease -= 0.2;
    // button2.classList.add('decrease');
    // document.querySelector('.increase').style.fontSize = increase + 'rem';
    increase++;

});



