// components/live-overview/EVStationsOccupancy.tsx

import React from "react";
import { faker } from "@faker-js/faker";
import refuelingActive from "../../assets/refuelingActive.png";
import refuelingInactive from "../../assets/refuelingInActive.png";
import "../../styling/EVStationsOccupancy.css";

// Generate slots with faker
const generateEVSlots = (count: number) =>
  Array.from({ length: count }, (_, i) => ({
    label: String.fromCharCode(65 + i), // A to I
    occupied: faker.datatype.boolean(), // true or false
  }));

const slots = generateEVSlots(9); // 9 slots: A to I

const EVStationsOccupancy: React.FC = () => {
  return (
    <div className="bg-white p-3 shadow-sm rounded h-100">
      <h6 className="mb-3">EV Stations Occupancy</h6>
      <div className="fw-semibold mb-2">Panel 1</div>
      <div className="d-flex flex-wrap gap-2">
        {slots.map((slot, idx) => (
          <div
            key={idx}
            className="ev-slot d-flex flex-column align-items-center justify-content-center"
            title={`Slot ${slot.label}`}
          >
            <img
              src={slot.occupied ? refuelingActive : refuelingInactive}
              alt={slot.occupied ? "Active" : "Inactive"}
              className="ev-icon"
            />
            <small className="mt-1">{slot.label}</small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EVStationsOccupancy;
