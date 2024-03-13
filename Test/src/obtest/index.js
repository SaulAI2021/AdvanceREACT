/* eslint-disable no-undef */
function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}
function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  return a/b;
}

function email (){
  return 'royer@mail.com'
}

function obj(){
  return {
    ancho:10,
    alto: 20
  }
}

class Rectangulo {
  constructor(ancho, alto) {
      this.ancho = ancho;
      this.alto = alto;
  }

  calculaArea() {
      this.ancho * this.alto
  }
}
const devuelveArrayNum = () => [1, 2, 3, 4, 5]
const devuelveArrayObj = () => [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }]
const devuelveArrayStr = () => ['leche', 'huevos', 'cereales', 'jamón', 'yogures']

const devuelveTrue = () => true;
const devuelveFalse = () => false;
const devuelveNull = () => null;
const devuelveUndefined = () => undefined;

module.exports = { sumar,restar,multiplicar,dividir,email,obj,devuelveArrayNum,devuelveArrayObj,devuelveArrayStr,devuelveTrue,devuelveFalse,devuelveNull,devuelveUndefined,Rectangulo}