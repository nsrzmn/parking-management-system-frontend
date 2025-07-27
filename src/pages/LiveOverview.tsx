// pages/LiveOverview.tsx

import React from "react";
import TopStats from "../components/live-overview/TopStats";
import CustomerStats from "../components/live-overview/CustomerStats";
import ParkingOccupancyGrid from "../components/live-overview/ParkingOccupancyGrid";
import EVStationsOccupancy from "../components/live-overview/EVStationsOccupancy";
import LoyaltyCardCustomers from "../components/live-overview/LoyaltyCardCustomers";
import CurrentParkingTable from "../components/live-overview/CurrentParkingTable";
import "../styling/LiveOverview.css";

const LiveOverview: React.FC = () => {
  return (
    <div className="live-overview-wrapper p-4">
      <div className="main-card p-4 rounded shadow-sm bg-white">
        <h4 className="mb-4">Live Overview</h4>

        <TopStats />
        <CustomerStats />

        <div className="row g-3 mb-4 align-items-start">
          <div className="col-lg-6">
            <ParkingOccupancyGrid />
          </div>
          <div className="col-lg-6 d-flex flex-column gap-3">
            <EVStationsOccupancy />
            <LoyaltyCardCustomers />
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <CurrentParkingTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveOverview;
