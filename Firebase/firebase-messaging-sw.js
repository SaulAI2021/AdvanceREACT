/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./firebase-messaging-sw.js')
    .then(function(registration) {
      console.log('Registration successful, scope is:', registration.scope);
    }).catch(function(err) {
      console.log('Service worker registration failed, error:', err);
    });
  }


importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyDd0e1LHny6jz2xcR_yDdpB1OC2QoDxH7U",
  authDomain: "tasklist-26540.firebaseapp.com",
  projectId: "tasklist-26540",
  storageBucket: "tasklist-26540.appspot.com",
  messagingSenderId: "562376617815",
  appId: "1:562376617815:web:7da247434c3171aac41812"
});
const messaging = firebase.messaging();
