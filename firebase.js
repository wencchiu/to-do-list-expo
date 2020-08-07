import * as firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyC-ECMluxBc6VCoLuEkEYQKLdKcJoSNJ4Q",
  authDomain: "todoapp-178e1.firebaseapp.com",
  databaseURL: "https://todoapp-178e1.firebaseio.com",
  projectId: "todoapp-178e1",
  storageBucket: "todoapp-178e1.appspot.com",
  messagingSenderId: "754051972920",
  appId: "1:754051972920:web:a5b572b05d3dbe12c0cbcd",
};

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
export const ref = db.collection("todoApp").doc("todos");

// ref.get().then((doc) => {
//   console.log(doc.data());
// });

export default firebase;
