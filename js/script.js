'use strict'

const btnHeart = document.querySelector('.heart');
const str = document.querySelectorAll('.str');


document.addEventListener("DOMContentLoaded", function () {
    btnHeart.addEventListener('click', function () {
        btnHeart.classList.add('active');
        setTimeout(function () {
            str[0].style.display = 'none';
            str[1].style.display = 'block';
        }, 500);
    });
});

const btnSkazka = document.getElementById('ntn-for-3');
const imgAnim = document.getElementById('anim');

btnSkazka.addEventListener('click', function () {
    imgAnim.classList.add('active');
    setTimeout(function () {
        str[1].style.display = 'none';
        str[2].style.display = 'block';
    }, 500);
});