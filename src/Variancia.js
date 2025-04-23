/**
 * Calcula a variância de um conjunto de dados.
 *
 * @param {number[]} arr - Array de números.
 * @param {"a"|"b"} type - Tipo da variância: "a" para amostra, "b" para população.
 * @returns {number} - Valor da variância.
 */

// Imports
const media = require("./Media");

function Variancia(arr, type) {
  let med = media(arr);
  let SomaQuadrados = 0;

  for (let x of arr) {
    let difer = x - med;
    let AoQuadrado = difer ** 2;
    SomaQuadrados += AoQuadrado;
  }
  if (type === "a") {
    // Amostras
    return SomaQuadrados / (arr.length - 1);
  } else if (type === "b") {
    // Populacao
    return SomaQuadrados / arr.length;
  } else {
    throw new Error(
      "Tipo inválido. Use 'a' para amostra ou 'b' para população."
    );
  }
}

module.exports = Variancia