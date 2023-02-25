import React from "react";
import "../Css/HomeCss/ArticleTwo.css";
import Card from "./Card";

const ArticleTwo = () => {
  return (
    <>
      <article class="card_container height_article_2">
        <div class="cards_info">
          <h1 class="article_title">Réservez notre médecin</h1>
          <div class="cards_">
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
