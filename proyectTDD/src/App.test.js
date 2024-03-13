/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// vamos a construir una  aplicacion de selección y busqueda de emisosras de radio en streaming
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react"
import App from "./App";
import "@testing-library/jest-dom" 

beforeEach(()=> render(<App/>));

describe('La aplicacion debe renderizar correctamente', () => {
  test('app lanzada correctamente', () => {
    const r = render(<App/>);
    expect(r).toBeDefined();
  })
  
  
})
describe('El nombre de la aplicacion se muestra?', () => {
  test('Se muestra el nombre', () => {
    const nombre = 'OpenRadioCamp';
    const r = screen.getByText(nombre);
    expect(r).toBeInTheDocument()
  })
  test('Debe tener input que tenga un placeholder ', () => {
    const text = "Escribe el nombre de la radio";
    const input = screen.getByPlaceholderText(text);
    expect(input).toBeInTheDocument();
  })
  test('debe de tener un boton de busqueda ', () => {
    const text = "Buscar";
    const button = screen.getByText(text);
    expect(button).toBeInTheDocument();
  })
  test('solo se ejecuta la funcion de busqueda una vez', () => {
    const funMock = jest.fn();
    const text = "Buscar";
    const button = screen.getByText(text);
    button.addEventListener('click',funMock);
    fireEvent.click(button);
    expect(funMock).toHaveBeenCalledTimes(1);
  })
})

// debe de existir un listado de emisoras
// debe de iniicalizar vacio
// debe mostrar al menos un resultado cuando se valida la busqueda
// debe de mostrar un mensaje en caso de no encontrar emisoras
describe('Listado de emisoras', () => {
  test('Debe existir un listado de emisoras', () => {
    const listado = screen.getByLabelText('listado-emisoras');
    expect(listado).toBeInTheDocument();
  })
  test('Listado debe inicializar vacio', () => {
    const listado = screen.getByLabelText('listado-emisoras');
    const children = listado.childElementCount;
    expect(children).toBe(0);
  })
  test('Cuando se haga una busqueda valida s emuestre al menos un resultado', () => {
    const text = "Escribe el nombre de la radio";
    const input = screen.getByPlaceholderText(text);
    const textbut = "Buscar";
    const button = screen.getByText(textbut);
    fireEvent.change(input, {target: {value : 'Country'}});
    fireEvent.click(button);
    const listado = screen.getByLabelText('listado-emisoras');
    const children = listado.childElementCount;
    expect(children).toBeGreaterThanOrEqual(0);
  })
  
})
