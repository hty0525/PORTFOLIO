const slideBox =document.querySelector('#slideBox');
const slideWrap = document.querySelector('#slideWrap');
const slideFirst = slideWrap.firstElementChild;
const slideLast = slideWrap.lastElementChild;
const cloneLast = slideLast.cloneNode(true);
const cloneFirst = slideFirst.cloneNode(true);

let moveSlide = false;
let slideDelay = 3000;
//자동으로 슬라이드 움직일건지 그리고 그 속도

slideWrap.appendChild(cloneFirst);
slideWrap.insertBefore(cloneLast,slideFirst);

const slideLen = slideWrap.childElementCount;
const slideItem = document.querySelectorAll('.slideItem');
const slideWidth = 100/slideLen;

slideWrap.style.transform= `translateX(-${slideWidth}%)`
let delay = 1000;
//슬라이드 넘어갈때 속도

for(let key of slideItem){
    key.style.width = `${100/slideLen}%`;
}
slideWrap.style.width = `${100*slideLen}%`;


//슬라이드 페이저 생성
const slidePager = document.querySelector('.slidePager');
for(let i=1; i<=slideLen-2; i++){
    let slidePage = document.createElement('li');
    slidePage.setAttribute('class', 'slidePage');
    slidePage.setAttribute('value', i);
    slidePager.appendChild(slidePage);
}
const slidePage = document.querySelectorAll('.slidePage');
slidePage[0].classList.add('on');

for(let key of slidePage){
    key.addEventListener('click',(e)=>{
        for(let i of slidePage){
            i.classList.remove('on');
        }
        let target = e.target;
        target.classList.add('on');
        slideNum=target.value;
        slideWrap.style.transform=`translateX(-${slideNum*slideWidth}%)`;
        slideWrap.style.transition = `${delay}ms`;
    })
}




const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');
let slideNum = 1;
function nextSlide(){
    slideNum++
    if(slideNum==slideLen-1){
        slideWrap.style.transform=`translateX(-${slideNum*slideWidth}%)`;
        slideWrap.style.transition = `${delay}ms`;
        slideNum = 1;
        for(let key of slidePage){
            key.classList.remove('on')
        }
        slidePage[slideNum-1].classList.add('on');
        setTimeout(()=>{
            slideWrap.style.transition = `0s`;
            slideWrap.style.transform=`translateX(-${slideNum*slideWidth}%)`;
        },delay);
        return false;
    }
    for(let key of slidePage){
        key.classList.remove('on')
    }
    slidePage[slideNum-1].classList.add('on');
    slideWrap.style.transform=`translateX(-${slideNum*slideWidth}%)`;
    slideWrap.style.transition = `${delay}ms`;
}
function prevSlide(){
    slideNum--
    if(slideNum<=0){
        slideWrap.style.transform=`translateX(-${slideNum*slideWidth}%)`;
        slideWrap.style.transition = `${delay}ms`;
        slideNum = slideLen-2;
        for(let key of slidePage){
            key.classList.remove('on')
        }
        slidePage[slideNum-1].classList.add('on');
        setTimeout(()=>{
            slideWrap.style.transition = `0s`;
            slideWrap.style.transform=`translateX(-${slideNum*slideWidth}%)`;
        },delay);
        return false;
    }
    for(let key of slidePage){
        key.classList.remove('on')
    }
    slidePage[slideNum-1].classList.add('on');
    slideWrap.style.transform=`translateX(-${slideNum*slideWidth}%)`;
    slideWrap.style.transition = `${delay}ms`;
}

nextBtn.addEventListener('click',nextSlide);
prevBtn.addEventListener('click',prevSlide);

if(moveSlide){
    setInterval(()=>{
        nextSlide();
    },slideDelay);
}

//재생 정지
// let reSlide = setInterval( 
//     nextSlide
//     ,slideDelay);
    
//     reSlide;
    
//     const stopBtn = document.querySelector('.stop_go');
    
//     stopBtn.addEventListener('click',(e)=>{
//         let target = e.target;
//         if(target.id =='stop'){
//             reSlide = setInterval(
//                 nextSlide
//                 ,slideDelay);
//             target.id='go';
//             return false;
//         }
//         target.id = 'stop';
//         clearInterval(reSlide);
//         resLide=0;
//     })