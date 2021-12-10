import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  addDoc,
  setDoc,
  updateDoc,
  onSnapshot,
  deleteDoc,
} from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBWq4clFQnEBwgcMoKC-m53uC2RhTP0D_w",
  authDomain: "mylibrary-d29d1.firebaseapp.com",
  projectId: "mylibrary-d29d1",
  storageBucket: "mylibrary-d29d1.appspot.com",
  messagingSenderId: "386912897196",
  appId: "1:386912897196:web:e7a242ef0694b58d1d3709",
};

// eslint-disable-next-line no-unused-vars
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export { db, collection, getDocs, doc, addDoc, setDoc, updateDoc, onSnapshot, deleteDoc };
