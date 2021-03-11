import firebase from "firebase/app";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyDlTW9mA_xRTaGwPi7dmfTnWAPP2D5_OgQ",
  authDomain: "thebasicyearbook.firebaseapp.com",
  projectId: "thebasicyearbook",
  storageBucket: "thebasicyearbook.appspot.com",
  messagingSenderId: "725438644760",
  appId: "1:725438644760:web:653c5ba3c733866cb8f96d",
  measurementId: "G-FRJNW9PXYT",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const options = {
  app: firebaseApp,
  logging: true,
  dontAddIdFieldToDoc: false,
};

export const db = firebase.firestore();
