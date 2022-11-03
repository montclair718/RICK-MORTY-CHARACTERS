'use strict';
let cards =[];
let cards2;
let log = console.log;

// async function fetch_data_from_server() {
//     let response = await fetch('https://rickandmortyapi.com/api/character');
//     let promise = await response.json();
//     return promise
// }
// let promise = fetch_data_from_server()
// promise.then(onload)
function getcards(url) {
    fetch(url)
        .then(response => response.json())
        .then(json => onload(json))
}
getcards('https://rickandmortyapi.com/api/character')
// let pages = [];

// for (let i = 1; i <= 42; i++) {
//     pages.push(i)
// }

// let requests = pages.map(page => fetch(`https://rickandmortyapi.com/api/character?page=${page}`))
// Promise.all(requests)
//     .then(responses => Promise.all(responses.map(el => el.json())))
//     .then(element => element.forEach(json => onload(json)))


let next_page;
let back_page;
function onload(data) {
    // cards = cards.concat(data.results)
    // log(data)
    next_page = data.info.next;
    back_page = data.info.prev;
    cards = data.results;
    log(data.results)
    create_cards(cards);
    
    
}


const wrapper = document.createElement('div')
wrapper.className = 'wrapper'
const div0 = document.createElement('div')
div0.style.display = 'flex'
div0.style.flexWrap = 'wrap'
div0.style.gap = '10px 10px'
const input = document.createElement('input')
input.style.width = '400px'
input.style.marginTop = '10px'
const p = document.createElement('p')

wrapper.append(input)

document.body.append(wrapper)
document.body.append(div0)

function create_cards(cards) {
    for (let card of cards) {
        create_card(card)
       
    }
}

const BTN = document.querySelector('#btn1').addEventListener('click', my_foo)
const BTN2 = document.querySelector('#btn2').addEventListener('click', my_foo_back)
function my_foo() {
    div0.innerHTML = "";
getcards(next_page)
}
function my_foo_back() {
    div0.innerHTML = "";
    getcards(back_page)
}
function create_card(card) {
    const div1 = document.createElement('div')
    const h2 = document.createElement('h2')
    const image = document.createElement('img')
    image.src = card.image
    h2.textContent = card.name
    div1.append(image)
    div1.append(h2)
    div0.append(div1) 
}

input.addEventListener('input', let_x)

function let_x() {
    let x = input.value;
    div0.innerHTML = '';
    for (let card of cards) {
        if (card.name.toLowerCase().includes(x.trim())) {
            create_card(card); 
        }
    }
}

// $(document).ready(function(){
//     $('button').click(function() {
//         $('body').hide(3000);
//     });
// });





