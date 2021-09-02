
$(function(){
	var scroll = window.requestAnimationFrame ||
             
             function(callback){ window.setTimeout(callback, 1000/60)};
			 //초당 60 프레임은 대부분의 인간이 무언가를 부드럽게 움직이는 것으로 인식하는 최소 프레임 속도

//따라서 60ms마다 1000ms (1s)로 실행됩니다.

var elementsToShow = document.querySelectorAll('section, section *'); 

function loop() {
//Array는 forEach()를 호출한 배열.
//forEach() 메서드는 주어진 함수를 배열 요소 각각요소.call에 대해 실행합니다.
//.prototype새로운 객체를 결과로 반환

    Array.prototype.forEach.call(elementsToShow, function(element){
      if (isElementInViewport(element)) {//현재 보이는 돔요소의
        element.classList.add('on');//클래스is-visible더해
      } else {
        element.classList.remove('on');
      }
    });

    scroll(loop);
}


loop();//반복

/////////////////////////////////////////////////////////////////////////////
//이후 높이인식반응 리싸이클 
//건드리지마세요
function isElementInViewport(el) {
 
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 150
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}



});








