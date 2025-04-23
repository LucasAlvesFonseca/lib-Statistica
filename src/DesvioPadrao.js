/**
 * 
 * 
 * @param {number[]} arr - Uma array com informaões numéricas.
 * @param {'a'|'b'|'c'} type - Tipo de Desvio Padrão:
 *  - 'a': Tipo de Amostra
 *  - 'b': Tipo de Populacao
 *  - 'c': Ambos os resultados
 * @returns {number|number[]} - O desvio padrão como número ou array com ambos.
 */

// Imports
const Media = require("./Media.js");

function DesvioPadrao(arr, type) {
  let Med = Media(arr);

  let Desvio = 0;
  for (let x of arr) {
    Desvio += (x - Med) ** 2;
  }

  // Dependendo do tipo de desvio (Amostra ou População)
  if (type === "a") {
    let AmostraDesvio = Desvio / (arr.length - 1);
    return Math.sqrt(AmostraDesvio); 
  } else if (type === "b") {

    // Para População, usamos n no denominador
    let PopulacaoDesvio = Desvio / arr.length;
    return Math.sqrt(PopulacaoDesvio); 
  } else if (type === "c") {

    // Para ambos, retorna ambos os desvios padrão
    let PopulacaoDesvio = Desvio / arr.length;
    let AmostraDesvio = Desvio / (arr.length - 1);
    let result = [
      Math.sqrt(PopulacaoDesvio),
      Math.sqrt(AmostraDesvio)
    ];
    return result;
  } else {
    throw new Error("Tipo inválido! Use 'a' para Amostra, 'b' para População ou 'c' para ambos.");
  }
}

module.exports = DesvioPadrao