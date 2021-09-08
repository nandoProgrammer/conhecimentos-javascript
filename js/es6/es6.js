const myfunc = () => 1 + 2;

//Spread Operator
const functionSpread = (...values) => {
    for(let i = 0; i < values.length; i++){
       console.log(values[i]);
    }
}

functionSpread('spread', 1, 2, 3, 'four', 'five');

//Destructuring
const destructuring = ['one'] ['two'] = [1] [2];

//Promise
const logFunction = (msg) => {
	setTimeout(console.log(msg), 1000);
};

let FuncaoAssincrona = () => {
	return new Promise(function(resolve, reject){
        const res = true;

        if(res){
            resolve(logFunction('Chamando Promise'));
        }else{
            reject();
        }
	});
}

FuncaoAssincrona()
.then(function(resposta){
	return resposta;
})
.catch(function(erro){
	console.warn(erro);
});



//Request
let requestFunction = (url) => {
    return new Promise(function(resolve, reject){

      let req = new XMLHttpRequest();
	  req.open("GET", url);
	  req.send(null);
      
      req.onreadystatechange = function() {
          if(req.readyState === 4){
			 if(req.status === 200){
				resolve(JSON.parse(req.responseText));
			 }else{
				reject("erro no servidor");
			 }
	      }
      }
    });
};


requestFunction("https://api.github.com/users/devfodex")
.then(function(resposta){
	console.log(resposta);
})
.catch(function(erro){
    console.warn(erro);
})



//Fetch
fetch("https://api.github.com/users/devfodex")
.then(function(resposta){
	return resposta.json();
})
.then(function(data){
    console.log(data);
})
.catch(function(erro){
	console.warn(erro);
})

