// Documentation
// https://firebase.google.com/docs/database/web/read-and-write

// Import Firebase SDK
import {initializeApp} from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import {
  getDatabase,
  push,
  serverTimestamp,
  set,
  ref,
} from "https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyBMZYYOZ97A6jR__ZZE-Ms22yyie2cWhAc",
    authDomain: "fir-project-3e629.firebaseapp.com",
    // databaseURL: "https://fir-project-3e629-default-rtdb.firebaseio.com",
    projectId: "fir-project-3e629",
    storageBucket: "fir-project-3e629.firebasestorage.app",
    messagingSenderId: "946981771164",
    appId: "1:946981771164:web:b9b3a0f5d2a923dd6d9a59",
    measurementId: "G-FMEQG9RYWH"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

// Initialize Database
const database = getDatabase();
const messages = ref(database, "/messages");

const submit = document.getElementById("submit");

submit.addEventListener("click", function() {
    const name = document.getElementById("name");
    const message = document.getElementById("message");

    const newMessage = push(messages);

    set(newMessage, {
        name: name.value,
        message: message.value,
        created_at: serverTimestamp(),
      });
   
      name.value = "";
      message.value = "";
});