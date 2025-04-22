/**
 * Calcula a média dos números em um array.
 * Soma todos os valores e divide pela quantidade de elementos.
 * 
 * @param {Array<number>} array - Array contendo os números a serem somados.
 * @returns {number} A média dos números no array.
 */


function Media(array) {
  let soma = 0;
  let numElements = array.length;

  for (let i = numElements - 1; i >= 0; i--) {
    soma += array[i];
  }
  return soma / numElements;
}

module.exports = Media
