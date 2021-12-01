import React, { useState } from "react";
import classes from "./bookcard.module.css";

const Bookcard = (props) => {
  return (
    <div className={classes.BookCard}>
      <h4>{props.title}</h4>
      <h5>{props.author}</h5>
      <p className={classes.Italics}>{props.pages} pages</p>

      <p>{props.read}</p>
    </div>
  );
};

export default Bookcard;
