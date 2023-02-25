import React from 'react'

import '../Css/HomeCss/ArticleOne.css'

const ArticleOne = () => {
  return (
      <article className="height_article_1 _container">
    <div  className=" article_info text_center">
      <h1>Service de haute qualité pour vous</h1>
      <p>Le site compte de nombreux medecins dans differentes specialites</p>
      <div className="article_img">
        <img src="./img/Rectangle 4.jpg" alt=""/>
        <img src="./img/Rectangle 5.jpg" alt=""/>
        <img src="./img/Rectangle 6.jpg" alt=""/>
      </div>
    </div>
  </article>
  )
}

export default ArticleOne