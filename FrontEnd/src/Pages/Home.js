import React from 'react'

import { ArticleOne, ArticleTwo, Aside, Footer, Header, Section } from '../Components'

import './css/Home.css'

export const Home = () => {
  return (
    <>
    <Header/>
    <Section/>
    <ArticleOne/>
    <ArticleTwo/>
    <Aside/>
    <Footer/>
    </>
  )
}

export default Home