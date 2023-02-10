

/*const calculo = (cantidad) => {
    let arreglo = [];
    let unicosElementos = [];
    let almacenador = [];
    let contador = 1;
    
    for (let i = 0; i < cantidad; i++) {
       let numero = Math.round(Math.random() * 999)+1
       arreglo.push(numero)
      
    }
    let arregloSort = arreglo.sort()

    for ( let i = 0; i< arregloSort.length; i ++ ){
        if(arregloSort[i+1] === arregloSort[i]){
            contador++;
        }else {
            unicosElementos.push(arregloSort[i]);
            almacenador.push(contador);
            contador = 1;
        }
    }

    let numero = {}

    for(let j= 0; j < unicosElementos.length; j++){
        numero[unicosElementos[j]]=almacenador[j]        
    }

    return numero
}


process.on('message', (msg) => {
    process.send(calculo(msg))
    process.exit();
})*/
