// No cambies los nombres de las funciones.

const { map } = require("@11ty/eleventy/src/TemplateGlob")

function crearGato (nombre, edad) {
  // Crear un nuevo objeto con la propiedad "nombre" y el valor definido como el argumento "nombre".
  // Agrega una propiedad al objeto con el nombre "edad" y usa el valor definido en el argumento "edad"
  // Agrega un método (funcion) llamado "meow" que devuelva el string "Meow!"
  // Devuelve el objeto
  // Tu código:
  
  //Tengo un array donde las key/clave son los indices del array!!!
  // var arrays = [3,“auto",false,[1,2],4.2]; 
  //  key/clave =  0    1     2     3     4

  //Creacion de un objeto; en un objeto las key/clave son las propiedades del objeto
  // var objetoCreado = { nombre: "Pedro", edad: 18 };
  //  key/clave           key               key      
  //for (var clave in objetoCreado)  for para recorrer un objeto
  
  
  var objeto = {
    nombre: nombre,
    edad: edad,
    meow: function(){
      return "Meow!";
    }
  }
  return objeto;

}

function agregarPropiedad (objeto, property) {
  // Agrega una propiedad al objeto (argumento "objeto") con el valor `null`
  // Devuelve el objeto
  // NOTA: El nombre de la propiedad no es "propiedad", el nombre es el valor del argumento llamado "property" (una cadena/string)
  // Tu código:
  //me pide agregar una propiedad llamada "property" con valor null al objeto llamado "objeto"
  
  /* para explicarme muuy por encima puedo decir que el dot notation 
o sea  objeto.propiedad  lo uses cuando sepas exactamente el nombre real de la propiedad y solo si es asi ;
ejemplo:me dicen que determinado objeto tiene una propiedad que se llama "altura"
entonces yo si puedo decir obj.altura  y eso me dará el valor que guarde esa prop. Golaso

Pero si a mi me llega un argumento o cualquier otra variable REPRESENTATIVA pero que no es el nombre literal de la propiedad,
ahi cagamos fuego ahi tendriamos que usar :   objeto[property] 

otra manera tambien es si tenes el nombre literal ademas del dot notation podrias usar tambien el braket solo que con un cambio
objeto["altura"] con las comillas y es lo mismo que objeto.altura */
  
 
/* Valor desconocido :  braquet notation ( trabajas con la referencia a ese valor ) 
Valor conocido: dot notation o braket mas comillas internas */


  objeto[property] = null;
  return objeto;
}

function invocarMetodo (objeto, metodo) {
  // "metodo" es una cadena que contiene el nombre de un método (funcion) en el objeto
  // Invoca ese método
  // Nada necesita ser devuelto ("returned")
  // Tu código:

  //un metodo es una funcion dentro de un objeto!!
  //me dicen que dentro del objeto tengo una funcion("metodo") que se llama metodo
  objeto[metodo](); //asi es como invoco un metodo de una funcion!!
}

function multiplicarNumeroDesconocidoPorCinco (objetoMisterioso) {
  // "objetoMisterioso" tiene una propiedad llamada "numeroMisterioso"
  // Multiplica el numeroMisterioso por 5 y devuelve el producto
  // Tu código:
  //el nombre del objeto es objetoMisterioso
  //numeroMisterioso es una propiedad del objetoMisterioso
  
  //puedo usar dot notation porque se exactamente el nombre de la propiedad
  
  return objetoMisterioso.numeroMisterioso * 5; 
  
  
  //alternativa
  /*  var a = objetoMisterioso.numeroMisterioso * 5;
  return a; */

  //puedo usar tambien bracket notation pero la usos con comillas internas
  
  //return objetoMisterioso["numeroMisterioso"] * 5;
}

//prueba
/* var objetoMisterioso={
  numeroMisterioso: 9
}
var a = objetoMisterioso.numeroMisterioso * 5;
console.log(a) */

function eliminarPropiedad (objeto, unaPropiedad) {
  // Elimina la propiedad de objeto cuyo nombre está pasado por el parametro unaPropiedad
  // tip: tenes que usar bracket notation
  // Devuelve el objeto
  // Tu código:
  
  delete objeto[unaPropiedad]; //se lo usa sin comillas porque estamos haciendo referencia a un elemento
  return objeto;               // si ya sabemos el nombre de la propiedad se usa con comillas 
}



function nuevoUsuario (nombre, email, password) {
  // Crea un nuevo objeto con las propiedades coincidiendo con los argumentos que se pasan a la función
  // Devuelve el objeto
  // Tu código:
  var objeto = {
    nombre: nombre,
    email: email,
    password: password
  }
  return objeto;
}

function tieneEmail (usuario) {
  // Devuelve "true" si el usuario tiene un valor definido para la propiedad "email"
  // De lo contratio, devuelve "false"
  // Tu código:
  
  //usuario es un objeto
  //usuario tiene una propiedad email
  //si la propiedad email tiene un valor devolver true, de lo contrario false
  
  if(usuario.email){
    return true;
  } else {
    return false;
  }
  
  //alternativa
  /* if(usuario["email"]){
    return true;
  } else {
    return false;
  } */
}
  //pruebas con console.log
 /* var usuario = {email: null}
 
 console.log(tieneEmail(usuario)) */

function tienePropiedad (objeto, propiedad) {
  // Devuelve "true" si el objeto (parámetro "objeto") tiene una propiedad (key) cuyo nombre es igual al valor del argumento "propiedad"
  // "propiedad" es un string
  // De lo contrario, devuelve "false"
  // Tu código:
  
  //tengo un objeto
  //me preguntan si objeto tiene una propiedad que me pasan por argumento
  //quiere decir que no conozco la propiedad -------> entonces uso brackets notation
  
  /* if(objeto[propiedad]){
    return true;
  }
  return false;
 */

  //alternativa
  //return objeto.hasOwnProperty(propiedad); //si fuera un array usaria include!!

  //alternativa

// var array = ["casa","perro","gato"];
// key/clave     0       1        2

//var objeto = { metros : 5 , color: azul , tamaño: grande}
//key/clave      *****        *****          *****         las key/clave son las propiedades del objeto

for(clave in objeto){       //uso un for in para recorrer las clave (propiedades) del objeto
  if(clave === propiedad){  //for in recibe un nombre para las propiedad que puede ser clave o key o lo que quiera
    return true;            //y tambien recibe el nombre del objeto en el cual voy a recorrer sus propiedades
  }   else  {               //en el if pregunto si en todas las claves(propiedades del objeto) tengo una propiedad
                            // igual a la que me pasar por argumento    
    return false;
    }
}

}


function verificarPassword (usuario, password) {
  // Comprueba si la "password" enviada coincide con la propiedad "password" del objeto "usuario"
  // Devuelve "true" si coinciden
  // De lo contrario, devuelve "false"
  // Tu código:
  
  //tengo un objeto que se llama usuario
  //el objeto usuario tiene una propiedad que se llama password
  //me preguntan si la password que recibo por argumento es igual al valor de la propiedad password del objeto usuario
  
 /* var usuario ={
  password: 789
 }

 function verificarPassword(usuario,789) ---> true porque el argumento de la funcion 789 coincide con el valor de la propiedad password del objeto usuario */
 //function verificarPassword(usuario,123) ---> false porque el argumento de la funcion 123 no coincide con el valor de la propiedad password del objeto usuario

  /* if(usuario["password"] === password){
    return true;
  } else {
    return false;
  }
   */

  //alternativa uso dot notation porque conozco el nombre de la propiedad
  /* if(usuario.password === password){
    return true;
  }
  return false;
 */
  //alternativa con for in
  for(key in usuario){     //key son las propiedades del objeto usuario ; usuario es el nombre del objeto
    if(usuario.password === password){  
      return true;
    }
      return false;
    }
}

function actualizarPassword (usuario, nuevaPassword) {
  // Reemplaza la contraseña existente en el objeto "usuario" con el valor de "nuevaPassword"
  // Devuelve el objeto
  // Tu código:
  
  //tengo un objeto que se llama usuario
  //usuario tiene una propiedad que se llama password
  // me estan pidiendo que cambie el valor de la propiedad password por nuevaPassword valor que recibo por argumento
  
  //con bracket notation
 /*  usuario["password"] = nuevaPassword; 
  return usuario; */

  //alternativa con dot notation
  usuario.password = nuevaPassword; 
  return usuario;
  
}

function agregarAmigo (usuario, nuevoAmigo) {
  // "usuario" tiene una propiedad llamada "amigos" que es un array
  // Agrega "nuevoAmigo" al final de ese array
  // Devuelve el objeto "usuario"
  // Tu código:
  ////si uso btracket notation uso ""!!!
  
  //tengo un objeto que se llama usuario
  //usuario tiene una propiedad que se llama amigos que es una array
  //me piden que agregue nuevoAmigo que recibo por argumento al array amigos
  
  usuario.amigos.push(nuevoAmigo); //con dot notation 
  //usuario["amigos"].push(nuevoAmigo); //con bracket notation
  return usuario;
}

function pasarUsuarioAPremium (usuarios) {
  // "usuarios" es un array de objetos "usuario"
  // Cada objeto "usuario" tiene la propiedad "esPremium"
  // Define cada propiedad "esPremium" de cada objeto como "true"
  // Devuelve el array de usuarios
  // Tu código:
  
  //  k   usuarios [
  /*  0   usuario = {esPremium: false},
      1   usuario = {esPremium: false},
      2   usuario = {esPremium: false}
    ]
   */

   for(var i=0; i < usuarios.length; i++){
      usuarios[i].esPremium = true;
  }
  return usuarios;
}

function sumarLikesDeUsuario (usuario) {
  // "usuario" tiene una propiedad llamada "posts" que es un array
  // "posts" es un array de objetos "post"
  // Cada objeto "post" tiene una propiedad llamada "likes" que es un entero (int/integer)
  // Suma todos los likes de todos los objetos "post"
  // Devuelve la suma
  // Tu código:
  
  //se que usuario es un objeto que tiene una propiedad llamada posts que es un array
  
  //  usuario ={
  //  posts: [post={likes: 9} ,      post={likes: 15},         post={likes: 2}]
  //  key         0                         1                        2
  //}
  
  var sumaLikes = 0;
  for(var i=0; i < usuario.posts.length; i++){
    sumaLikes = sumaLikes + usuario.posts[i].likes;
  }
  return sumaLikes;

}

function agregarMetodoCalculoDescuento (producto) {
  // Agregar un método (función) al objeto "producto" llamado "calcularPrecioDescuento"
  // Este método debe multiplicar el "precio" del "producto" ("producto.precio" o "producto[precio]") y "porcentajeDeDescuento" para obtener el descuento
  // El método resta el descuento del precio y devuelve el precio con descuento
  // Devuelve el objeto "producto" al final de la función
  // Ejemplo:
  // producto.precio -> 20
  // producto.porcentajeDeDescuento -> 0.2 (o simplemente ".2")
  // producto.calcularPrecioDescuento() -> 20 - (20 * 0.2)
  // Tu código:
  //  var producto ={   
  //  precio: 20,              
  //  porcentajeDeDescuento:  0.2,
  //  calcularPrecioDescuento: function(){}
  //  }
  // Se llama metodos a las funciones dentro de objetos!!
  producto.calcularPrecioDescuento = function() {
    //return producto.precio - (producto.precio * producto.porcentadeDeDescuento); // cambio el producto por this; si no uso this y cambia el nombre del objeto ya tendria errores!!!
    return this.precio - ( this.precio * this.porcentajeDeDescuento );              //uso this porque significa que busco dentro del objeto producto alguna cosa en este caso una propiedad                       
   }                                                                                //el uso del this me sirve tambien si por ejemplo el objeto cambia de nombre de producto a elemento
    return producto;                                                                //a mi no me modificaria nada porque por mas nombre que tenga el objeto el this hace referencia a si mismo,
                                                                                   //es decir voy a buscar dentro del objeto tenga el nombre que tenga
}                                                                                  //el this reemplaza el nombre de quien le pertenece en ese momento a esa funcion 

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearGato,
  agregarPropiedad,
  invocarMetodo,
  multiplicarNumeroDesconocidoPorCinco,
  eliminarPropiedad,
  nuevoUsuario,
  tieneEmail,
  tienePropiedad,
  verificarPassword,
  actualizarPassword,
  agregarAmigo,
  pasarUsuarioAPremium,
  sumarLikesDeUsuario,
  agregarMetodoCalculoDescuento
}
