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


//about 왼쪽 position fixed 만들기
const aboutFixed = document.querySelector('#about_self')

addEventListener('scroll',(event)=>{
  const aboutTop = document.querySelector('#about');
  const skillTop = document.querySelector('#skill');
  const top = window.pageYOffset + aboutTop.getBoundingClientRect().top;
  const bottom = window.pageYOffset + skillTop.getBoundingClientRect().top;
  
  if( window.scrollY>top-100 && window.scrollY<bottom-600 ){
    aboutFixed.classList.add('fixed');
    aboutFixed.style.opacity=1;
  }else{
    aboutFixed.style.opacity=0;
    aboutFixed.classList.remove('fixed');
  }

  if(window.scrollX<1300){
    if( window.scrollY>top-100 && window.scrollY<bottom-500 ){
      aboutFixed.classList.add('fixed');
      aboutFixed.style.opacity=1;
    }else{
      aboutFixed.style.opacity=0;
      aboutFixed.classList.remove('fixed');
    }
  }
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

        //skill 바 
        function skillBar (name,sec,per){
          const wide = document.querySelector(name);
          wide.style.width=per;
          wide.style.transition=sec;
          }

        if(name=='#skill'){
          skillBar('.html','2s ','70%');
          skillBar('.css','2s 0.2s','75%');
          skillBar('.js','2s 0.6s','60%');
          skillBar('.ps','2s 0.8s','50%');
          skillBar('.il','2s 1s','50%');
        }else{
          skillBar('.html','1s',0);
          skillBar('.css','1s',0);
          skillBar('.ps','1s',0);
          skillBar('.js','1s',0);
          skillBar('.il','1s',0);
        }

      }else{
        navTop.classList.remove('active');
      }
    })
  }


navScroll("#home",1);
navScroll("#about",2);
navScroll("#skill",3);
navScroll("#work",4);
navScroll("#contact",5);


