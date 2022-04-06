'use strict'
// No cambies los nombres de las funciones.

function factorear(num, arr = []){
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  if(num === 1){
      arr.unshift(1);
      console.log(arr);
      return arr;
  }
  if(num % 2 === 0){
    arr.push(2);
    return factorear(num / 2, arr);
  }
  if(num % 3 === 0){
    arr.push(3);
    return factorear(num / 3, arr);
  }
  if(num % 5 === 0){
    arr.push(5);
    return factorear(num / 5, arr);
  }
  if(num % 7 === 0){
    arr.push(7);
    return factorear(num / 7, arr);
  }
  if(num % 11 === 0){
    arr.push(11);
    return factorear(num / 11, arr);
  }
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  var aux = null;
  for(var i = 0; i < array.length; i++){
    for(var j = 0; j < array.length; j++){
      if(array[j] > array[j+1]){
        aux = array[j+1];
        array[j+1] = array[j];
        array[j] = aux;
      }
    }
  }
  return array;
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  var aux = null;
  for(var i = 1; i < array.length; i++){
      var j = i;
      while(j >= 1 && array[j] < array[j-1]){
          aux = array[j - 1];
          array[j-1] = array[j];
          array[j] = aux;
          j--;
      }
  }
  return array;
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  var aux = null;
  var menor = null;
  for(var i = 0; i < array.length; i++){
      menor = i
      for(var j = i + 1; j < array.length; j++){
          if(array[menor] > array[j]){
              menor = j
          }
      }
      aux = array[i];
      array[i] = array[menor];
      array[menor] = aux;
  }
  return array;

}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
