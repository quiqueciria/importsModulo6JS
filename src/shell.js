import { setNumeroParaAcertar, setNumeroDeIntentos } from "./modelo"; //Esto se simplifaicará bastante con la solución en TypeScript

import {
  generarNumeroAleatorio,
  hasSuperadoElNumeroMaximoDeIntentos,
  comprobarNumero,
} from "./motor";

import { muestraNumeroDeIntentos, handleCompruebaClick } from "./ui";

const inicializarNuevaPartida = () => {
  setNumeroParaAcertar(generarNumeroAleatorio());
  setNumeroDeIntentos(0);
  muestraNumeroDeIntentos();
};

document.addEventListener("DOMContentLoaded", inicializarNuevaPartida);

const botonComprobar = document.getElementById("comprobar");

botonComprobar.addEventListener("click", handleCompruebaClick);
