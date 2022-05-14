import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCPuk8fYScaYZbFsYSuDyj6Yf9cCCFMbC8",
  authDomain: "employee-register-7ec11.firebaseapp.com",
  projectId: "employee-register-7ec11",
  storageBucket: "employee-register-7ec11.appspot.com",
  messagingSenderId: "84407903559",
  appId: "1:84407903559:web:134daa8ac7fcaee1015862"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);