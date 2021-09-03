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
//document.querySelctor('elementoPai elementoFilho');

//Selecionar todos os elementos irmãos na árvore (DOM)
//document.querySelctorAll('elementoPai elementoFilho');

//injetar HTML em um elemento selecionado
document.querySelector('.injetarConteudo').innerHTML = "<b>Olá Mundo</b>";

//manipular estilo de um elemento
document.getElementById("quadrado").style.backgroundColor = "#000";

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
const button = document.querySelector('button');

/*button.onclick = function(){
	var getValueText = document.querySelector('input[name=texto]').value;
	console.log(getValueText);
}*/


//pegar o event 
button.onclick = function(e){
  console.log(e);
}

//e.preventDefault