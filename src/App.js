import React, { useState, useEffect } from "react";
import Bookcard from "./components/bookcard/bookcard";
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
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [pages, setPages] = useState(0);
  const [read, setRead] = useState("");

  const [books, setBooks] = useState([]);
  const booksCollectionRef = collection(db, "books");

  const addBook = async () => {
    await addDoc(booksCollectionRef, {
      title: title,
      author: author,
      pages: Number(pages),
      read: read,
    });
  };

  const updateBook = async (id, pages) => {
    const newFields = { pages: pages + 100 };
    const bookDoc = doc(db, "books", id);
    await updateDoc(bookDoc, newFields);
  };

  const deleteBook = async (id) => {
    const bookDoc = doc(db, "books", id);
    await deleteDoc(bookDoc);
  };
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
      <div className={classes.Grida}>
        <React.Fragment>
          <input placeholder="Title" onChange={(event) => setTitle(event.target.value)} />
          <input
            placeholder="Author"
            onChange={(event) => setAuthor(event.target.value)}
          />
          <input
            placeholder="Page Count"
            onChange={(event) => setPages(event.target.value)}
          />
          <input
            placeholder="Have you read?"
            onChange={(event) => setRead(event.target.value)}
          />

          <button onClick={addBook}>Add Book</button>

          {books.map((book) => (
            <div className={classes.bookDiv}>
              <Bookcard {...book} />
              <button
                onClick={() => {
                  updateBook(book.id, book.pages);
                }}
              >
                Edit
              </button>
              <button
                onClick={() => {
                  deleteBook(book.id);
                }}
              >
                Delete
              </button>
            </div>
          ))}
        </React.Fragment>
      </div>
    </div>
  );
}

export default App;
