// Documentation
// https://firebase.google.com/docs/database/web/read-and-write

// Import Firebase SDK
import {initializeApp} from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import {
  getDatabase,
  onValue,
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

// Load messages on data event
onValue(messages, (snapshot) => {
  // Create a reference
  const ul = document.getElementById("messages");
  ul.replaceChildren();

  // Loop through messeages and add them to the ul
  snapshot.forEach((childSnapshot) => {
    // Fetch the data from the snapshot
    const childData = childSnapshot.val();

    // Create a text node with message and name
    const text = document.createTextNode(
      childData.message + " ~ " + childData.name
    );

    // Create a li element
    const li = document.createElement("li");

    // Append li and text to the ul
    li.appendChild(text);
    ul.appendChild(li);
  });
});