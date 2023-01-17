// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  //var arrayejemplo = [2,"ASda",true] un array es una caja contenedora que contiene elementos de cualquier tipo
  //       clave/key    0   1     2     estos elementos estan separados por una y estan ordenados porque tienen posiciones 
  //       Las claves/key empiezan desde 0
  // arrayejemplo.length === 3 me dice cuantos elementos tiene el array empieza a contar desde 1
  return array[0];
}

//console.log(devolverPrimerElemento([1,3,4]))


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  
  /* var array = ["jorge", true,   4564];
     key/clave      0        1       2
     array.length ===    3

  array.length - 1 === 3 - 1 === "2" es la ultima posicion del array */

  return array[array.length-1]; //array.lenght-1 con esto obtengo un numero entero
                                // de la resta de la cantidad de elementos q contiene el array - 1, q me daria la ultima key/clave,
                                //posicion del array

}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array === la cantidad de elementos q tiene el array
  // Tu código:
  return array.length; //regla memotecnica .length = "gth" ---> gallina tiene huevo
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var nuevo = [];
  
    for (i = 0; i < array.length; i++) {
      nuevo.push(array[i] + 1);          //array[i]+1  con esto obtengo un elemento del array y le sumo 1
    } 

    return nuevo;
  
    //Alternativa sin crear otro array o sea modificando el array que recibo como argumento en la funcion
  /*   for(var i=0; i<array.length;i++){
      array[i] = array[i] +1;
   }
   return array; */
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento); //push agrega el elemnto al final del array
  return array; 

}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);  //unshiift agrega el elemento al comienzo del array
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  return palabras.join(' '); //(' ') uso esto para que una las palabras con un espacio entre los elementos
}                            //('') si hubiera echo esto devolveria 'Helloworld!'    

//console.log(dePalabrasAFrase(['Hello', 'world!']))


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for (var i= 0 ; i < array.length; i++){
    if(array[i] === elemento){
      return true;
    } 
  }
  return false;

  //Alternativa 
  /* if(array.includes(elemento)){
    return true;
  }
    return false; */

}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
var suma = 0; // variable suma es la varible donde guardo la suma empieza en 0; suma es un numero

for (var i = 0; i<numeros.length; i++){
  suma = suma + numeros[i]; //>>> es lo mismo que suma += numeros[i]
}

return suma;

}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
//  var suma = 0;
 
 
//   for(i=0; i<resultadosTest.length; i++){
//   suma = suma + resultadosTest[i];
//   }  
//   return suma/resultadosTest.length;

 prom = agregarNumeros(resultadosTest) / resultadosTest.length; //uso la funcion anterior que es agregarNumeros!!
 return prom;
 
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var mas = 0; //empiezo declarando la variable mas que empieza con 0 como el numero mas grande
  for(i=0; i<numeros.length; i++){
    if(numeros[i] > mas){
      mas = numeros[i];
    }
  } 
  
  return mas;
  //alternativa
  //return Math.max(...numeros) // ... porque es array

}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  
  //arguments lo tomo como un array
  
  var acumulador = 1; //el acumulador empieza en 1 porque es una multiplicacion
  if(arguments.length === 0){
    return 0
  } else if (arguments.length === 1){
    return arguments[0]; //con esto devuelvo el primer elemento del array
  }else { 
    for (var i = 0; i < arguments.length; i++){
      acumulador = acumulador * arguments[i];
    }
  }

  return acumulador;  

  
  //alternativa
  /* if(arguments.length < 1){
    return 0;
  }

  var total = 1;
  for(i=0; i<arguments.length; i++  ){
    total = total * arguments[i];
  }
  return total; */
}

//console.log(multiplicarArgumentos(1,8))


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var contador = 0 // contador que usa para contar los valores mayores a 18, empieza en 0
  for(i=0; i<arreglo.length; i++){ //recorro el arreglo con un for
    if(arreglo[i] > 18 ){ //accedo a una posicion del array y tomo un valor y pregunto si es mayor a 18
      contador += 1;          //si es mayor aumento en 1 el contador
    }
  } 
  return contador;
}
//console.log(cuentoElementos([4,6,18,156,654,654,69,]))

function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  if(numeroDeDia === 1 || numeroDeDia ===7){
    return "Es fin de semana";
  } 
  else {
    return "Es dia Laboral";
  }
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aqui
  var str = n.toString(); //paso de entero a string para poder tomarlo como array 

  if(str[0] === "9"){
    return true;
  } 
  else {
    return false;
  } 
  
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  

  for (i=0; i < arreglo.length; i++){
     
      if (arreglo[0]  === arreglo[i+1]){

        return true;

      }
      
    }
  

  return false;  
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var nuevoarray = []; 
  for (i=0; i<array.length; i++){
    if(array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre"){
      nuevoarray.push(array[i]);

    }
  }

    if(nuevoarray.includes("Enero") && nuevoarray.includes("Marzo") && nuevoarray.includes("Noviembre")){
      return nuevoarray;
    } else {
      return "No se encontraron los meses pedidos";
    }



}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var nuevoarray = []; 
  for (i=0; i<array.length; i++){
    if(array[i] > 100){
      nuevoarray.push(array[i]);
    }
  }

  return nuevoarray;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  
  
  //numero no es un array!!!! es un numero 
  /* var nuevoArray = [];
  var suma = numero // guardo el primer numero para sumarle 2
  for(var i=0; i<10; i++){ //hasta i<10 porque me dice hasta 10 veces
  suma = suma + 2  //numero =  numero + 2 si hago esto no guardo nunca el valor!!!
    if(suma===i){ //pongo la condicion de si el valor de la suma y la cantidad de iteraciones coinciden,
      break;  //debe interrumpirse la ejecución por mas que no se halla llegado a las 10 iteraciones; rompo el for uso break
    }  
       else {
          nuevoArray.push(suma);
       }                     
    
  }
    //aqui es donde salgo del for con break
  if(i<10){
    return "Se interrumpió la ejecución";
  }

  return nuevoArray; */
  var arrayNumeros = [];
  var suma = numero;
  for (var i=0; i<10; i++){ //porque va hasta 10
    suma = suma + 2;
    if(suma === i ){
      break;
    }else {
      arrayNumeros.push(suma);
    }
  }
  if (arrayNumeros.length < 10){
    return "Se interrumpió la ejecución";
  }else {
    return arrayNumeros;
  }
}



function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
 
 //numero = 8 
 //nuevoArray =  [ 10, 12, 14,  16,  18,       20,  22,  24,  26 ]
 // key            0    1   2    3    4   5    6     7    8   9
  
  
  
  var nuevoArray = [];
  var suma = numero // guardo el numero recibido por argumento en la variable suma, para luego sumarle 2
  for(var i=0; i<10; i++) //i < 10 porque el limite es 10
   {
    if(i === 5)  {  // cuando la itercacion es 5 salto a la siguiente es decir no sumo el numero + 2
      continue;
    }
     else{
      suma = suma + 2
      nuevoArray.push(suma);
         }  
  
  }
  return nuevoArray;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
