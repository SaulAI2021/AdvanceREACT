import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import * as serviceWorker from '../public/service-worker.js';
import axios from 'axios';
import Notification from './components/SendNotify.jsx';

const PublicKey = "BBz4asOwbOrOTTHEvr_qmEVrgwrARNJMo6sQUy6eR8hN1lvadL02w6JKr988vUvFLqWnsz07DuKB35CG5C25Q7I";
const PrivKey ="r0m3qrxJS4AiB4_Lq-QbjwMtp_kIqShLAMRdoMbCmlE";
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*<App />*/}
    <Notification/>
  </React.StrictMode>,
)
// En tu archivo app.tsx
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js')
    .then((registration) => {
      registration.pushManager.getSubscription().
      then(async sub => {
        const pushSub = await registration.pushManager.subscribe({
        userVisibleOnly : true,
        applicationServerKey: PublicKey
      });
      await axios.post('http://localhost:8000/subscription',pushSub);
    })
      console.log('Service Worker registrado con éxito:', registration);
    })
    .catch((error) => {
      console.error('Error al registrar el Service Worker:', error);
    });
}
