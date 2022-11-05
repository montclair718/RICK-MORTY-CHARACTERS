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

document.body.style.backgroundColor = 'yellow'
const heading1 = document.querySelector('h1')
heading1.addEventListener('mouseenter', change_h1_color)
heading1.addEventListener('mouseleave', change_h1_color_leave)

const input_checkbox1 = document.createElement('input')
input_checkbox1.addEventListener('click', sort1)
function sort1() {
    if (input_checkbox1.checked) {
        div0.innerHTML = ''; 
        for (let card of cards) {
            if (card.gender === 'Female') {
                create_card(card);
            }
        }  
    }  
    else {
        div0.innerHTML = ''; 
        create_cards(cards)
    }
}
const input_checkbox2 = document.createElement('input')
input_checkbox2.addEventListener('click', sort2)
function sort2() {
    if (input_checkbox2.checked) {
     
        div0.innerHTML = '';
        for (let card of cards) {
            if (card.species === 'Alien') {
                create_card(card)
            }
        }
    } else {
        div0.innerHTML = '';
        create_cards(cards)
        
        
    }
}
const input_checkbox3 = document.createElement('input')
input_checkbox3.addEventListener('click', sort3)
function sort3() {
    if (input_checkbox3.checked) {
       
        div0.innerHTML = '';
        for (let card of cards) {
            if (card.status === 'Alive') {
                create_card(card)
            }
        }
    } else {
        div0.innerHTML = '';
        create_cards(cards)
   
    }
}
input_checkbox1.type = 'radio'
input_checkbox1.name = 'radio'
const span1 = document.createElement('span')
span1.textContent = 'Females'
input_checkbox2.type = 'radio'
input_checkbox2.name = 'radio'
const span2 = document.createElement('span')
span2.textContent = 'Aliens'
input_checkbox3.type = 'radio'
input_checkbox3.name = 'radio'
const span3 = document.createElement('span')
span3.textContent = 'Alive'

const div_check_and_span_wrapper1 = document.createElement('div')
div_check_and_span_wrapper1.className = 'wrapper1'
const div_check_and_span_wrapper2 = document.createElement('div')
div_check_and_span_wrapper2.className = 'wrapper1'
const div_check_and_span_wrapper3 = document.createElement('div')
div_check_and_span_wrapper3.className = 'wrapper1'
    
function change_h1_color() {
    if ('mouseenter') {
        heading1.style.textDecoration = 'underline';
        heading1.style.color = 'red';
    }
}
function change_h1_color_leave() {
    if ('mouseleave') {
        heading1.style.textDecoration = 'none';
        heading1.style.color = 'black';
    }
}

const wrapper = document.createElement('div')
wrapper.className = 'wrapper'
const div0 = document.createElement('div')
div0.className = 'div0'
div0.style.display = 'flex'
div0.style.flexWrap = 'wrap'
div0.style.gap = '10px 10px'
const input = document.createElement('input')
input.className = 'input_filter'
input.style.width = '100%'
input.style.height = '30px'
input.placeholder = 'filter characters by name';
input.style.marginTop = '10px'
const p = document.createElement('p')

wrapper.append(input)
document.body.append(wrapper)
document.body.append(div0)
wrapper.append(
    input_checkbox1,
    input_checkbox2,
    input_checkbox3)
wrapper.append(
    span1,
    span2,
    span3)
wrapper.append(
    div_check_and_span_wrapper1,
    div_check_and_span_wrapper2,
    div_check_and_span_wrapper3)
div_check_and_span_wrapper1.append(input_checkbox1, span1)
div_check_and_span_wrapper2.append(input_checkbox2, span2)
div_check_and_span_wrapper3.append(input_checkbox3, span3)

function create_cards(cards) {
    for (let card of cards) {
        create_card(card)
    }
}

document.querySelector('#btn1').addEventListener('click', my_foo)
document.querySelector('#btn2').addEventListener('click', my_foo_back)



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
    div1.className = 'div1'
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








