import React from "react";
import Bookcard from "../bookcard/bookcard";

export const Bookshelf = (props) => {
  return (
    <div className="row p-0 w-100 bg-secondary">
      {props.books.map((book) => (
        <div className="w-75 mx-5">
          <Bookcard {...book} key={book.id} />
        </div>
      ))}
    </div>
  );
};
