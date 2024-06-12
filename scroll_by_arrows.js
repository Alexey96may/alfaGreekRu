/* конфигурация */
let width = 156; // ширина картинки
let count = 4; // видимое количество изображений

let list = top_topics_scroll.querySelector('.last_post_list');
let listElems = top_topics_scroll.querySelectorAll('li');

let position = 0; // положение ленты прокрутки

top_topics_scroll.querySelector('#to_left').onclick = function() {
  // сдвиг влево
  position += width * count;
  // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
  position = Math.min(position, 0);
  list.style.marginLeft = position + 'px';
};

top_topics_scroll.querySelector('#to_right').onclick = function() {
  // сдвиг вправо
  position -= width * count;
  // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
  position = Math.max(position, -width * (listElems.length - count));
  list.style.marginLeft = position + 'px';
};
