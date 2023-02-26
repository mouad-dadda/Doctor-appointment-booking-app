import React from "react";

import { Footer, Header, InputSearch, Section } from "../Components";
import "../Components/Css/HomeCss/SearchDoctors.css";

const SearchDoctors = () => {
  return (
    <>
      <Header />
      <section>
        <div className="_img_cover">
          <div className="search_bar">
            <form onSubmit={(e) => e.preventDefault()}>
              <InputSearch label="Specialty" placeholder="Choose specialty" />
              <InputSearch label="Ville" placeholder="Choose Ville" />
              <InputSearch label="Docteur" placeholder="Choose Docteur" />
              <InputSearch label="Hôpital" placeholder="Choose Hospital" />
              <button className="btn_search btn_bg_primary ">Search</button>
            </form>
          </div>
        </div>
        <aside>
          <div>
            
          </div>
        </aside>
      </section>
      <Footer />
    </>
  );
};

export default SearchDoctors;
