import { initializeApp } from "firebase/app";

export const FirebaseClient = initializeApp({
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGE_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID,

  // apiKey: "AIzaSyA_gHHblzeVzsqruHiw9ZjcjLjp2SeLolo",
  // authDomain: "react-firebase-chat-4f595.firebaseapp.com",
  // projectId: "react-firebase-chat-4f595",
  // storageBucket: "react-firebase-chat-4f595.appspot.com",
  // messagingSenderId: "895303272197",
  // appId: "1:895303272197:web:5a82dbcc84f085ca91996c",
  // measurementId: "G-JM1J9559CZ",
});
