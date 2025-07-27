import React, { useState } from "react";
import { faker } from "@faker-js/faker";
import "../../styling/CurrentParkingTable.css";

interface ParkingRecord {
  carNumber: string;
  inTime: string;
  status: string;
  charge: string;
}

// Function to generate dummy records
const generateFakeParkingData = (count: number): ParkingRecord[] => {
  return Array.from({ length: count }, () => {
    const isActive = faker.datatype.boolean();
    const inTime = faker.date.recent();
    const leftTime = faker.date.recent();
    return {
      carNumber: faker.vehicle.vrm(), // UK-style number plate
      inTime: inTime.toLocaleString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }),
      status: isActive
        ? "Active"
        : `Left at ${leftTime.toLocaleTimeString("en-GB", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
          })}`,
      charge: `£${(Math.floor(Math.random() * (300 - 50 + 1)) + 50).toString()}`,
    };
  });
};

const CurrentParkingTable: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const mockData: ParkingRecord[] = generateFakeParkingData(10); // generates 10 rows

  const filteredData = mockData.filter((record) =>
    record.carNumber.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white p-3 shadow-sm rounded mb-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h6 className="mb-0">Current Parking Lot Allotment</h6>
        <div className="d-flex align-items-center gap-2">
          <input
            type="text"
            placeholder="Search"
            className="form-control form-control-sm"
            style={{ width: "200px" }}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="btn btn-outline-secondary btn-sm">Filter</button>
        </div>
      </div>

      <div className="table-responsive">
        <table className="table table-sm align-middle">
          <thead className="table-light">
            <tr>
              <th>Car Number Plate</th>
              <th>In Time</th>
              <th>Status</th>
              <th>Charge</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((rec, idx) => (
              <tr key={idx}>
                <td>{rec.carNumber}</td>
                <td>{rec.inTime}</td>
                <td>
                  <span
                    className={`badge ${
                      rec.status.includes("Active")
                        ? "bg-success"
                        : "bg-secondary"
                    }`}
                  >
                    {rec.status}
                  </span>
                </td>
                <td>{rec.charge}</td>
                <td>
                  <button className="btn btn-sm btn-danger">View Details</button>
                </td>
              </tr>
            ))}
            {filteredData.length === 0 && (
              <tr>
                <td colSpan={5} className="text-center text-muted py-3">
                  No matching records found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="d-flex justify-content-between align-items-center mt-3">
        <small>
          Showing {filteredData.length} of {mockData.length} records
        </small>
        <small>Page 1 of 1</small>
      </div>
    </div>
  );
};

export default CurrentParkingTable;
