/* eslint-disable no-undef */
const funcn = require('./index');

describe('Assertions basics',()=>{
  test('La suma funciona', () => {
    expect(funcn.sumar(2,4)).toBe(6);
  });
  test('La suma no resta', () => {
    expect(funcn.sumar(2,3)).not.toBe(-1);
    expect(funcn.sumar(2,3)).not.toEqual(-1);
  });
  test('La resta funciona', () => {
    expect(funcn.restar(2,3)).toBe(-1);
    expect(funcn.restar(2,3)).toEqual(-1);
  });
  test('La multiplicación funciona', () => {
    expect(funcn.multiplicar(2,3)).toBe(6);
  });
  test('La división funciona', () => {
    expect(funcn.dividir(20,4)).toBe(5);
  });
  test('probamos el >', () => {
    //expect(funcn.dividir(100,5)).toBeGreaterThan(20);    
    expect(funcn.dividir(100,5)).toBeGreaterThanOrEqual(20);    
  })
  test('probamos el <', () => {
    //expect(funcn.dividir(100,5)).toBeGreaterThan(20);    
    expect(funcn.dividir(100,5)).toBeLessThanOrEqual(20);    
  })
});

describe('Assertions strings', () => {
  test('Debe tener un email', () => {
    const mail = funcn.email();
    expect(mail).toMatch(/[a-zA-Z].[a-zA-Z]\.com/);
  })
  
})

describe('Assertions objetos', () => {
  test('Objetos iguales', () => {
    const objA = funcn.obj();
    const objB = funcn.obj()
    expect(objA).toEqual(objB)
  })
  test('Objetos debe tener una propiedad ancho', () => {
    const obj = funcn.obj();
    expect(obj).toHaveProperty('ancho')
  })
  test('El objeto rectA debe ser un Clase Rectangulo', () => {
    // const rectA = { ancho: 10, alto: 11 };
    const rectA = new funcn.Rectangulo(10, 11);
    expect(rectA).toBeInstanceOf(funcn.Rectangulo);
})
})
describe('Assertions básicos con booleanos', () => {
  test('Probar que algo es true', () => {
      const r = funcn.devuelveTrue();
      expect(r).toBeTruthy();
  })
  test('Probar que algo es false', () => {
      const r = funcn.devuelveFalse();
      expect(r).toBeFalsy();
  })
  test('Probar que algo es null', () => {
      const r = funcn.devuelveNull();
      expect(r).toBeNull();
  })
  test('Probar que algo es defined', () => {
      const r = 5;
      expect(r).toBeDefined();
  })
  test('Probar que algo es undefined', () => {
      const r = funcn.devuelveUndefined();
      expect(r).toBeUndefined();
  })
})
describe('Assertions básicos en arrays', () => {
  test('Array contiene leche', () => {
      const ar = funcn.devuelveArrayStr();
      expect(ar).toContain('leche');
  })
  test('Array contiene 5', () => {
      const ar = funcn.devuelveArrayNum();
      expect(ar).toContain(5);
  })
  test('Array contiene id: 5', () => {
      const ar = funcn.devuelveArrayObj();
      expect(ar).toContainEqual({ id: 5 })
  })
})

describe('Assertions con funciones mock', () => {
  test('Que la función haya sido llamada', () => {
      const mockFn = jest.fn(() => 5);
      const res = mockFn();
      expect(mockFn).toHaveBeenCalled();
  })
  test('Que la función haya sido llamada n veces', () => {
      const mockFn = jest.fn(() => 5);
      const res = mockFn();
      const res2 = mockFn();
      const res3 = mockFn();
      expect(mockFn).toHaveBeenCalledTimes(3);
  })
  test('Que la función haya sido llamada con un parámetro', () => {
      const mockFn = jest.fn(() => 5);
      const res = mockFn('prueba');
      expect(mockFn).toHaveBeenCalledWith('prueba');
  })
})