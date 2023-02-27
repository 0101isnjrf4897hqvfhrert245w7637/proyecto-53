import firebase from 'firebase';

// Agregar SDK Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCNrO-FmkJ6r0zwBF19cGxIxg7HRxPD4cY",
  authDomain: "contribuyendo-al-codigo.firebaseapp.com",
  databaseURL: "https://contribuyendo-al-codigo-default-rtdb.firebaseio.com",
  projectId: "contribuyendo-al-codigo",
  storageBucket: "contribuyendo-al-codigo.appspot.com",
  messagingSenderId: "960033916067",
  appId: "1:960033916067:web:0cd1d71e4430eba8372b16"
};
// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
