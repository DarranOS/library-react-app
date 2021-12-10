import React, { useState } from "react";
import { db, collection, addDoc } from "../../firebase-config";
import "./inputNewForm.css";

const InputNewForm = (props) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [pages, setPages] = useState(0);
  const [read, setRead] = useState("true");

  const booksCollectionRef = collection(db, "books");

  const addBook = async () => {
    await addDoc(booksCollectionRef, {
      title: title,
      author: author,
      pages: Number(pages),
      read: read,
    });
  };

  return (
    <div className="sidebar-nav">
      <input placeholder="Title" onChange={(event) => setTitle(event.target.value)} />
      <input placeholder="Author" onChange={(event) => setAuthor(event.target.value)} />
      <input
        placeholder="Page Count"
        onChange={(event) => setPages(event.target.value)}
      />
      <label htmlFor="read">Have you read it?</label>
      <select id="read" onChange={(event) => setRead(event.target.value)}>
        <option value="true">Yes</option>
        <option value="false">Not yet</option>
      </select>

      <button
        className="btn btn-info"
        onClick={() => {
          addBook(props.id, props.pages);
        }}
      >
        Add Book
      </button>
    </div>
  );
};
export default InputNewForm;
