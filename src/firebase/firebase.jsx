import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAJ7b39r6vr4A0aGQbj32HuKZMLiNuNi-o",
  authDomain: "studybuddy-4b78f.firebaseapp.com",
  projectId: "studybuddy-4b78f",
  storageBucket: "studybuddy-4b78f.appspot.com",
  messagingSenderId: "734258626145",
  appId: "1:734258626145:web:412700517f31319c00f420",
  measurementId: "G-W0BYPCREX1",
};

initializeApp(firebaseConfig);

export const db = getFirestore();
