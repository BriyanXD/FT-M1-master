'use strict'
// Implementa la clase LinkedList
// tiene metodos `add`, `remove`, y `search`
// add: Agrega un nuevo nodo en el final de la lista
// Ej:      Head --> null
// add(1):  Head --> 1 --> null
// add(2):  Head --> 1 --> 2 --> null
// remove:  Elimina el último nodo de la lista y devuelve su valor. (Tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía)
// Ej:         Head --> 1
// remove():   Head --> null y devuelve 1
// search: Busca un valor dentro de la lista. Puede recibir un valor o una función. Si no hubiera resultados, devuelve null.
function LinkedList(){
  this.head = null;
}

function Node(value){
  this.value = value;
  this.next = null;
}

LinkedList.prototype.add = function(value){
  let node = new Node(value);
  let current = this.head;

  if(!current){
    this.head = node;
    return node;
  }
  while(current.next){
    current = current.next;
  }
  current.next = node;
  return node;
}

LinkedList.prototype.remove = function(){
  let current = this.head;
  if(!current) return null;
  if(current && !current.next){
    this.head = null;
    return current.value;
  }
  while(current.next.next){
    current = current.next;
  }
  let savedValue = current.next.value;
  current.next = null;
  return savedValue;
}

LinkedList.prototype.search = function(value){
  let current = this.head;
  var savedValue = value;

  if(current == null)return null;

  while(current.next){
      if(current.value == savedValue)break;
      if(typeof(value) == "function"){
          if(value(current.value)){
              savedValue = current.value;
              break;
          }
      }
      current = current.next;
}
if(typeof(value) == "function"){
  if(value(current.value)){
      savedValue = current.value;
  }
}
if(current.value == savedValue) return current.value
return null;
  }

// Hash Table( ver información en: https://es.wikipedia.org/wiki/Tabla_hash)
// Una Hash table contiene un arreglo de "contenedores" o buckets donde puede guardar información.
// Para este ejercicio, generar 35 buckets para la Hash Table, y realizar los métodos, get, hasKey
// Para almacenar un valor asociado a una key (string):
//    - Se pasa ese valor a la función hash(Pista: usar la función charCodeAt), que determina la posición en que debe ir en el arreglo.
//    - Luego el elemento se inserta(llamando al método set) en la posición(índice) devuelta.
// Para buscar el valor por su key:
//    - Sólo habrá que pasarle a la función hash la clave del elemento a buscar y ésta determinará la posición
//      en que se encuentra.
//    - Usar el número obtenido, para buscar(llamando al método get) el contenedor o bucket donde está el valor.
//    - Retornar dicho valor.

function HashTable(){
  this.numBuckets =35;
  this.hashTable = new Array(this.numBuckets);
}

HashTable.prototype.hash = function(value){
  var total = 0;
  for(var i= 0; i < value.length; i++){
      total += value.charCodeAt(i)
  }
  return total % 35;
}

HashTable.prototype.set = function(key,value){

  var indice = this.hash(key);

  if(typeof(key) !== "string"){
      throw new TypeError("Keys must be strings");
  }
  if(!this.hashTable[indice]){
      this.hashTable[indice] = {}
  }
  this.hashTable[indice][key] = value;
}


HashTable.prototype.get = function(key){
  var indice = this.hash(key);
  return this.hashTable[indice][key];
}
HashTable.prototype.hasKey = function(key){
  var indice = this.hash(key);
  return this.hashTable[indice].hasOwnProperty(key);
}


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable
};
