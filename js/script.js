'use strict';

const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.header__menu');
const body = document.querySelector('body');
document.querySelector('.onn').addEventListener('click', ()=>{
    document.querySelector('.online').classList.toggle('open');
    document.querySelector('.onn .arrow').classList.toggle('open')

})
document.querySelector('.off').addEventListener('click', ()=>{
    document.querySelector('.offline').classList.toggle('open');
    document.querySelector('.off .arrow').classList.toggle('open')

})
document.querySelector('.testSection').addEventListener('click', ()=>{
    document.querySelector('.test').classList.toggle('open');
    document.querySelector('.testSection .arrow').classList.toggle('open')

})
hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('active');

})