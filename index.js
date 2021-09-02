'use strict'

//work box 백그라운드


const workBox =document.querySelectorAll('.work_background');
let workBoxNum = 1;
for(let key of workBox){
  key.style.background=`center / cover no-repeat url(./img/work${workBoxNum}.png)`;
  workBoxNum++;
}



//네비게이션 바 효과
const navbar = document.querySelector('#nav_bar');
addEventListener('scroll', (event)=>{
  if( window.scrollY>300){
    navbar.classList.add('nav_bar_top');
  }else{
    navbar.classList.remove('nav_bar_top');
  }
});

//로고 누르면 맨위로 올라가기
const logoTop = document.querySelector('.nav_logo');

logoTop.addEventListener('click', (event) => {
  window.scrollTo({
    behavior: "smooth",
    top:0
  });
});

//네비게이션 버튼클릭하면 거기로 슝
const navBtn = document.querySelector('.nav_box');

navBtn.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.dataset.link;
  const scrollTo = document.querySelector(link);
  event.target.classList.remove('active');
  scrollTo.scrollIntoView({behavior: "smooth"});
});



//네비게이션 스크롤바 위치에 따른 메뉴 효과

function navScroll(name,num){
    addEventListener('scroll' , (event) =>{
      const nav = document.querySelectorAll('.nav_box li');
      const navTop = document.querySelector('.nav_box li:nth-child('+num+')');
      const thisT = document.querySelector(name).getBoundingClientRect().top;
      const thisH = document.querySelector(name).getBoundingClientRect().height;
      const domTop = window.pageYOffset+thisT;
      const wt =window.scrollY;


      if( domTop-200<wt && wt<domTop+thisH-200){
        navTop.classList.add('active');

      }else{
        navTop.classList.remove('active');
      }
    })
  }


navScroll("#home",1);
navScroll("#about",2);
navScroll("#work",3);
navScroll("#contact",4);


