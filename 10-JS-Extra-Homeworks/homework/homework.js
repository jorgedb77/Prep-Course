// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  //una matriz es un array de array
/*   var array = []
 for (let key in objeto) {  // key son las propiedades del objeto
  array.push([key,objeto[key]]) //objeto[key] son los valores de las propiedades (key) del objeto (que serian los numeros 1,2,3)
}
  return array;  */

  var arrayNuevo = []; // es el array que voy a devolver al final
  for (var clave in objeto){ // clave son las propiedades del objeto que serian D,B,C; Y objeto es el objeto que recibimos por parametro
    arrayNuevo.push([clave,objeto[clave]]) // pusheo dentro de arrayNuevo(que esta vacio) otro array
  }                                       //ese otro array tiene la forma [clave,objeto[clave]] === [clave,objeto[clave]]
                                          // clave son D,B,C y objeto.clave son los valores de las claves que son 1,2,3     
  return arrayNuevo;
}

 //para probar con console.log!!
 /* let objeto={
      D: 1,
      B: 2,
      C: 3 
 }
console.log(deObjetoAmatriz(objeto))  */
  
function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí

 /*  let objeto = {}
  for(let i=0; i<string.length; i++) {
    if()
    objeto[string[i]] = 1
  }
  return objeto; */
   
  //alternativa

  //tengo q devolver un objeto

/* ejemplo del problema
string a l a l
key    0 1 2 3
{a:2, l:2}  
 */
  
var objeto = {}; //objeto que devuelvo al final del problema
  
for(var i = 0; i < string.length ; i++){ //recorro el string que recibo como argumento
  if(objeto.hasOwnProperty(string[i])){  //pregunto si el objeto tiene la propieda string[i] que seria una letra del string 
    objeto[string[i]] = objeto[string[i]] + 1; // si la tiene aumento la propiedad un uno
  }
  else{
    objeto[string[i]] = 1;              // en caso de que el objeto no tenga todavia la propiedad, 
                                        //creo en el objeto la propiedad que seria la letra del string y le agrego el valor 1
   }
}
  return objeto;                        
}

/* let a = "adsjfdsfsfjsdjfhacabcsbajda"
console.log(numberOfCharacters(a))  */

function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let minusculas = ""
  let mayusculas = ""
  for(let i=0; i<s.length;i++){
    if(s[i] === s[i].toUpperCase()){
      mayusculas = mayusculas + s[i]
    }
    else{
      minusculas = minusculas + s[i]
    }
  }

  return mayusculas + minusculas;
}


//console.log(capToFront("sodsadadayHENRYAAAAAA"))


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí

  //pasar str a array
  /* var strToArray = str.split(' '); // (' ') me dice el corte del string, paso el string a un arreglo
  // "The Henry Challenge is close!" ------> ["The", "Henry", "Challenge", "is", "close!"
                                          // ele[0]  ele[1]     ele[2]     ele[3] ele[4]
  var arrayFinal = strToArray.map(function(ele){ //aplico map para agarrar cade elemento del array 
    return ele.split('').reverse().join('');     
    // ele.split --- lo divide
    // ["The"] --> ["T","h","e"]
    // ele.split.reverse----- lo da vuelta
    // ["T","h","e"] ----> ["e","h","T"]
    // ele.split.reverse.join---- lo junta
    // ["e","h","T"] ----> "ehT"
  })
  return arrayFinal.join(' ');  // join nos sirve para pasar de array a string */

  //Alternativa
  /* let palabras = str.split(" ") // pasar str a array
  let invertido = [] // array vacio para guardar 
  for (let i=0; i<palabras.length; i++) { //recorro el array
    invertido.push(palabras[i].split("").reverse().join("")) // en el array vacio voy a pushear 
  }
  return invertido.join(" "); // paso el array a string */

  //alternativa
  
  return str.split("").reverse().join("").split(" ").reverse().join(" ") 


}
 
//console.log(asAmirror("The Henry Challenge is close!"))

function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var numString = numero.toString(); // paso el numero (ej 986) a string y lo guardo en la variable numString 
                                     // numString = "986"

  // var resultado = numString.split('') //paso el numString = "986" a resultado = ["9","8","6"]
                                         // split divide cada string en un elemento y lo guarda en un array 

  // var resultado = numString.split('').reverse // da vuelta el array ["9","8","6"] ------> ["6","8","9"]
   
  var resultado = numString.split('').reverse().join(''); //.join une al array en un solo elemento ["6","8","9"] -----> "689"

  if(numString === resultado) {
     return "Es capicua";
     }
     else{
      return "No es capicua";
     }
       
}
/* let a = 686
console.log(capicua(a)) */

function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  //Por ejemplo
  //"Hola como estas bebe" -----------> "Hol omo ests ee"

 var difAbc = ""; //declaro un string vacio donde voy a guardar la nueva cadena con las letras a,b,c eliminados
 for (var i = 0; i < cadena.length ; i++){  //recorro la cadena con un for 
  if (cadena[i] === "a" || cadena[i] === "b" || cadena [i] === "c"){ //pregunto si algun elemento de la cadena es a,b o c
    continue;                                                        //si la cadena contiene a,b o c continua no hace nada 
  } else {                                                           //caso contrario que la cadena no contenga a,b o c  
    difAbc = difAbc + cadena[i]                                      //agrego ese elemento a difAbc 
         }

 }
  
 return difAbc;                                                       //retorno el string difAbc

}

//console.log(deleteAbc("Hola como estas bebe")) 

function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

/* Un array de elementos numéricos, usando una función de comparación:

var arr = [ 40, 1, 5, 200 ];
function comparar ( a, b ){ return a - b; }
arr.sort( comparar );  // [ 1, 5, 40, 200 ]  */

/* var nuevoArray2 = arr.sort(function(a,b){
  return a.length - b.length
})
 */

  var nuevoArray = arr.sort(function (a, b) {
    return a.length - b.length
  })
  return nuevoArray;

}
let a = ["You", "are", "beautiful", "looking"]
console.log(sortArray(a))


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
 
var coincidencias = []; //arreglo vacio donde guardo las coincidencias
for(var i = 0 ; i < arreglo1.length ; i++){ //recorro el primer arreglo con el indice i
  for(var j=0; j < arreglo2.length ; j++){  // recorro el segundo arreglo con otro indice el j
    if(arreglo1[i] === arreglo2[j]){        //pregunto si un elemento del arreglo1 es a alguno de todos los elementos del arreglo2
      coincidencias.push (arreglo1[i])      //si hay coincidencia agrego el elemento del arreglo1 o arreglo2 al arreglo coincidencias que empieza vacio
    }
  }
}
   
 return coincidencias;                      //retorno el arreglo coincidencias

}

/* let a = [4,2,3];
let b = [1,3,4];
console.log(buscoInterseccion(a,b)) */



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

