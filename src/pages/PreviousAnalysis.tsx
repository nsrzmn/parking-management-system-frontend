import React from "react";
import RevenueSummary from "../components/pervious-analysis/RevenueSummary";
import ParkingOccupancyChart from "../components/pervious-analysis/ParkingOccupancyChart";
import VehicleTypeChart from "../components/pervious-analysis/VehicleTypeChart";
import EVRevenueSummary from "../components/pervious-analysis/EVRevenueSummary";
import LoyaltyCardSummary from "../components/pervious-analysis/LoyaltyCardCustomersChart";
import PaymentMethodChart from "../components/pervious-analysis/PaymentMethodChart";

const PreviousAnalysis: React.FC = () => {
  return (
    <div className="p-4">
      <div className="bg-white p-4 rounded shadow-sm">
        <h4 className="mb-4">Previous Analysis</h4>

        {/* Revenue Summary */}
        <RevenueSummary />

        {/* Parking Occupancy */}
        <ParkingOccupancyChart />

        {/* Charts Row: Vehicle Types and EV Revenue */}
        <div className="row g-3">
          <div className="col-md-6">
            <VehicleTypeChart />
          </div>
          <div className="col-md-6">
            <EVRevenueSummary />
          </div>
        </div>

        {/* Charts Row: Loyalty Summary and Payment Method */}
        <div className="row g-3 mt-2">
          <div className="col-md-6">
            <LoyaltyCardSummary />
          </div>
          <div className="col-md-6">
            <PaymentMethodChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviousAnalysis;
