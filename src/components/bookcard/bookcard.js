import React, { useState } from "react";
import { db } from "../../firebase-config";
import { updateDoc, doc, deleteDoc } from "../../firebase-config";

const Bookcard = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [newTitle, setNewTitle] = useState(props.title);
  const [newAuthor, setNewAuthor] = useState(props.author);
  const [newPages, setNewPages] = useState(props.pages);
  const [newRead, setNewRead] = useState(props.read);

  console.log(props);
  const deleteBook = async (id) => {
    const bookDoc = doc(db, "books", id);
    await deleteDoc(bookDoc);
    setIsDeleting(!isDeleting);
  };

  const editBook = async (id) => {
    const newFields = {
      title: newTitle,
      author: newAuthor,
      pages: newPages,
      read: newRead,
    };
    console.log(newFields);
    const bookDoc = doc(db, "books", id);
    await updateDoc(bookDoc, newFields);
    setIsEditing(!isEditing);
  };

  const optionSelectHandler = (event) => {
    console.log(event.target.value);
    setNewRead(event.target.value);
  };

  const card = () => {
    return (
      <React.Fragment>
        <h4 className="fs-3 text-primary">{props.title}</h4>
        <h5 className="fs-4">{props.author}</h5>
        <p className="text-secondary fw-lighter fst-italic fs-5">
          {props.pages + " pages"}
        </p>
        <p className="text-secondary fw-lighter fst-italic fs-5">
          {props.read ? "Finished" : "Not Read"}
        </p>
      </React.Fragment>
    );
  };

  const editingCard = () => {
    return (
      <React.Fragment>
        <h4 className="text-primary fs-4">Edit Book</h4>
        <input
          id="title"
          placeholder={props.title}
          onChange={(event) => setNewTitle(event.target.value)}
        />
        <input
          id="author"
          placeholder={props.author}
          onChange={(event) => setNewAuthor(event.target.value)}
        />

        <label htmlFor="title">Page count</label>
        <input
          id="pages"
          placeholder={props.pages}
          onChange={(event) => setNewPages(event.target.value)}
        />

        <label htmlFor="read">Have you read?</label>
        <select
          id="read"
          value="true"
          placeholder={props.read ? "Yes" : "No"}
          onChange={(event) => optionSelectHandler(event)}
        >
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
      </React.Fragment>
    );
  };

  const editingButtons = () => {
    return (
      <React.Fragment>
        <button className="btn btn-light" onClick={() => setIsEditing(!isEditing)}>
          Cancel
        </button>
        <button className="btn btn-success" onClick={() => editBook(props.id)}>
          Save
        </button>
      </React.Fragment>
    );
  };

  const deletingButtons = () => {
    return (
      <React.Fragment>
        <p>Confirm delete?</p>
        <button className="btn btn-light" onClick={() => setIsDeleting(!isDeleting)}>
          Cancel
        </button>
        <button className="btn btn-danger" onClick={() => deleteBook(props.id)}>
          Delete
        </button>
      </React.Fragment>
    );
  };

  const buttons = () => {
    return (
      <React.Fragment>
        <button className="btn btn-info" onClick={() => setIsEditing(!isEditing)}>
          Edit
        </button>
        <button className="btn btn-secondary" onClick={() => setIsDeleting(!isDeleting)}>
          Delete
        </button>
      </React.Fragment>
    );
  };

  return (
    <div className="d-flex flex-column bg-light rounded">
      <div>{isEditing ? editingCard() : card()}</div>

      <div className="align-self-end">
        {!isEditing && !isDeleting ? buttons() : null}
        {isEditing ? editingButtons() : null}
        {isDeleting ? deletingButtons() : null}
      </div>
    </div>
  );
};

export default Bookcard;
