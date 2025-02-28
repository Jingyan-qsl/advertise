
const buttons = document.querySelectorAll('.btn2');
const id1 = document.getElementById('id1');
const id2 = document.getElementById('id2');
const id3 = document.getElementById('id3');
const id4 = document.getElementById('id4');
const id5 = document.getElementById('id5');
const img = document.querySelectorAll('.main-subnav2 img');
const btn1 = document.querySelectorAll('.main-left1-switch button');
const btn2 = document.querySelectorAll('.foot-left-switch button');
const btnBoxes1 = document.querySelectorAll('.main-left1-button');
const btnBoxes2 = document.querySelectorAll('.foot-left-button');
const subnavBoxes = document.querySelectorAll('.subnavBox-text1');

subnavBoxes[0].classList.add('active');
buttons[0].classList.add('active');
img[0].classList.add('active');
btn1[0].classList.add('active');
btn2[0].classList.add('active');
btnBoxes1[0].classList.add('active');
btnBoxes2[0].classList.add('active');

buttons.forEach(button => {
  button.addEventListener('click', function () {
    const index = button.getAttribute('data-index');
    buttons.forEach(button => button.classList.remove('active'));
    subnavBoxes.forEach(box => box.classList.remove('active'));
    img.forEach(img => img.classList.remove('active'));

    subnavBoxes[index].classList.add('active');
    img[index].classList.add('active');
  });
  buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
      if (index === 0) {
        id1.classList.add('active');
      } else if (index === 1) {
        id2.classList.add('active')
      } else if (index === 2) {
        id3.classList.add('active')
      } else if (index === 3) {
        id4.classList.add('active')
      } else {
        id5.classList.add('active')
      }
    });
  });
});
btn1.forEach(button => {
  button.addEventListener('click', function () {
    const index = button.getAttribute('data-index');
    btn1.forEach(button => button.classList.remove('active'));
    btnBoxes1.forEach(box => box.classList.remove('active'));

    btn1[index].classList.add('active');
    btnBoxes1[index].classList.add('active');
  });
});
btn2.forEach(button => {
  button.addEventListener('click', function () {
    const index = button.getAttribute('data-index');
    btn2.forEach(button => button.classList.remove('active'));
    btnBoxes2.forEach(box => box.classList.remove('active'));

    btn2[index].classList.add('active');
    btnBoxes2[index].classList.add('active');
  });
});

