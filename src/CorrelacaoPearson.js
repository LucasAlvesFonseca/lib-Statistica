
// Imports
const media = require("./Media");

/**
 * Calcula o coeficiente de correlação de Pearson entre dois conjuntos de dados.
 * 
 * @param {Object} param0 - Objeto contendo dois arrays: x e y.
 * @returns {number} - O coeficiente de correlação r.
 */
function Pearson({ x, y }) {
  if (x.length !== y.length) {
    throw new Error("Os Arrays X e Y devem ter o mesmo comprimento");
  }
  let medX = media(x);
  let medY = media(y);

  let SomaNumerador = 0;
  let somaX = 0;
  let somaY = 0;

  for (let i = 0; i < x.length; i++) {
    let XDif = x[i] - medX;
    let YDif = y[i] - medY;

    SomaNumerador += XDif * YDif;
    somaX += XDif ** 2;
    somaY += YDif ** 2;
  }

  const denominador = Math.sqrt(somaX * somaY);
  const r = SomaNumerador / denominador;

  return r
}

module.exports = Pearson;
