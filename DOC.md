# 📘 Documentação - StatsJS

## 📐 Funções Estatísticas

---

### 🧮 Média Aritmética

#### `Media(array)`

Calcula a **média aritmética** dos valores numéricos presentes em um array.

#### 📥 Parâmetros

| Nome  | Tipo              | Descrição                                   |
| ----- | ----------------- | --------------------------------------------- |
| array | `Array<number>` | Um array contendo os números a serem somados |

#### 📤 Retorno

| Tipo   | Descrição |
| ------ | ----------- |
| number | A média    |

---



### 📊 Mediana

#### `Mediana(array)`

Calcula a **mediana** de um conjunto de números. A mediana representa o valor central quando os números estão ordenados.

#### 📥 Parâmetros

| Nome  | Tipo              | Descrição                                                      |
| ----- | ----------------- | ---------------------------------------------------------------- |
| array | `Array<number>` | Um array de números que será ordenado para cálculo da mediana |

#### 📤 Retorno

| Tipo   | Descrição                               |
| ------ | ----------------------------------------- |
| number | O valor da mediana do conjunto fornecido. |

#### 💡 Exemplo de Uso

```js
const mediana = require("./Mediana");

const numeros1 = [5, 3, 1];
const numeros2 = [10, 20, 30, 40];

console.log(mediana(numeros1)); // 3
console.log(mediana(numeros2)); // 25
```

---



## 📈 Moda

#### `Moda(arr)`

Calcula a **moda**, ou seja, o(s) valor(es) que mais se repetem em um conjunto de dados.

#### 📥 Parâmetros

| Nome | Tipo              | Descrição                              |
| ---- | ----------------- | ---------------------------------------- |
| arr  | `Array<number>` | Array com os números a serem analisados |

#### 📤 Retorno

| Tipo              | Descrição                                                |
| ----------------- | ---------------------------------------------------------- |
| `Array<string>` | Um array com o(s) valor(es) mais frequente(s) no conjunto. |

#### 💡 Exemplo de Uso

```js
const moda = require("./Moda");

const dados = [1, 2, 2, 3, 3, 3, 4, 4];
const resultado = moda(dados);

console.log(resultado); // ['3']
```

---



### 📉 Desvio Padrão

#### `DesvioPadrao(arr, type)`

Calcula o **desvio padrão** de um conjunto de dados numéricos, com suporte aos tipos **Amostral**, **Populacional** ou ambos.

#### 📥 Parâmetros

| Nome | Tipo              | Descrição                                              |
| ---- | ----------------- | -------------------------------------------------------- |
| arr  | `Array<number>` | Um array contendo os dados numéricos a serem analisados |
| type |                   |                                                          |

---



### 📊 Variância

#### `Variancia(arr, type)`

Calcula a **variância** de um conjunto de dados numéricos, com suporte aos tipos **Amostra** e **População**.

#### 📥 Parâmetros

| Nome | Tipo              | Descrição                                                    |
| ---- | ----------------- | -------------------------------------------------------------- |
| arr  | `Array<number>` | Array contendo os dados numéricos para cálculo da variância |
| type | `'a'              | 'b'`                                                           |

#### 📤 Retorno

| Tipo   | Descrição                                                                  |
| ------ | ---------------------------------------------------------------------------- |
| number | Valor da variância, dependendo do tipo selecionado (Amostra ou População) |

#### 💡 Exemplo de Uso

```js
const variancia = require("./Variancia");

const dados = [1, 2, 3, 4, 5];

console.log(variancia(dados, 'a')); // Variância Amostral
console.log(variancia(dados, 'b')); // Variância Populacional
```

---



## 📊 Coeficiente de Variação (CV)

#### `CV(arr)`

Calcula o **Coeficiente de Variação (CV)** de um conjunto numérico, que é a razão entre o desvio padrão e a média, expressa como uma porcentagem. O CV é útil para comparar a variabilidade de diferentes conjuntos de dados, independentemente da unidade de medida.

#### 📥 Parâmetros

| Nome | Tipo              | Descrição                                            |
| ---- | ----------------- | ------------------------------------------------------ |
| arr  | `Array<number>` | Array contendo os valores numéricos a serem avaliados |

#### 📤 Retorno

| Tipo                   | Descrição                                                |
| ---------------------- | ---------------------------------------------------------- |
| `Object`             | Objeto com dois campos:                                    |
| -`EmNumero` (number) | O valor do coeficiente de variação como número          |
| -`EmTexto` (string)  | O valor do coeficiente de variação como string formatada |

#### 💡 Exemplo de Uso

```js
const cv = require("./CV");

const dados = [1, 2, 3, 4, 5];

console.log(cv(dados).EmNumero); // Valor numérico do Coeficiente de Variação
console.log(cv(dados).EmTexto);  // Valor formatado do Coeficiente de Variação
```
