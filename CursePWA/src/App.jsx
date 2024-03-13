import { useState } from 'react'
import './App.css'

function App() {
  const [newItem, setNewItem] = useState("");
  const [Items, setItems] = useState(["Lechuga","Jamon","Pollo"]);

  const addnewItem=()=>{
    setItems([...Items,newItem]);
    setNewItem("")
  }
  return (
    <>
      <h1>--- Lista de Compras v3---</h1>
      <input type="text" onKeyDown={e=> e.key ==='Enter' && addnewItem()} onChange={e => setNewItem(e.target.value)} value={newItem}/>
      <button onClick={addnewItem}>Añadir</button>

      <ul>
        {Items.map((item,key)=> <li key={key}>{item}</li>)}
      </ul>
    {console.log("probando notificaciones")}
    </>
  )
}
export default App
