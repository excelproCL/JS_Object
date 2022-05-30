var clc= require ('cli-color');
//imprime titulos
function t (arg) {
    txt=arg.toUpperCase();
    console.log(clc.yellow.underline(txt+'\n'));
}

//imprime subtitulos
function s (arg) {
    txt=arg.toUpperCase();
    console.log(clc.white('\n'+"*** "+txt+" ***"));
}

function c (arg) {
    console.log(arg);
}

//Limpia la consola
console.clear(); 

t('Conceptos Basicos: Creacion de un objeto , gestion de atributos');
s('Crea un Objeto');


var animal = {
    especie : "perro",
    habitat : "ciudad",
    longevidad:20,
    "nivel inteligencia" : 10,
    razas:["pastor", "bulgog"],
};

c(animal);

s('Notacion de Punto');
c("animal.especie -> "+animal.especie);

s('Notacion de Corchete');
c("animal['nivel inteligencia'] -> "+animal['nivel inteligencia']);

s('Actualizacion de Valores');
animal.habitat="campo";
c("animal.habitat='campo' -> ");
c(animal);

