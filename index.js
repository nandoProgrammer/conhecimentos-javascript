/**
**
Básico
**
**/

//Logs e Alerts
//console.log('Olá Mundo');
//alert('Olá Mundo');
//prompt("Digite um valor");


//Variáveis
var num1 = 1;


//Condicionais
if(num1 == 1){

    console.log('É igual a 1');

}else if(num1 > 1){

    console.log('É maior que 1');

}else{

    console.log('É igual a:' + num1);

}


//Função Anônima
var funcaoAnonima = function(){
	console.log('ok');
}

funcaoAnonima();


//Função anônima em callback
function callbackAnonimo(func){
   return func();
} 

callbackAnonimo(function(){
	console.log("função anônima");
});




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


var button = document.querySelector('button');

button.onclick = function(){
	var getValueText = document.querySelector('input[name=texto]').val;
	console.log(getValueText);
}






















