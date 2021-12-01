import React, { useState, useEffect } from "react";
import Bookcard from "./components/bookcard/bookcard";
import InputNewForm from "./components/inputNewForm/inputNewForm";
import classes from "./App.module.css";
import { db } from "./firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";

function App() {
  const [books, setBooks] = useState("");
  const booksCollectionRef = collection(db, "books");

  useEffect(() => {
    const getBooks = async () => {
      const data = await getDocs(booksCollectionRef);
      setBooks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(books);
    };

    getBooks();
  }, []);

  return (
    <div className={classes.App}>
      <div className={classes.Grid}>
        <React.Fragment>
          <div className={classes.Sidebar}>
            <InputNewForm />
            <p>Built for Odin Project</p>
            <p>React JS</p>
            <p>Bootstrap</p>
            <p>Firebase</p>
          </div>
          <div className={classes.Bookshelf}>
            {books
              ? books.map((book) => (
                  <div>
                    <Bookcard {...book} />
                  </div>
                ))
              : null}
          </div>
        </React.Fragment>
      </div>
    </div>
  );
}

export default App;
