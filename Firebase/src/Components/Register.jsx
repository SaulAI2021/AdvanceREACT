/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState,useContext } from "react";
import toast from "react-hot-toast";
import { appContext } from "../App";
const auth = getAuth();

export default function Register() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const {setRoute,setUser} = useContext(appContext);
  const crearUser= ()=>{
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      // ...
      toast(`Usuario ${email} registrado correctamente`);
      setRoute("Home");
      setUser(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
  }
  const handleSubmit =(e)=>{
    e.preventDefault();
    crearUser();
  }
  return (
    <div className="Register flex flex-col gap-4 items-center">
      <h1 className="text-sky-600 font-semibold">Registrate en mi app</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 max-w-sm">
        <input className="border border-gray-500 rounded py-1 px-2 outline-none" type="email" value={email} placeholder="Email" onChange={ e => setEmail(e.target.value)} />
        <input className="border border-gray-500 rounded py-1 px-2 outline-none" type="password" value={password} placeholder="Password" onChange={ e => setPassword(e.target.value)} />
        <button className="bg-sky-400 py-1 text-white rounded shadoww">Registrarte</button>
      </form>
    </div>
  )
}
