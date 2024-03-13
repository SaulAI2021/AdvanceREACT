/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useState } from "react"
import {IoPlay} from 'react-icons/io5'
function App() {
  const [busqueda, setBusqueda] = useState("");
  const [listado, setListado] = useState([]);

  const Buscar = () => {
    const url = `https://de1.api.radio-browser.info/json/stations/byname/${busqueda}`;
    axios.get(url).then(r => setListado(r.data)).catch(e => console.log(e));
  }

  const playRadio = (radio) => {
    const audio = new Audio(radio.url)
    audio.play();
  }
  return (
    <>
      <div>
        <h1>Bienvenido</h1>
        <p>OpenRadioCamp</p>
        <input type="text" placeholder="Escribe el nombre de la radio" value={busqueda} onChange={e => setBusqueda(e.target.value)}/>
        <button onClick={Buscar}>Buscar</button>
        {listado.length> 0 && <div aria-label="length-not-null"></div>}
        <section aria-label="listado-emisoras">
          {
            listado.map(
              (emisora,i) =>
                <div key={i}>
                  {emisora.name}
                  <IoPlay style= {{cursor : 'pointer'}} onClick={
                    ()=> playRadio(emisora)
                  }/>
                </div>
            )
          }
        </section>
      </div>
    </>
  )
}

export default App