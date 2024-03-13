/* eslint-disable no-undef */

import React from "react";
import { render } from "@testing-library/react";
import ListadoNotas from "./ListadoNotas"

describe('react - testeamos los componentes', () => {
  test('Listado de notas', () => {
    const r = render(< ListadoNotas/>);
    expect(r).toBeDefined();
  })
  test('Listado rendirizado correctamente', () => {
    const notas = ["bajar la basura","comprar huevos"];
    const r = render(<ListadoNotas notas={notas} />)
    expect(r).toBeDefined();
  })
  
})
