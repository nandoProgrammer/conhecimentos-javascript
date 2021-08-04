/**
**
Básico
**
**/

//Mensagens no Console e Alerts
console.log('Olá Mundo');
console.log('%c Olá Mundo', 'color: blue; font-size: 40px');
console.warn('Exibe mensagem de erro');
console.assert("a" == "a", true);
console.trace();

console.group('My Group');
console.log('one');
console.log('two');
console.groupEnd('My Group');

console.table(['item 1', 'item 2']);

console.time('Log Time');
setTimeout(() => {
   console.timeEnd('Log Time');
}, 3000);


alert('Olá Mundo');
prompt("Digite um valor");





//Variáveis
var num1 = 1;

//Constantes
const num2 = 2;


//Condicionais
if(num1 == 1){

    console.log('É igual a 1');

}else if(num1 > 1){

    console.log('É maior que 1');

}else{

    console.log('É igual a:' + num1);

}


//Função Anônima
const funcaoAnonima = function(){
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

//Eventos
//onClick
//

//pegar o valor de um input 
const button = document.querySelector('button');

button.onclick = function(){
	var getValueText = document.querySelector('input[name=texto]').value;
	console.log(getValueText);
}





/**
**
Arrays
**
**/


//Array simples
var arr = [1,2,3,4];

//Acessando item do array
arr[0];

//Redeclarando item de array 
arr[0] = 5;

//Tamanho do array
arr.length;

//Acessando último índice
arr[arr.length -1];

//Iterar array
arr.forEach(function(item, index){
   
   console.log(item);

});

//Adicionar um item ao final do array
arr.push('novo item');

//Remover o item do final do array
arr.pop();

//Adicionar um item ao inicio do array
arr.unshift('novo item');

//Remover o item do início do array
arr.shift();

//Remover um item pela posição do array
arr.splice(0, 1);

//Remover mais de um item pela posição do array
var pos = 0, n = 2;
arr.splice(pos, n);

//Copiar array
const novoArr = arr.slice();

//filter
const numeros = [1,2,3,4,5,6,7,8,9,10];

const filtraPares = function(item){
   return item % 2 == 0;
};

const pares = numeros.filter(filtraPares);


//Remover itens repetidos em um array
const itensRepetidos = [1,2,3,4,1,4,5,5,4,3];
const removeRepetidos = new Set(itensRepetidos);
const semItensRepetidos = [...removeRepetidos];


//Timming Events

const myFunction = function(){
    console.log('ok');
};

//Delay de 1 segundo
const delay = setTimeout(myFunction, 1000);

//Executar a cada 1 segundo
const repeatInterval = setInterval(myFunction, 1000);

//Evitar que aconteça o setTimeout
clearTimeout(delay);

//Evitar que aconteça o setInterval
clearInterval(repeatInterval);






















