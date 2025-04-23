/**
 * Calcula o Coeficiente de Variação de um conjunto numérico.
 *
 *
 * @param {number[]} arr - Array com os valores a serem avaliados.
 * @returns {{EmNumero: number, EmTexto: string}} Objeto com o valor em número e texto formatado.
 */

// Imports
const media = require("./Media");
const DP = require("./DesvioPadrao.js");

function CV(arr) {
  let S = DP(arr, "a");
  let med = media(arr);
  if (med === 0) {
    return { EmNumero: Infinity, EmTexto: "Infinito (média = 0)" };
  } else {
    let retorno = {
      EmNumero: ((S / med) * 100).toFixed(2),
      EmTexto: `${EmNumero.toFixed(2)}%`,
    };
    return retorno;
  }
}

module.exports = CV;
