// let nombrePlaylist = prompt("¿Cuál es el nombre de la playlist?");

// let primera = prompt("¿Cuál es la primera canción?");
// let segunda = prompt("¿Cuál es la segunda canción?");
// let tercera = prompt("¿Cuál es la tercera canción?");

// // alert("Se ha creado la playlist " + nombrePlaylist + " con las canciones " 
// // + primera + ", " + segunda + ", " + tercera);



// const nombre = "Agus";
// const otroNombre = 'Sofi';


// dos ventajas (tildes invertidas o backticks)
// 1. nos permiten agregar saltos de linea
// 2. nos permiten interpolar variables

// const mensaje = `Hola ${nombre}, como estas?`;

// alert("Se ha creado la playlist " + nombrePlaylist + " con las canciones " 
// + primera + ", " + segunda + ", " + tercera);

// alert(`Se ha creado la playlist ${nombrePlaylist} con las canciones ${primera}, ${segunda}, ${tercera}`)

// interaccion 

// alert 
// prompt
// confirm

// // const respuesta = confirm("Al continuar, Ud. acepta los terminos y condiciones."); // true o false
// // console.log(respuesta)


// // booleanos
// // true y false

// let tieneDeuda = true
// let nombre = "";
// let edad = 0;

// let variableSinValor;

// // Convertir a booleano
// console.log(Boolean(variableSinValor));

// // todos los valores dan true menos
// // - un string vacio ""
// // - el numero 0
// // - undefined



// let funcionDeEjemplo = () => {
//   alert("Hola, estoy adentro de una funcion");
  
//   let nombrePlaylist = prompt("¿Cual es el nombre de la playlist?");
//   let primera = prompt("¿Cual es la primera canción?");
//   let segunda = prompt("¿Cual es la segunda canción?");
//   let tercera = prompt("¿Cual es la tercera canción?");

//   console.log(tercera)

//   alert("Se ha creado la playlist " + nombrePlaylist + " con las canciones " 
//   + primera + ", " + segunda + ", " + tercera);

// }

// funcionDeEjemplo();


// argumentos o parametros

// const saludar = (nombreDeLaAlumna) => {
//   console.log(`Hola, ${nombreDeLaAlumna}`);
// }

// saludar("Carola");
// saludar("Rocio");
// saludar("Mika");
// saludar("Caro");
// saludar("Cande");
// saludar("Agus");
// saludar("Sofi");
// saludar("Jenni");


// const insultoFavorito = prompt("Cual es tu mala palabra favorita?");

// const insultarAlVecino = (insulto) => {
//   alert("Vecino de Tati, " + insulto);
// }


// insultarAlVecino(insultoFavorito);




// const edad = prompt("dime tu edad"); // string 

// const aniosPerro = (edadUsuario) => {
//   console.log("Tus años en perro son:" + (edadUsuario * 7));
// }

// const otraEdad = 27;

// aniosPerro(edad);
// aniosPerro(18);
// aniosPerro(otraEdad);
// aniosPerro(99);
// aniosPerro(213);


// pasar mas de un parametro

// const presentar = (nombre, apellido, profesion) => {
//   console.log("La alumna es " + nombre + " " + apellido + " cuya ocupacion es " + profesion)
// }

// presentar("Caro", "Lew", "estudiante");
// presentar("Rocio", "Ibañez", "estudiante");


/*const numero1 = prompt("decime un numero");
const numero2 = prompt("decime otro numero");

const sumar = (num1, num2) => {
  return num1 + num2
}

let resultadoDeLaSuma = sumar(numero1, numero2);

let resultadoDeOtraSuma = sumar(4, 5);*/

//////////////EJERCICIOS////////////

//Ejercicio 1 -Definí una función sumar que reciba como argumentos dos números y devuelva la suma de ellos//

/*const sumar = (num1, num2) => {
  return num1 + num2;
  
}

let resultadoPrimeraSuma = sumar(2, 3);

let resultadoSegundaSuma = sumar(1.2, 3.4);

let resultadoTercerSuma = sumar(3, -5);

console.log(resultadoPrimeraSuma);
console.log(resultadoSegundaSuma);
console.log(resultadoTercerSuma);*/


//Retorna directamente sin definirlo en una variable

//EJERCICIO 2//

/*const restar = (num1, num2) => { 
  return num1 - num2;
 }
 
 let resultadoPrimerResta = restar(3, 2);
 
 let resultadoSegundaResta = restar(10, 5.5);
 
 let restuladoTercerResta = restar(3, 5);

 console.log(resultadoPrimerResta);

 console.log(resultadoSegundaResta);

 console.log(restuladoTercerResta);*/



//EJERCICIO 3//

/*const multiplicar = (num1, num2) => {
  return num1 * num2;
  
}
let resultadoPrimerMultiplicacion = multiplicar(2, 3);

let resultadoSegundaMultiplicacion = multiplicar(4, 0.5);

console.log(resultadoPrimerMultiplicacion);

console.log(resultadoSegundaMultiplicacion);*/

//EJERCICIO 4 //

/*const dividir = (numero1, numero2) => {
  return numero1 / numero2;
}

let resultadoPrimeraDivision = dividir(2, 3);

let resultadoSegundaDivision = dividir(1.2, 3.4);

let resultadoTerceraDivision = dividir(3, -5);

console.log(resultadoPrimeraDivision);

console.log(resultadoSegundaDivision);

console.log(resultadoTerceraDivision);*/

//EJERCICIO 5//

/*const calcularAreaTriangulo = (base, altura) =>{
  return base * altura / 2
}

let medidaPrimerTriangulo = calcularAreaTriangulo(3, 4);

let medidaSegundoTriangulo = calcularAreaTriangulo(5, 6);

console.log(medidaPrimerTriangulo);

console.log(medidaSegundoTriangulo);*/

//EJERCICIO 6//

/*const gritar = (palabra) => {
  return "¡" + palabra + "!";
}

let gritoUno = gritar("hola");

let gritoDos = gritar("aaaaaa");

console.log(gritoUno);

console.log(gritoDos);*/

// EJERCICIO 7//

/*const obtenerNombreCompleto = (nombre, apellido) => {
   return (nombre + " " + apellido);
}

let primerNombreYApellido = obtenerNombreCompleto("Ada", "Lovelace");

console.log(primerNombreYApellido);*/

// EJERCICIO 8 //

/*const saludar = (nombre) => {
  return "Hola " + nombre + ", un gusto conocerte";
}

let nombreUsuaria = saludar("Ada");

console.log(nombreUsuaria);*/


//EJERCICIO 9//

/*const  saludarGritando  =  ( nombre ,  apellido )  =>  {
  return ( "¡Hola " + nombre + " " + apellido + ", " + "un gusto conocerte!" ) ;
} ;

let saludoCompleto = saludarGritando("Ada", "Lovelace");


NO ESTOY CONFORME CON LA RESOLUCION PORQUE NO SUPE COMO UAR LAS FUNCIONE ANTERIORES.

const gritar = (palabra) => {
  return "¡" + palabra + "!";
};

let gritoUno = gritar("hola");

let gritoDos = gritar("aaaaaa");

const obtenerNombreCompleto = (nombre, apellido) => {
  return nombre + " " + apellido;
};

let primerNombreYApellido = obtenerNombreCompleto("Ada", "Lovelace");

const saludar = (nombre) => {
  return "Hola " + nombre + ", un gusto conocerte";
};

let nombreUsuaria = saludar("Ada");

const saludarGritando = (nombre, apellido) => {
  return gritar(saludar(obtenerNombreCompleto(nombre, apellido)));
};

saludarGritando("Ada", "Lovelace");

console.log(saludarGritando);

// EJERCICIO 10 //

/*const obtenerDatosDeCiudad = (nombre, poblacion, pais) =>{
  return ("La ciudad de " + nombre + " tiene una población de " + poblacion + " habitantes y está ubicada en " + pais); 
}

let datosCompletosCiudad = obtenerDatosDeCiudad("Santa Fe", "545606", "Argentina");*/

// EJERCICIO 11 //

/*const convertirHorasEnSegundos = (horas) => {
  return Number(horas) * 3600;
}

let primerHora = convertirHorasEnSegundos(1);
 
let segundaHora = convertirHorasEnSegundos(3);

let tercerHora = convertirHorasEnSegundos(4.5);

console.log(primerHora);

console.log(segundaHora);

console.log(tercerHora);*/

// EJERCICIO 12 //

/*const calcularPerimetroRectangulo = (ancho, alto) => {
  return (ancho + alto)*2; 
}

let perimetroRectanguloUno = calcularPerimetroRectangulo(3.2, 5);

let perimetroRectanguloDos = calcularPerimetroRectangulo(10, 20);

console.log(perimetroRectanguloUno);

console.log(perimetroRectanguloDos);*/

// EJERCICIO 13 //

/*const calcularPorcentaje = (total, porcentaje) => {
  return (total * porcentaje / 100);
}

let resultadoPorcentajeUno = calcularPorcentaje(100, 15);

let resultadoPorcentajeDos = calcularPorcentaje(10, 50);

let resultadoPorcentajeTres = calcularPorcentaje(200, 10);

console.log(resultadoPorcentajeUno);

console.log(resultadoPorcentajeDos);

console.log(resultadoPorcentajeTres);*/

//EJERCICIO 14 //

/*const sumarPorcentaje = (numero, porcentaje) => {
  let resultadoPorcentaje = calcularPorcentaje(numero, porcentaje);
  
  return (resultadoPorcentaje + numero)
  
}

sumarPorcentaje(100, 15);*/

//EJERCICIO 15 //

/*const restarPorcentaje = (numero, porcentaje) => {
  let resultadoRestaPorcentaje = calcularPorcentaje(numero, porcentaje);
  
  return (numero - resultadoRestaPorcentaje);
}

restarPorcentaje(100, 15)

restarPorcentaje(10, 40)

restarPorcentaje(200, 10)*/

// EJERCICIO 16 //

/*const calcularFPS = (cuadros, minutos) => {
  return (cuadros * 60 * minutos);
}

console.log(calcularFPS(1, 1));

console.log(calcularFPS(10, 2));

console.log(calcularFPS(2, 3));*/

// EJERCICIO 17 //

/*const obtenerCompetencia = (a, b) => {
  return a + " vs. " + b;
}

obtenerCompetencia("JavaScript", "Python");

obtenerCompetencia("Coca", "Pepsi");

obtenerCompetencia("Perros", "Gatos");*/

// EJERCICIO 18 //

/*const generarEmail = (usuario, dominio) => {
  return (usuario + "@" + dominio + ".com");
}

generarEmail("adalovelace", "gmail");*/

//EJERICICIO 19 //

/*const calcularPuntaje = (num1, num2, num3) => {
  let facil = 3;
  let normal = 5;
  let dificil = 10;
  
  return (num1*facil) + (num2*normal) + (num3*dificil);
}

calcularPuntaje(3, 0, 0);

calcularPuntaje(0, 2, 1);

calcularPuntaje(5, 1, 2);*/
















