
import { initializeApp } from "firebase/app";
import { getMessaging,getToken } from "firebase/messaging";
import { getFirestore } from "firebase/firestore";

const vapidKey = "BDHrnXaYwUC_eJPS62Xeb4XZocBCUf5yEiRzwDsuU1Bf2Qtd6EjzpbJ8p6q3Kyh3lnG817aCB07KhJZs0rD1cwI"
const firebaseConfig = {
  apiKey: "AIzaSyDd0e1LHny6jz2xcR_yDdpB1OC2QoDxH7U",
  authDomain: "tasklist-26540.firebaseapp.com",
  projectId: "tasklist-26540",
  storageBucket: "tasklist-26540.appspot.com",
  messagingSenderId: "562376617815",
  appId: "1:562376617815:web:7da247434c3171aac41812"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);
getToken(messaging, {vapidKey})
.then((currentToken) => {
  if(currentToken){
    console.log("current",currentToken);
    sendTokenServer(currentToken);
  }else{
    console.log("No registration token");
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
  // ...
});

const sendTokenServer = (token) =>{
  if(localStorage.getItem('tokenToServer')) return;

  localStorage.setItem('tokenToServer',token)
}
export const db = getFirestore(app);