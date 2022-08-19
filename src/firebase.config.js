import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDUJZ2oacJ5DrAF54z0_U82PyPifpmbg2w",
  authDomain: "house-marketplace-app-d4f7e.firebaseapp.com",
  projectId: "house-marketplace-app-d4f7e",
  storageBucket: "house-marketplace-app-d4f7e.appspot.com",
  messagingSenderId: "580861228282",
  appId: "1:580861228282:web:3c9d210d7cf34e3e064543"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore()