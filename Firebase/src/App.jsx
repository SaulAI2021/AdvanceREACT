/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { useState, createContext,useContext } from 'react'
import { app,messaging } from './Components/Firebaseconfig'
import Header from './Components/Header'
import Footer from './Components/footer';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import toast, { Toaster } from 'react-hot-toast';
import { onMessage } from 'firebase/messaging';
import Shooping from './Shooping';
import TaskList from './Components/TaskList';

export const appContext = createContext(null);

onMessage(messaging ,(payload) => {
  toast(payload.notification.body);
})

function App() {
  const [route, setRoute] = useState("Home")
  const [user,setUser] = useState(null)

  return (
    <appContext.Provider value={{route,setRoute,user,setUser}}>
      <div className='h-screen'>
      <Toaster/>
      <Header/>
      <main className='px-6 pt-24 pb-20'>
        {route ==="Home" && <Home/>}
        {route ==="Login" && <Login/>}
        {route ==="Register" && <Register/>}
        {route === "Shopping" && <Shooping/>}
        {route === "Tasklist" && <TaskList/>}
        {user && <p>Usuario Logueado : {user.email}</p>}
      </main>
      <Footer/>
      </div>
    </appContext.Provider>
  )
}

export default App
