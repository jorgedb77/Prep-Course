// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
  return nombre.charAt(0).toUpperCase() + nombre.slice(1); //charAt es para tomar la primera letra de nombre
                                                           //toUpperCase es para convertir la letra a mayusucula
                                                           //slice es para concatenar el resto del nombre
                                                           //es slice (1) porque quiero q desde esa letra tome el nombre
                                                           // 0 es la primera letra; 1 es la segunda letra.
  //Alternativa
  //return nombre[0].toUpperCase() + nombre.slice(1);     podria usar nombre[0] en vez de charAt(0)----> es lo mismo!!! 
}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
  cb();
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
  //callback es una funcion que pasamos como parametro en otra funcion
  //en este caso cb es una funcion que pasamos como parametro en la funcion operacionMatematica
  //cb es un funcion que recibe como parametros n1 y n2 que tambien son parametros de la funcion operacionMatematica
  return cb(n1,n2);

}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
  //primer opcion
  /* var suma = 0;
  for(var i=0; i<numeros.length;i++){
    suma = suma + numeros[i];
  }
  cb(suma); */

  //segunda opcion

  var suma = numeros.reduce(function(acc,elemento){  //reduce recibe una funcion , acc que es el acumuluador,
                                                    //elemento que son cada elementos del array; serian los i en un for
        return acc + elemento;
  },0);                                             // 0 es el valor inicial de acc  
  cb(suma);                                         // le paso el resultado de la suma a cb

}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
  for(var i=0; i < array.length; i++){
    cb(array[i]);
  }

  //segunda opcion con forEach
  // array.forEach(function(ele) {
  //   cb(ele);
  // });

}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
  //map recibe un array
  //map le aplica una funcion a cada uno de los elementos del array
  //map devuelve un nuevo array de la misma longitud del array que recibio
  
  /* var nuevoArray = array.map(function(ele) {
    return cb(ele);
  });
  return nuevoArray; */

  //Alternativa
  
  return array.map(function(ele){
    return cb(ele);
  })

}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
  
  //primera opcion
  /* var nuevoArray = [];
  for(let i = 0; i<array.length; i++) {
    if(array[i][0] === "a") {
      nuevoArray.push(array[i])
    }
  }
  return nuevoArray; */
  
  //filter recibe un array
  //filter recibe un condicion para poder filtrar los elementos del array
  //filter devuelve un nuevo array pero de longitud igual o menor que el array que recibio
  //la longitud del filter dependera de si los elementos del array cumplen con la condicion de filtrado
  //segunda opcion
  return array.filter(function(primeraLetra){ //la funcion filter devuelve un nuevo arreglo con las condiciones que nosotros queremos
      return  primeraLetra[0] == "a";  //si uso == "a" filtra las "a" mayusculas y minusculas; si uso === "a" filtro solo las "a" minuscula     
  });

}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
