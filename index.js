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





console.log(home.getClientRects()[0].y)
console.log(about.getClientRects()[0].y)
console.log(work.getClientRects()[0].y)
console.log(contact.getClientRects()[0].y)
console.log(home.pageXOffset())
document.addEventListener('scroll',()=>{
  let windowY = window.scrollY;
  if(windowY<about){
    console.log('about')
  }else if(windowY<work){
    console.log('work')
  }else if(windowY<contact){
    console.log('contact')
  }
})