// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsStWUfAV9chVszATjKFrSlWo0-E9apTE",
  authDomain: "fotos-sttoria.firebaseapp.com",
  projectId: "fotos-sttoria",
  storageBucket: "fotos-sttoria.appspot.com",
  messagingSenderId: "707192251575",
  appId: "1:707192251575:web:e3d18fcc2f7bf02c105932",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
