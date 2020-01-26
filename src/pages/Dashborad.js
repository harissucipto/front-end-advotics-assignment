import React from "react";

import "./dashboard.css";
import Layout from "../components/Layout";
import DashBoardTitle from "../components/DashBoardTitle";
import DashboardInsight from "../components/DashboardInsight";
import SalesTurnOver from "../components/SalesTurnOver";
import AveragePurchaseValue from "../components/AveragePurchaseValue";
import BestSellingSKU from "../components/BestSellingSKU";
import TopCompetitorSKU from "../components/TopCompetitorSKU";

const Dashborad = () => {
  return (
    <React.Fragment>
      <Layout>
        <div className="dashboard">
          <DashBoardTitle />
          <DashboardInsight />
          <SalesTurnOver />
          <div className="dashboard-content">
            <AveragePurchaseValue />
            <BestSellingSKU />
            <TopCompetitorSKU />
          </div>
        </div>
      </Layout>
    </React.Fragment>
  );
};

export default Dashborad;
