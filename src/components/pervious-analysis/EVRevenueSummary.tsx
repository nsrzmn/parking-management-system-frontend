import React from "react";
import { faker } from "@faker-js/faker";

const generateEVRevenues = () => {
  return [
    {
      label: "Today",
      value: `$${faker.finance.amount({ min: 1, max: 50, dec: 2 })}`, // Small daily revenue
    },
    {
      label: "Last Quarter",
      value: `$${faker.finance.amount({ min: 8000, max: 15000, dec: 0 })}`, // No decimals
    },
    {
      label: "Total",
      value: `$${faker.finance.amount({ min: 50000, max: 120000, dec: 0 })}`, // Lifetime revenue
    },
  ];
};

const EVRevenueSummary: React.FC = () => {
  const evRevenues = generateEVRevenues();

  return (
    <div className="bg-white p-3 shadow-sm rounded mb-4">
      <h6 className="mb-3">EV Stations Revenue</h6>
      <div className="d-flex flex-column gap-3">
        {evRevenues.map((item, idx) => (
          <div
            key={idx}
            className="d-flex justify-content-between align-items-center px-3 py-2 bg-light rounded"
          >
            <div className="fs-6 fw-bold text-danger">{item.value}</div>
            <div className="text-muted small">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EVRevenueSummary;
