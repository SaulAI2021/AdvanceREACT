import {SiFirebase} from 'react-icons/si'
import { useContext } from 'react'
import { appContext } from '../App'
import { getAuth, signOut } from "firebase/auth";
import toast from 'react-hot-toast';

const auth = getAuth();

const Header = () => {
  const {user,setRoute,setUser} = useContext(appContext);
  const logout = () =>{
    signOut(auth).then(() => {
      // Sign-out successful.
      setRoute("Login");
      setUser(null);
      toast("Termino la sesion")
    }).catch((error) => {
      // An error happened.
      console.log(error);
    });
  }
  return (
    <header className="h-20 w-full bg-gray-100 shadow-lg flex items-center justify-between px-8">
        <div className='flex items-center gap-2 cursor-pointer' onClick={()=>setRoute("Home")}>
          <SiFirebase className='text-2xl text-pink-600'/>
          <p className='text-xl font-semibold text-pink-600'>FireApp</p>
        </div>
        <div className='flex gap-2'>
          {
            user ? (<>
            <button onClick={logout}>
              Logout
            </button>
          </>
            ) : (
              <>
              <button className='bg-sky-500 text-white py-1 px-3 rounded-full' onClick={()=>setRoute("Login")}>Login</button>
              <button className='bg-sky-500 text-white py-1 px-3 rounded-full' onClick={()=>setRoute("Register")}>Registrarse</button>
              </>
            )
          }
          </div>
      </header>
  )
}

export default Header
