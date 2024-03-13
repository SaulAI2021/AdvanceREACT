import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    VitePWA({
      registerType: 'autoUpdate', //registra el sevice worker de forma automatica, con  injectRegister: podemos manejar de forma manual la instalación
      injectRegister: 'false',
      manifest:{
        icons:[
          {
            src: "/android-chrome-192x192.png",
            sizes: "192x192",
            type:"image/png",
            purpose: "any"
          },
          {
            src: "/android-chrome-512x512.png",
            sizes: "512x512",
            type:"image/png",
            purpose: "any"
          }
        ],
        theme_color : "#3367D6"
      }
    })
  ],
})
