/**
 * A moda é o valor que mais se repete em um conjunto de dados.
 *
 * @param {array} arr - Array de números a ser analisado
 * @returns {array} - Array com os valores da moda
 */

function Moda(arr) {
    // Calcular a Frequência
    let frequencia = {};
    for (let i = 0; i < arr.length; i++) {
      let numero = arr[i];
  
      if (frequencia[numero]) {
        frequencia[numero]++;
      } else {
        frequencia[numero] = 1;
      }
    }
  
    let Moda = [];
    let MaxFrequencia = 0;
  
    for (let chave in frequencia) {
      // Atualizar moda e MaxFrequencia
      if (frequencia[chave] > MaxFrequencia) {
        MaxFrequencia = frequencia[chave];
        Moda = [chave];
      } else if (frequencia[chave] === MaxFrequencia) {
        Moda.push(chave); 
      }
    }
  
    return Moda;
  }
  
  module.exports = Moda;
  