// components/CustomerStats.tsx

import React from "react";
import { faker } from "@faker-js/faker";

const generateCustomerStats = () => {
  const totalCustomers = faker.number.int({ min: 50, max: 150 });
  const evCustomers = faker.number.int({ min: 10, max: totalCustomers }); // EV customers <= total

  return [
    {
      label: "Total Customers Today",
      value: totalCustomers,
      color: "text-dark fw-semibold",
    },
    {
      label: "Total EV Customers Today",
      value: evCustomers,
      color: "text-dark fw-semibold",
    },
  ];
};

const CustomerStats: React.FC = () => {
  const customerStats = generateCustomerStats();

  return (
    <div className="d-flex flex-wrap gap-3 mb-4">
      {customerStats.map((stat, idx) => (
        <div
          key={idx}
          className="bg-white shadow-sm p-3 rounded"
          style={{ minWidth: "200px", flex: 1 }}
        >
          <div className={`fs-4 ${stat.color}`}>{stat.value}</div>
          <div className="text-muted small">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default CustomerStats;
