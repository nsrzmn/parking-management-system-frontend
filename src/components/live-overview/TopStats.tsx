// components/TopStats.tsx

import React from "react";
import { faker } from "@faker-js/faker";
import "../../styling/TopStats.css";

const generateTopStats = () => {
  const totalParking = 50;
  const occupiedParking = faker.number.int({ min: 10, max: totalParking });

  const totalEV = 9;
  const occupiedEV = faker.number.int({ min: 1, max: totalEV });

  const revenue = faker.finance.amount({ min: 1000, max: 5000, dec: 0 }); // No decimals

  const loyaltyCustomers = faker.number.int({ min: 1, max: 10 });

  return [
    {
      label: "Parking Lots Occupied",
      value: `${occupiedParking} / ${totalParking}`,
      color: "text-danger",
    },
    {
      label: "EV Charging Occupation",
      value: `${occupiedEV} / ${totalEV}`,
      color: "text-danger",
    },
    {
      label: "Today's Collection",
      value: `£${revenue}`,
      color: "text-dark fw-bold",
    },
    {
      label: "Loyalty Card Customers",
      value: `${loyaltyCustomers}`,
      color: "text-dark",
    },
  ];
};

const TopStats: React.FC = () => {
  const stats = generateTopStats();

  return (
    <div className="d-flex flex-wrap gap-3 mb-4">
      {stats.map((item, idx) => (
        <div
          key={idx}
          className="bg-white shadow-sm rounded p-3 flex-grow-1"
          style={{ minWidth: "200px" }}
        >
          <div className={`fs-5 ${item.color}`}>{item.value}</div>
          <div className="text-muted small">{item.label}</div>
        </div>
      ))}
    </div>
  );
};

export default TopStats;
