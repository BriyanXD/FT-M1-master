'use strict'
// No cambies los nombres de las funciones.

function factorear(num){
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let div = 2;
  let arr = [1];
  while(num > 1){
  if(num % div === 0){
    arr.push(div);
    num = num / div;
  }else{
    div++;
  }
}
return arr;
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  var aux = null;
  var flag = true;
  while(flag){
    flag = false;
    for(var j = 0; j < array.length; j++){
      if(array[j] > array[j+1]){
        aux = array[j+1];
        array[j+1] = array[j];
        array[j] = aux;
        flag = true;
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
