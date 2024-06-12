function clickBurger() {
  document.querySelector('#back_navbar').classList.toggle('active');

  if (document.querySelector('#img_sight').classList.contains('button_img_rotate')) {
    document.querySelector('#img_sight').classList.remove('button_img_rotate');
    document.querySelector('#img_sight').classList.add('button_img_rotate_left');
  } else {
    document.querySelector('#img_sight').classList.remove('button_img_rotate_left');
    document.querySelector('#img_sight').classList.toggle('button_img_rotate');
  }

}