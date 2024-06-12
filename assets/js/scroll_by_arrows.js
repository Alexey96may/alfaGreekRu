let list = top_topics_scroll.querySelector('.last_post_list');
let listElems = top_topics_scroll.querySelectorAll('li');
let widthFull = document.querySelector('.last_post_list').scrollWidth + 24; //вся ширина блока

let width = document.querySelector("#top_topics_scroll li").clientWidth // ширина блока
let widthVis = document.querySelector('#top_topics_scroll').clientWidth; //видимая ширина блока
let count = widthVis / width; // видимое количество изображений

let position = 0; // положение ленты прокрутки

let windowHeight = window.innerHeight;

//появление
let isElemAppeared = false;
function appElem() {
  let windowHeight = window.innerHeight;
  let elemPosition = list.getBoundingClientRect().top + document.body.scrollTop;
  if (windowHeight >= elemPosition && !isElemAppeared) {
    isElemAppeared = true;
    setTimeout(() => {
      list.style.marginLeft = '0px';
    }, 300);
  }
}
appElem();
document.addEventListener('scroll', appElem);

//если нет скрола 
if (widthVis >= list.scrollWidth) {
  top_topics_scroll.querySelector('#to_left').style.display = 'none';
  top_topics_scroll.querySelector('#to_right').style.display = 'none';
  list.style.justifyContent = 'center';
}

top_topics_scroll.querySelector('#to_left').onclick = function() {
  // сдвиг влево
  position += width * 2;
  // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
  position = Math.min(position, 0);
  if (position === 0) {
    top_topics_scroll.querySelector('#to_left').classList.add("fadeToNone");
  } else {
    top_topics_scroll.querySelector('#to_left').classList.remove("fadeToNone");
  };

  if (position === -width * (listElems.length - count)) {
    top_topics_scroll.querySelector('#to_right').classList.add("fadeToNone");
  } else {
    top_topics_scroll.querySelector('#to_right').classList.remove("fadeToNone");
  };

  list.style.marginLeft = position + 'px';
};


top_topics_scroll.querySelector('#to_right').onclick = function() {
  // сдвиг вправо
  position -= width * 2;
  // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
  position = Math.max(position, -width * (listElems.length - count));

  if (position === 0) {
    top_topics_scroll.querySelector('#to_left').classList.add("fadeToNone");
  } else {
    top_topics_scroll.querySelector('#to_left').classList.remove("fadeToNone");
  };

  if (position === -width * (listElems.length - count)) {
    top_topics_scroll.querySelector('#to_right').classList.add("fadeToNone");
  } else {
    top_topics_scroll.querySelector('#to_right').classList.remove("fadeToNone");
  };

  list.style.marginLeft = position + 'px';
};

//Для мобильных
let xTouch = null;
let x2Touch = null;

list.ontouchstart = function(e) {
  let firstTouch = e.touches[0];
  xTouch = firstTouch.clientX;
};

list.ontouchend = function(e) {
  let lastTouch = e.changedTouches[0];
  x2Touch = lastTouch.clientX;
  list.style.marginRight =  0 + 'px';
  //условие минимального свайпа
  if (Math.abs(xTouch - x2Touch) >= 72) {
    //условие свайпа вправо
    if (xTouch - x2Touch > 0) {
      // сдвиг вправо
      position -= width * 2;
      // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
      position = Math.max(position, -width * (listElems.length - count));
      list.style.marginLeft = position + 'px';
    } else {
      //условие свайпа влево
      // сдвиг влево
      position += width * 2;
      // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
      position = Math.min(position, 0);
      list.style.marginLeft = position + 'px';
    }
  } else {
    list.style.marginLeft = position + 'px';
  }
};

list.ontouchmove = function(e) {
	let newCoordX = e.changedTouches[0].clientX;
  if(Math.abs(newCoordX - xTouch) < (width * 2)){
    //условие свайпа вправо
    if ((newCoordX - xTouch) < 0) {
      // сдвиг вправо
      if (position === -width * (listElems.length - count)) {
        list.style.marginRight = Math.min(24, (-newCoordX + xTouch) ) + 'px';
      } else {
        list.style.marginLeft = position + (newCoordX - xTouch) + 'px';
      }
    } else {
    //условие свайпа влево
      // сдвиг влево
      if (position === 0) {
        list.style.marginLeft = Math.min(24, newCoordX - xTouch) + 'px';
      } else {
        list.style.marginLeft = position + (newCoordX - xTouch) + 'px';
      }
    }
  }
};