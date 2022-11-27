import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


initializeApp({
    apiKey: "AIzaSyAsSfDQsOngcAMwfPTxLClPP8N_pv5eY44",
    authDomain: "proy-4-apprestaurante-mp-71141.firebaseapp.com",
    projectId: "proy-4-apprestaurante-mp-71141", 
    storageBucket: "proy-4-apprestaurante-mp-71141.appspot.com",
    messagingSenderId: "464338702277", 
    appId: "1:464338702277:web:671d6fd802af5e6f0b45ac"
});


export const db = getFirestore();