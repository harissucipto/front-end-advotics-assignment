import React from "react";

import "./dashboard.css";
import Layout from "../components/Layout";
import DashBoardTitle from "../components/DashBoardTitle";
import DashboardInsight from "../components/DashboardInsight";

const Dashborad = () => {
  return (
    <React.Fragment>
      <Layout>
        <div className="dashboard">
          <DashBoardTitle />
          <DashboardInsight />
        </div>
      </Layout>
    </React.Fragment>
  );
};

export default Dashborad;
