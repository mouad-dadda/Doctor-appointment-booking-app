import React from "react";
import { Content, Header, Menu } from "../../Components/Doctors";

import "../Asset/Css/Dashboard.css";

const Dashboard = () => {
  return (
    <div className=" row">
      <Menu />
      <div className="col-10">
        <Header />
        <Content />
      </div>
    </div>
  );
};

export default Dashboard;
