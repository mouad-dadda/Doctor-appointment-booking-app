import React from "react";
import "../Css/HomeCss/ArticleTwo.css";
import Card from "./Card";

const ArticleTwo = () => {
  return (
    <>
      <article className="card_container height_article_2">
        <div className="cards_info">
          <h1 className="article_title">Réservez notre médecin</h1>
          <div className="cards_">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </article>
    </>
  );
};

export default ArticleTwo;
