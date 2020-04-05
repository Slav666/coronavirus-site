import React from "react";
import "../styles/Articles.css";

const Article = ({ title, text }) => {
  return (
    <article>
      <h3 className="title">{title}</h3>
      <p className="text">{text}</p>
    </article>
  );
};

export default Article;
