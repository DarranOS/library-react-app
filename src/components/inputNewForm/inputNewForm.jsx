import React, { useState } from "react";
import { db } from "../../firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";

const InputNewForm = (props) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [pages, setPages] = useState(0);
  const [read, setRead] = useState("");

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

  return (
    <div>
      <input placeholder="Title" onChange={(event) => setTitle(event.target.value)} />
      <input placeholder="Author" onChange={(event) => setAuthor(event.target.value)} />
      <input
        placeholder="Page Count"
        onChange={(event) => setPages(event.target.value)}
      />
      <input
        placeholder="Have you read?"
        onChange={(event) => setRead(event.target.value)}
      />

      <button
        onClick={() => {
          updateBook(props.id, props.pages);
        }}
      >
        Edit Book
      </button>
      <button
        onClick={() => {
          deleteBook(props.id, props.pages);
        }}
      >
        Delete Book
      </button>
    </div>
  );
};
export default InputNewForm;
