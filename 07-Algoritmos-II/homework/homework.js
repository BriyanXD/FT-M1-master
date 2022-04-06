"use strict";
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length < 1) return [];
  let left = [];
  let rigth = [];
  var pivot = array[0];

  for (var i = 1; i < array.length; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      rigth.push(array[i]);
    }
  }
  return [].concat(quickSort(left), pivot, quickSort(rigth));
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length <= 1) return array;
  var pivot = Math.floor(array.length / 2);
  let left = array.slice(0, pivot);
  let rigth = array.slice(pivot);
  left = mergeSort(left);
  rigth = mergeSort(rigth);
  return mergeArrays(left, rigth);
}

function mergeArrays(left, rigth) {
  let aux = [];
  while (left.length || rigth.length) {
    if (!left.length) {
      aux.push(rigth.shift());
      continue;
    }
    if (!rigth.length) {
      aux.push(left.shift());
      continue;
    }
    if (left[0] > rigth[0]) {
      aux.push(rigth.shift());
    } else {
      aux.push(left.shift());
    }
  }
  return aux;
}
let arr = [5, 1, 4, 2, 8];
mergeSort(arr);

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
