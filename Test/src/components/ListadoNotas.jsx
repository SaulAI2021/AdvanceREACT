/* eslint-disable no-unused-vars */
import React from "react";

/**
 * Componente que muestra la lista de tareas
 * @returns  {React.Component}
 */
const ListadoNotas = ({ notas = [] }) => {
  return (
    <div className="lista-notas" aria-label="listado-notas">
      {notas.map((nota, i) => (
        <div key={i}>{nota}</div>
      ))}
    </div>
  );
};

export default ListadoNotas;