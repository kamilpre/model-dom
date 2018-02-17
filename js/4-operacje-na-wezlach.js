'use strict';
var istniejacyWezel = document.getElementById('parFirst').children[3];


var newElement = document.createElement('p'); //stwórz nowy element p
//console.log(newElement);

var newElementContent = document.createTextNode('To jest nowy paragraf'); //stwórz nowy tekst dla elementu p

newElement.appendChild(newElementContent); //dodaj tekst do elementu p

istniejacyWezel.appendChild(newElement);

istniejacyWezel.removeChild(newElement);

var parFirstDiv = document.getElementById('parFirst');
parFirstDiv.replaceChild(newElement, istniejacyWezel);  //zamien dugi link w paragraf

//var allLinks = document.querySelectorAll('a'); // przypisz do zmiennej tablice ze wszsytkimi linkami
var allLinks = document.getElementsByTagName('a'); // drugi sposob
//console.log(allLinks);
//Array.form("nodeList");

for (var i = 0; i < allLinks.length; i++){ // iteracja po tablicy
    var br = document.createElement('br'); // stworz element br
//    console.log(allLinks[i].parentNode);
    allLinks[i].parentNode.insertBefore(br, allLinks[i].nextSibling); // dodaje br po kazdym linku
    allLinks[i].removeAttribute('class'); //usuń atrybut klasy
}