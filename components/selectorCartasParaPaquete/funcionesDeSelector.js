/* 

NO BORRAR!!!

rarezas que si hay:
comun:  "Common" (42), sinRareza (12) 
poco comun: "Uncommon" (24), promo (6)
raro: "Rare", (36)
ultra raro: Rare Holo, (122)
epico: Rare Holo EX (2), "Rare Holo GX" (3), Rare Holo V (2)
legendario: Rare Ultra (1)

(plateado 5): comunes(%80), poco comunes(%12), raro(%7.999), legandario(%0.001)(1 en 1000)  (1, 800)(801, 920)(921, 999)(1000)
(verde 6): comun(%37), poco comun(%50), raro(%10), ultraRaro(%3)                            (1, 37)(38, 87)(88, 97)(98, 100)
(azul 7): comun(%17), poco comun(%28), raro(%42), ultraRaro(%10), epico(%3)                 (1, 17)(18, 45)(46, 87)(88, 97)(98, 100)
(violeta 8): comun(%5), poco comun(%15), raro(%33), ultraRaro(%35), epico(%12)              (1, 5)(6, 20)(21, 53)(54, 88)(89, 100)
(negro 9): comun(%3),poco comun(%10),raro(%24),ultraRaro(%32),epico(%28),legendario(%3)     (1, 3)(4, 13)(14, 37)(38, 69)(70, 97)(98, 100)
(dorado 10): comun(%7),poco comun(%8),raro(%17),ultraRaro(%22),epico(%28),legendario(%18)   (1, 7)(8, 15)(16, 32)(33, 54)(55, 82)(83, 100)
NO BORRAR!!!

*/

const { arrayComunes, arrayPocoComunes, arrayRaras, arrayUltraRaras, arrayEpicas, arrayLegendaria } = require ("./arrayIdCartas.js");
const colorPaquetes = ["plateado", "verde", "azul", "violeta", "negro", "dorado"];
const cantidadCartasSegunPaquete = [5, 6, 7 ,8 ,9 ,10];
const rarezas = ["comun", "poco comun", "raro", "ultra raro", "epico", "legendario"];


function cuatroRarezas(color){
  let conteo;
  let cartas = [];
  let multi;
  let condicionUno;
  let condicionDos;
  let condicionTres;
  let rarezaUno;
  let rarezaDos;
  let rarezaTres;
  let rarezaCuatro;
  
  if(color === colorPaquetes[0]){
    conteo = 5;
    multi = 1000;
    condicionUno = [1, 800];
    condicionDos = [801, 920];
    condicionTres = [921, 999];
    rarezaUno = rarezas[0];
    rarezaDos = rarezas[1];
    rarezaTres = rarezas[2];
    rarezaCuatro = rarezas[5];
  } else {
    conteo = 6;
    multi = 100;
    condicionUno = [1, 37];
    condicionDos = [38, 87];
    condicionTres = [88, 99];
    rarezaUno = rarezas[0];
    rarezaDos = rarezas[1];
    rarezaTres = rarezas[2];
    rarezaCuatro = rarezas[3];
  }

  for(let i = 0; i < conteo; i++){
    let rareza = Math.round(Math.random()*multi)+1;
    if(rareza >= condicionUno[0] && rareza <= condicionUno[1]){
      cartas.push(rarezaUno);
    } else if(rareza >= condicionDos[0] && rareza <= condicionDos[1]){
      cartas.push(rarezaDos);
    } else if(rareza >= condicionTres[0] && rareza <= condicionTres[1]){
      cartas.push(rarezaTres);
    } else {
      cartas.push(rarezaCuatro);
    }
  }

  return cartas;
}

function cincoRarezas(color){
  let conteo;
  let cartas = [];
  let condicionUno;
  let condicionDos;
  let condicionTres;
  let condicionCuatro;

  if(color === colorPaquetes[2]){
    conteo = 7;
    condicionUno = [1, 17];
    condicionDos = [18, 45];
    condicionTres = [46, 87];
    condicionCuatro = [88, 97];
  } else {
    conteo = 8;
    condicionUno = [1, 5];
    condicionDos = [6, 20];
    condicionTres = [21, 53];
    condicionCuatro = [54, 88];
  }

  for(let i = 0; i < conteo; i++){
    let rareza = Math.round(Math.random()*99)+1;
    if(rareza >= condicionUno[0] && rareza <= condicionUno[1]){
      cartas.push(rarezas[0]);
    } else if(rareza >= condicionDos[0] && rareza <= condicionDos[1]){
      cartas.push(rarezas[1]);
    } else if(rareza >= condicionTres[0] && rareza <= condicionTres[1]){
      cartas.push(rarezas[2]);
    } else if(rareza >= condicionCuatro[0] && rareza <= condicionCuatro[1]){
      cartas.push(rarezas[3]);
    } else {
      cartas.push(rarezas[4]);
    }
  }

  return cartas;
}

function seisRarezas(color){
  let conteo;
  let cartas = [];
  let condicionUno;
  let condicionDos;
  let condicionTres;
  let condicionCuatro;
  let condicionCinco;

  if(color === colorPaquetes[4]){
    conteo = 9;
    condicionUno = [1, 3];
    condicionDos = [4, 13];
    condicionTres = [14, 37];
    condicionCuatro = [38, 69];
    condicionCinco = [70, 97];
  } else {
    conteo = 10;
    condicionUno = [1, 7];
    condicionDos = [8, 15];
    condicionTres = [16, 32];
    condicionCuatro = [33, 54];
    condicionCinco = [55, 82];
  }

  for(let i = 0; i < conteo; i++){
    let rareza = Math.round(Math.random()*99)+1;
    if(rareza >= condicionUno[0] && rareza <= condicionUno[1]){
      cartas.push(rarezas[0]);
    } else if(rareza >= condicionDos[0] && rareza <= condicionDos[1]){
      cartas.push(rarezas[1]);
    } else if(rareza >= condicionTres[0] && rareza <= condicionTres[1]){
      cartas.push(rarezas[2]);
    } else if(rareza >= condicionCuatro[0] && rareza <= condicionCuatro[1]){
      cartas.push(rarezas[3]);
    } else if(rareza >= condicionCinco[0] && rareza <= condicionCinco[1]){
      cartas.push(rarezas[4]);
    } else {
      cartas.push(rarezas[5]);
    }
  }

  return cartas;
}




function seleccionId(array){
  return array[Math.floor(Math.random()*array.length)];
}



function seleccionYBusqueda(cartas){
  let idCartas = [];
  let id;
  for(let i = 0; i < cartas.length; i++){
    if(cartas[i] === rarezas[0]){
      id = seleccionId(arrayComunes);
      idCartas.push(id);
    } else if(cartas[i] === rarezas[1]){
      id = seleccionId(arrayPocoComunes);
      idCartas.push(id);
    } else if(cartas[i] === rarezas[2]){
      id = seleccionId(arrayRaras);
      idCartas.push(id);
    } else if(cartas[i] === rarezas[3]){
      id = seleccionId(arrayUltraRaras);
      idCartas.push(id);
    } else if(cartas[i] === rarezas[4]){
      id = seleccionId(arrayEpicas);
      idCartas.push(id);
    } else {
      idCartas.push(arrayLegendaria[0])
    }
  }
  return idCartas;
}

function obtenerRarezasABuscarSegunColorPaquete(color){
  let cartas;
  let idCartas;
  if(color === colorPaquetes[0] || color === colorPaquetes[1]){
    cartas = cuatroRarezas(color);
  } else if (color === colorPaquetes[2] || color === colorPaquetes[3]){
    cartas = cincoRarezas(color);
  } else {
    cartas = seisRarezas(color);
  }

  idCartas = seleccionYBusqueda(cartas);
  return idCartas; //
}

async function peticionCarta(id){
  const peticion = await fetch(`https://api.pokemontcg.io/v2/cards/${id}`,{
    headers: {
      "X-Api-Key": 'f38fe9d2-bb6d-40c1-b514-9dddf5f52232' //esto tengo que ponerlo en gitIgnore
    }
  });
  const objetoCarta = await peticion.json();
  return objetoCarta;
}

/*
async function testeoGeneral(){ //podria ser util
  
  let colorPaquete = "violeta";
  let res;
  let idCartas = obtenerRarezasABuscarSegunColorPaquete(colorPaquete);
  let cartas = idCartas.map(async (id) => await peticionCarta(id))
  await Promise.all(cartas).then((values) => res = values);
  //console.log(JSON.stringify(res));
  //console.log(res[0]);
  return res; //devuelve promesa
}


let resuelto;
resuelto = testeoGeneral()
console.log(resuelto);
*/


module.exports = {obtenerRarezasABuscarSegunColorPaquete, peticionCarta, cantidadCartasSegunPaquete};