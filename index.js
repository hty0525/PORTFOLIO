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
const nav = document.querySelector('.nav');
const navItem = document.querySelectorAll('.menuItem')


document.addEventListener('scroll',()=>{
  let windowY = window.scrollY;

  const homeY = window.pageYOffset + home.getBoundingClientRect().top;
  const aboutY = window.pageYOffset + about.getBoundingClientRect().top;
  const workY = window.pageYOffset + work.getBoundingClientRect().top;
  const contactY = window.pageYOffset + contact.getBoundingClientRect().top;
  for(let key of navItem){
    key.classList.remove('active')
  }
  if(windowY==0){
    nav.classList.remove('on')
  }else{
    nav.classList.add('on')
  }


  if(windowY<aboutY-200){
    navItem[0].classList.add('active')
  }else if(windowY<workY-200){
    navItem[1].classList.add('active')
  }else if(windowY<contactY-200){
    navItem[2].classList.add('active')
  }else{
    navItem[3].classList.add('active')
  }
})