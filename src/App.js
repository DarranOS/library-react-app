import React, { useState, useEffect } from "react";
import { db, collection, onSnapshot } from "./firebase-config";
import "bootstrap/dist/css/bootstrap.css";
import "./App.scss";
import { Bookshelf } from "./components/Bookshelf/Bookshelf";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const [books, setBooks] = useState([{ name: "Loading...", id: "initial" }]);
  const [navActive, setNavActive] = useState(true);

  useEffect(
    () =>
      onSnapshot(collection(db, "books"), (snapshot) =>
        setBooks(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),
    []
  );

  const toggleMenu = () => {
    setNavActive(!navActive);
  };

  return (
    <div className="container-fluid m-0 p-0 vh-100">
      <div className="row m-0 p-0 g-0">
        {navActive ? (
          <div className="col col-4 p-2">
            <Sidebar />
          </div>
        ) : null}

        <div className="col vh-100 w-100 m-0 p-2">
          <button className="btn btn-link btn-success" onClick={toggleMenu}>
            Toggle Menu
          </button>
          <hr />

          <div className="container-fluid vh-100 w-100 p-1 m-0">
            {books ? <Bookshelf books={books} /> : "No Books found"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
