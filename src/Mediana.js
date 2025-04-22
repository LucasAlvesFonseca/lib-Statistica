/**
 *
 * @param {number} a - Primeiro Número
 * @param {number} b - Segundo Número
 * @returns {*} - Retorna organizadamente os primeiros números;
 */

// Outras Functions
function Compare(a, b) {
  return a - b;
}

/**
 * Retorna a Mediana de uma array
 *
 * @param {array} array - Uma array de números para que irá ser ordenada e trará a Mediana
 * @returns {number} - Retorno de Mediana do param
 */
function Mediana(array) {
  let arraySort = [...array].sort(Compare);
  let meio = Math.floor(arraySort.length / 2);

  //Verificar se é Impar ou pá
  if (arraySort.length % 2 === 0) {
    return (arraySort[meio - 1] + arraySort[meio]) / 2;
  } else {
    return arraySort[meio];
  }
}

module.exports = Mediana;
