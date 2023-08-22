import React from "react";

import { Footer, Header, Section } from "../Components";

import "../Assets/Css/HomeCss/Home.css";

export const Home = () => {
  document.title = "DocAppoint";

  return (
    <>
      <Header />
      <Section />
      <Footer />
    </>
  );
};

export default Home;
