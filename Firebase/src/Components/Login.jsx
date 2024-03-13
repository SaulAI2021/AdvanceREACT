/* eslint-disable no-unused-vars */
import { GoogleAuthProvider,getAuth,signInWithPopup,signInWithEmailAndPassword} from "firebase/auth";
import { useState,useContext } from "react";
import { appContext } from "../App";
import toast from "react-hot-toast";

const provider = new GoogleAuthProvider();
const auth = getAuth();

const Login= ()=> {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const {setRoute,setUser} = useContext(appContext);
  const hazLogin = ()=>{
    signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
      console.log('token',token);
      console.log('User',user);
      toast("Inicio de sesion valido");
      setUser(user);
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
  }

  const loginEmail=(e)=>{
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    toast("Inicio de sesion valido");
    setUser(user);
   })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    });
  }
  return (
    <div className="Login flex flex-col gap-4 items-center">
      <h1 className="text-xl font-semibold text-sky-700">
      Bienvenidos a mi Login
      </h1>
      <p>Clic en el boton para logearte</p>
      <div className="flex flex-col">
      <form onSubmit={loginEmail} className="flex flex-col gap-2 max-w-sm">
        <input className="border border-gray-500 rounded py-1 px-2 outline-none" type="email" value={email} placeholder="Email" onChange={ e => setEmail(e.target.value)} />
        <input className="border border-gray-500 rounded py-1 px-2 outline-none" type="password" value={password} placeholder="Password" onChange={ e => setPassword(e.target.value)} />
        <button className="bg-sky-400 py-1 text-white rounded shadoww">Login</button>
      </form>
        <button onClick={hazLogin}>Login con Google</button>
      </div>
    </div>
  )
}

export default Login