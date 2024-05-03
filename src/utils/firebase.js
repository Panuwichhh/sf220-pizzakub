// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwqxQabb2MIis6sRO50fFINpyBLazj25U",
  authDomain: "pizza-f208b.firebaseapp.com",
  databaseURL:
    "https://pizza-f208b-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "pizza-f208b",
  storageBucket: "pizza-f208b.appspot.com",
  messagingSenderId: "912481948092",
  appId: "1:912481948092:web:6c8c514c4de65c73a75bb9",
  measurementId: "G-EF2DT82YM5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



//ตั้งค่าตัวแปร 
const db = getFirestore(app);
const imgeDB = getStorage(app)



//ส่งตัวแปร
export { imgeDB ,db};
