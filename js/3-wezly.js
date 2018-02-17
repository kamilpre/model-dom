'use strict';
var pierwszyDiv = document.getElementById('parFirst');
//console.log(pierwszyDiv);
//console.log(pierwszyDiv.parentNode);
//console.log(pierwszyDiv.parentElement);

//console.log(pierwszyDiv.childNodes);
//console.log(pierwszyDiv.childNodes[3]);
//console.log(pierwszyDiv.children);
//
//console.log(pierwszyDiv.firstChild);
//console.log(pierwszyDiv.lastChild);

//var pierwszyChild = pierwszyDiv.childNodes[0];
//console.log(pierwszyChild);
//console.log(pierwszyChild.nextSibling);


var childNodesDiva = pierwszyDiv.childNodes;

childNodesDiva.forEach(function (element){
    if(element.nodeType == 3) {
        console.log(element);
    }
});