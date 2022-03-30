//Variables Numéricas
var iva = 16;        // variable tipo entero
var total = 234.65;  // variable tipo decimal

document.write("<h2>Variables Numéricas</h2>");
document.write('Variable de tipo entero, Valor: '+iva);
document.write("<br>");
document.write('Variable de tipo decimal, Valor: '+total);

//Variables de cadena de texto
document.write("<h2>Variables de cadena de texto</h2>");
var texto1 = "Una frase con 'comillas simples' dentro";
var texto2 = 'Una frase con "comillas dobles" dentro';

document.write('Esto es una cadena de texto: '+texto1);
document.write("<br>");
document.write('Esto es una cadena de texto: '+texto2);
document.write("<br><br>");

//Variables de tipo Array
document.write("<h2>Variables de tipo Array</h2>");
var meses = ["Enero", " Febrero", " Marzo", " Abril", " Mayo", " Junio", " Julio", " Agosto", " Septiembre", " Octubre", " Noviembre", " Diciembre"];

document.write('Variable de tipo array | Los meses?, '+meses);
document.write("<br><br>");

//Variables Booleanas
document.write("<h2>Variables Booleanas</h2>");
var falso = false;
var verdadero = true;

document.write('Esto es un booleano Falso: '+falso);
document.write("<br>");
document.write('Esto es un booleano Verdadero: '+verdadero);