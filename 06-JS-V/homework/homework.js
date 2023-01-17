// No cambies los nombres de las funciones.

const { prototype } = require("@11ty/eleventy");

function crearUsuario() {
  // Crea una Clase de ES6 o una función constructor llamada "Usuario"
  // Debe aceptar un objeto "opciones" con las propiedades "usuario", "nombre", "email" y "password"
  // En el `contructor`, define el usuario, el nombre, el email y la contraseña
  // El `contructor` debe tener un método llamado "saludar" en su `prototype` que devuelva una string 'Hola, mi nombre es {{nombre}}'
  // {{nombre}} debe ser el nombre definido en cada instancia
  // Devuelve la clase
  // Tu código:

  //Clase con ES6
  /* class Usuario{ //las clases empiezan con mayuscula
    constructor(opciones){ // el constructor recibe el objeto opciones
      this.usuario = opciones.usuario; 
      this.nombre = opciones.nombre;
      this.email = opciones.email;
      this.password = opciones.password;
      this.saludar = function (){   //es un metodo
        return "Hola, mi nombre es " + this.nombre;
      }
    }
  }
  return Usuario; */

  //Creo clase con una function
  function Usuario(opciones) {
    this.usuario = opciones.usuario;
    this.nombre = opciones.nombre;
    this.email = opciones.email;
    this.password = opciones.password
  }
  Usuario.prototype.saludar = function () {          //creacion de un prototipo del metodo saludar
    return "Hola, mi nombre es " + this.nombre;      //todos los objetos creados a partir de la clase Usuario van a tener en comun 
                                                     //la funcion saludar

  }
  return Usuario;
}

function agregarMetodoPrototype(Constructor) {
  // Agrega un método al Constructor del `prototype`
  // El método debe llamarse "saludar" y debe devolver la string "Hello World!"
  // Tu código:
  //Constructor es una clase
  Constructor.prototype.saludar = function () { //todos los objetos creados a partir de la clase Constructor tendra el metodo saludar
    return "Hello World!";
  }
}

function agregarStringInvertida() {
  // Agrega un método al prototype de String que devuelva la misma cadena de caracteres, pero invertida.
  // El método debe llamarse "reverse"
  // Ej: 'menem'.reverse() => menem
  // 'toni'.reverse() => 'inot'
  // Pista: Necesitarás usar "this" dentro de "reverse"

  //me piden un metodo para todos los String
  //String es una clase global
  //me piden agregar un metodo al prototipo de string que se llama reverse
  //en conclusion todos los objetos creados a partir de la clase string tendran el metodo reverse

  String.prototype.reverse = function () { //creacion del prototype
    var stringInvertida = ''; //es la variable que empieza vacia y donde voy a ir guardano el string invertido
    for (var i = this.length - 1; i >= 0; i--) { //es un for invertido, this se refiere al string que viene por argumento
      stringInvertida = stringInvertida + this[i];
    }
    return stringInvertida;
  };

  //String.prototype.reverse = function (){
  //  return this.split('').reverse().join('');
  //}

  /* Son tres funciones las que hay que utilizar: 
  1. split: La string recibida pasa a ser un array que contiene uno por uno los caracteres del str.
  2. reverse: invierte el orden de estos caracteres.
  3. join: concatena todas las cadenas (unifica todo en un solo string). 
  */

  /*  Entonces. lo que pasa con las comillas en cada uno es....
  en el split.(" ") lo que va entre las comillas es el caracter seleccionado donde vos queres que se pase la tijera,
  vos pensa como si el string fuese una cinta con una frase escrita en ella,. .,
  y el split es ,.bueno ahora vamos a cortar esa cinta y la vamos a organizar en una caja subdividida ( array ) 
  ahi lo que vos le mandas entre las comillas es : quiero mandar el tijeretaso en donde ? en los espacios ? 
  para que me queden las palabras separadas?
  Quiero cortar en alguna vocal en particular para que se rompa todo ? 
  y eso te divide la frase en elementos de array 
  
  En el join lo que haces es el proceso inverso.. 
  vamos a decir que tenes los cachitos de cinta con palabras colgadas y los queres unir ,
  entonces lo que haces en las comillas es ponerle que queres que halle entre medio de los cachitos de cinta que pegas,
  Por ejemplo un espacio ,.,una  raya ., una barra cruzada ,. un punto,. 
  o algo mas compleo,. una palabra que se repita entre medio de todas las palabras que estas juntado ...etc
  
   */
}

// ---------------------------------------------------------------------------//
//Crea el constructor de la clase "Persona"
//Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio"
//Debe tener un método llamado "detalle" que nos devuelve un objeto con las propiedades de la persona y sus valores.
//Ej: { 
//   Nombre: 'Juan',
//   Apellido: 'Perez',
//   Edad: 22,
//   Domicilio: 'Saavedra 123'
//  }

class Persona { //declaro la clase
  constructor(nombre, apellido, edad, domicilio) { //declaro el constructor
    
      this.nombre = nombre,
      this.apellido = apellido,
      this.edad = edad,
      this.domicilio = domicilio,
      this.detalle = function(){
        return {        //return de un objeto
          Nombre: this.nombre,
          Apellido: this.apellido,
          Edad: this.edad,
          Domicilio: this.domicilio
        }
      }

  }


}

function crearInstanciaPersona(nombre, apellido, edad, dir) {
  //Con esta función vamos a crear una nueva persona a partir de nuestro constructor de persona (creado en el ejercicio anterior)
  //Recibirá los valores "Juan", "Perez", 22, "Saavedra 123" para sus respectivas propiedades
  //Devolver la nueva persona creada
  
  //Tengo que crear un objeto a partir de la clase anterior
  var persona = new Persona(nombre, apellido, edad, dir);
  return persona;
}

function agregarMetodo() {
  //La función agrega un método "datos" a la clase Persona que toma el nombre y la edad de la persona y devuelve: 
  //Ej: "Juan, 22 años"
  Persona.prototype.datos = function () {
    return this.nombre + ", " + this.edad + " años";
  }
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearUsuario,
  agregarMetodoPrototype,
  agregarStringInvertida,
  crearInstanciaPersona,
  agregarMetodo,
  Persona
};
