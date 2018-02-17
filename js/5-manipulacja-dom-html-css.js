'use strict';
var mainHeader = document.getElementById('main-header'); // przypisujemy naglowek strony do zmiennej
mainHeader.innerHTML = 'Treść nagłowka'; // dodajemy treść do nagłowka

mainHeader.outerHTML = "<p>Treść nagłówka</p>";

var link = document.getElementsByClassName('link')[0]; // przypisujemy pierwszy link do zmiennej

link.href = 'http://akademia108.pl'; //nadpisujmey atrybut href w linki

link.className = 'nowa-klasa'; // nadpisuje nazwe klase w linku

link.classList.add('nowa-nowa-klasa'); // dodajemy nazwe klas    console.log(link.classList);

link.style.backgroundColor = 'yellow';

