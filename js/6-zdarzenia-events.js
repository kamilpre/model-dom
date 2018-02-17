"use strict";

//var secondLink = document.getElementsByTagName('a')[1]; //tworzymy zmienna z drugim linkiem
//
function alarm(e) {
    'use strict';
    e.preventDefault(); //zapobiegamy domyslnej akcji
    console.log('kliknięto kolejny link');
    thirdLink.style.backgroundColor = 'red';
    console.log(e.type);
}
//
//secondLink.onclick = alarm; // wywolujemy fukncje alarm() na frugim linku po klikniciu


var thirdLink = document.getElementsByTagName('a')[2]; //tworzymy zmienna z trzecim linkiem

thirdLink.addEventListener('click', alarm); 

thirdLink.removeEventListener('click', alarm);


var mainHeader = document.getElementById('main-header'); //przypisujemy nagłówek do zmiennej

//function resize(e) {
//    if (e.type == 'mouseover') {   // sprawdzanie typu zdarzenia
//        mainHeader.style.fontSize = '70px';  // zmienia wielkosc fonta po najechaniu
//    } else {
//        mainHeader.style.fontSize = 'inherit';  // przywróć domyślną skalę po zjechaniu
//    }
//}
//mainHeader.onmouseover = resize;
//mainHeader.onmouseout = resize;

function klikHeader() {
    console.log('kliknąłeś w header');
}
document.getElementsByTagName('header')[0].onclick = klikHeader; //wywalj fukncje na elemencie header

function klikH1(e) {
    e.stopPropagation(); // odkomentowac, zeby pokazac zatrzymanie propaginacji
    console.log('kliknałęś w h1');
}

document.getElementsByTagName('h1')[0].onclick = klikH1;  // wywolaj funkcje na elemencie h1