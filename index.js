var clc= require ('cli-color');
//imprime titulos
function tl (arg) {
    txt=arg.toUpperCase();
    console.log(clc.yellow.underline(txt+'\n'));
}

//imprime subtitulos
function sl (arg) {
    txt=arg.toUpperCase();
    console.log(clc.white('\n'+"*** "+txt+" ***"));
}

function cl (arg) {
    console.log(arg);
}

// function pausa(){
// cl('presione una tecla para continuar');
// process.stdin.setRawMode(true);
// process.stdin.resume();
// process.stdin.on('data', process.exit.bind(process,0));
// };


function pausa()


//Limpia la consola
console.clear(); 

tl('Conceptos Basicos: Creacion de un objeto , gestion de Propiedades');
sl('Crea un Objeto');

cl('var animal={ propiedad :valor}');
var animal = {
    especie : "perro",
    habitat : "ciudad",
    longevidad:20,
    "nivel inteligencia" : 10,
    razas:["pastor", "bulgog"],
};

cl(animal);
pausa();


sl('Notacion de Punto');
cl("animal.especie -> "+animal.especie);

sl('Notacion de Corchete');
cl("animal['nivel inteligencia'] -> "+animal['nivel inteligencia']);

sl('Actualizacion de Valores');
animal.habitat="campo";
cl("animal.habitat='campo' -> ");
cl(animal);

sl('Actualizacion de Valores (arreglo)');
cl("animal.razas.push('akita'); -> ");
animal.razas.push('akita');
cl(animal);

