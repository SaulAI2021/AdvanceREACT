import axios from "axios";
import { useState } from "react"

export default function Notification(){
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const send = () =>{
    axios.post('http://localhost:8000/custom',{
      title, message
    }).then(r => console.log(r)).catch(e => console.log(e));
  }

  return(
    <>
      <p>Gestor de notificaciones</p>
      <input type="text" placeholder="Titulo de la notificación" value={title} onChange={(e) => setTitle(e.target.value) }></input>
      <input type="text" placeholder="Contenido de la notificación" value={message} onChange={(e) => setMessage(e.target.value) }></input>
      <button onClick={send()} >Enviar</button>
    </>
  )

}