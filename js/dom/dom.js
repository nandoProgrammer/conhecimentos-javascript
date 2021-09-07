/**
**
DOM
**
**/


//Selecionar elementos que possuem uma classe
//document.getElementsByClassName('nomedaclasse');

//Selecionar um elemento que possui um id
//document.getElementById('nomedoid');

//Selecionar um elemento na árvore (DOM)
//document.querySelector('elementoPai elementoFilho');
//document.querySelector('#elemento');

//Selecionar todos os elementos irmãos na árvore (DOM)
//document.querySelectorAll('.elementoPai .elementoFilho');
//document.querySelectorAll('.elemento');


//injetar HTML em um elemento selecionado
document.querySelector('.injetarConteudo').innerHTML = "<b>Olá Mundo</b>";

//manipular estilo de um elemento
document.getElementById("quadrado").style.backgroundColor = "#000";

//Adicionar Classe a um elemento
document.getElementById("quadrado").classList.add('nomedaclasse');

//Remover Classe de um elemento
document.getElementById("quadrado").classList.remove('nomedaclasse');

//Setar attribute em div
document.getElementById("quadrado").setAttribute('nomedoatributo', 'null');

//Pegar attribute de div
document.getElementById("quadrado").getAttribute('nomedoatributo');

//Remover attribute de div
document.getElementById("quadrado").removeAttribute("nomedoatributo"  );


//Eventos

//onClick
//onFocus
//onKeyPress
//onLoad
//onMouseOver
//onMouseOut
//onSubmit
//addEventListener

//pegar o valor de um input 
const button = document.querySelector("button");

button.onclick = function(){
	var getValueText = document.querySelector("input[name=texto]").value;
	console.log(getValueText);
}


//pegar o event 
button.onclick = function(e){
  console.log(e);
}

//addEventListener
/*
button.addEventListener("click", function(){console.log("clicado")}, true);
*/