import { useEffect, useState } from "react"
import { useContext } from "react";
import { addNewTask, deleteTask, getTasks, updateTask } from "./taskController";
import { appContext } from "../App";

const TaskList = () => {
  const {user} =  useContext(appContext);
  const [task, setTask] = useState({title: "", description:""});
  const [tasks , setTasks] = useState([]);
  const [mode,setMode] = useState("add");
  
  const createNewTask = async ()  =>{
    await addNewTask(task);
    setTask({title:"", description:""});
    initializeTasks();
  }

  const updateExistTask = async () => {
    await updateTask(task);
    setTask({title:"", description:""});
    initializeTasks();
    setMode("add");
  }
  const initializeTasks =  () =>{
    getTasks().
    then((t) => setTasks([...t])).
    catch((e)=>{console.error(e);})
  };
  

  const removeTask = async (id)  =>{
    await deleteTask(id);
    initializeTasks();
  };

  const  editTask = (id) => {
    const taskedit = tasks.find((t) => t.id === id);
    setTask({...taskedit});
    setMode("actu");
    console.log(id);
  }


  useEffect(()=>{
    initializeTasks();
  },[]);
  return (
    <div>
      <h1 className="text-sky-700 font-semibold text-lg">
        Lista de Tareas
      </h1>
      <div  className="flex flex-col gap-4">
        {user ? (<>
        <h2>Nueva Tarea</h2>
        <input type="text"
          value={task.title}
          placeholder="Titulo"
          className="border shadow outline-none focus:ring ring-sky-200 rounded px-2 py-1 w-full"
          onChange={(e)=> setTask({...task, title:e.target.value})}
        />
        <textarea type="text"
          rows={3}
          value={task.description}
          placeholder="Descripción"
          className="border shadow outline-none focus:ring ring-sky-200 rounded px-2 py-1 w-full"
          onChange={(e)=> setTask({...task, description:e.target.value})}
        />
        <button className="bg-sky-400 text-white rounded shadow py-1 hover:bg-sky-500 transition font-bold"
        onClick={mode === "add" ? createNewTask : updateExistTask}
        >{mode === "add" ? "Añadir" : "Actualizar"}</button>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {
            tasks.map((task)=>(
            <div key={task.id} className="rounded-lg border border-sky-300 p-4 flex flex-col gap-2">
              <h1 className="font-semibold">{task.title}</h1>
            <div className="border-t border-sky-300"></div>
            <p>{task.description}</p>
            <div className="flex justify-between">
              <button
                className="bg-sky-400 text-white py-1 px-2 rounded"
                onClick={() => editTask(task.id)}
              >Editar</button>
              <button
                className="bg-red-600 text-white py-1 px-2 rounded"
                onClick={() =>
                  window.confirm("¿Seguro que quieres eliminar esta tarea?") &&
                  removeTask(task.id)
                }
              >Eliminar
              </button>
            </div>
            </div>
            ))
          }
        </div> </>) : (
      <div>
        Necesitas logearte para poder registrar tareas
      </div>)}
      </div>
    </div>
  )
}

export default TaskList
