/****  Básico  ****/


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

//Verificando se um item existe no array
1 in arr;

//Iterar array
arr.forEach(function(item, index){
   
   console.log(item);

});

//Inverter a ordem dos itens do array
arr.reverse();

//Adicionar um item ao final do array
arr.push('novo item');

//Remover o item do final do array
arr.pop();

//Adicionar um item ao inicio do array
arr.unshift('novo item');

//Remover o item do início do array
arr.shift();

//Encontrar um item em um array
arr.indexOf(3);

//Remover um item pela posição do array
arr.splice(0, 1);

//Remover mais de um item pela posição do array
var pos = 0, n = 2;
arr.splice(pos, n);

//Copiar array
const novoArr = arr.slice();

//Array multidimensional
const arrMultidimensional = [[1,2,3],[4,5,6]];

//Acessando item de array multidimensional
arrMultidimensional[0][0];

//Concatenando arrays (rest)
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 3, 4, 5];

//Imutabilidade
const arrConstante = [1,2,3];
arrConstante[0] = 4;
arrConstante[1] = 5;
arrConstante[2] = 6;