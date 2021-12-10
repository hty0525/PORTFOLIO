'use strict'

//로딩바
window.onload = ()=>{
  setTimeout(()=>{
    const loading = document.querySelector('.loading');
    loading.style.opacity = '0';
    setTimeout(()=>{
      loading.remove()
    },600)
  },1100)
}

const home = document.querySelector('#home');
const about = document.querySelector('#about');
const work = document.querySelector('#work');
const contact = document.querySelector('#contact');


console.log(home)