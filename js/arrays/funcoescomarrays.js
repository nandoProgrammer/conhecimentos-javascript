/****  Funções usando arrays  ****/



//filter
const numeros = [1,2,3,4,5,6,7,8,9,10];

const filtraPares = function(item){
   return item % 2 == 0;
};

const pares = numeros.filter(filtraPares);





//map
const dobraValor = function(item){
   return item * 2;
}

const valoresDobrados = numeros.map(dobraValor);

//reduce
const reducer = function(acumulador, item){
  return acumulador + item;
}

const valoresSomados = numeros.reduce(reducer);





//Remover itens repetidos em um array
const itensRepetidos = [1,2,3,4,1,4,5,5,4,3];
const removeRepetidos = new Set(itensRepetidos);
const semItensRepetidos = [...removeRepetidos];





//Encontrar um item em um objeto
const obj = [{index: 0, content: 'Hello World'}, {index: 1, content: 'Olá Mundo'}];

function getHelloWord(item){
    return item.content === 'Hello World';
}

console.log(obj.find(getHelloWord));






