// components/LoyaltyCardCustomers.tsx

import React from "react";
import { faker } from "@faker-js/faker";
import "../../styling/LoyaltyCardCustomers.css";

interface Customer {
  carNumber: string;
  name: string;
  status: "Active";
}

// Generate fake customers
const generateLoyaltyCustomers = (count: number): Customer[] =>
  Array.from({ length: count }, () => ({
    carNumber: faker.vehicle.vrm(), // UK-style plate
    name: faker.person.fullName(),  // Realistic full name
    status: "Active",
  }));

const customers: Customer[] = generateLoyaltyCustomers(5);

const LoyaltyCardCustomers: React.FC = () => {
  return (
    <div className="bg-white p-3 shadow-sm rounded h-100">
      <h6 className="mb-3">Loyalty Card Customers</h6>
      {customers.map((cust, idx) => (
        <div
          key={idx}
          className="d-flex justify-content-between align-items-center mb-2"
        >
          <div>
            <div className="fw-semibold">{cust.carNumber}</div>
            <div className="text-muted small">{cust.name}</div>
          </div>
          <span className="text-success small fw-semibold">{cust.status}</span>
        </div>
      ))}
    </div>
  );
};

export default LoyaltyCardCustomers;
