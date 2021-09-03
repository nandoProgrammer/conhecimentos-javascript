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
let num2 = 2;

//Constantes
const num3 = 3;


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


//Função anônima em callback
function callbackAnonimo(func){
   return func();
} 

callbackAnonimo(function(){
	console.log("função anônima");
});

//Valor default em argumento de função
const myFunc = function(a, b = 2){
  return a + b;
}


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

//Datas
let now = new Date();
console.log(now);



//Laços

//for
for(let i = 0; i < 5; i ++){
	console.log(i);
}

//while
let j = 0;

while(j<5){
   console.log(j);
   j++;
}


//do while