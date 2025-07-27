import React, { useMemo } from "react";
import { faker } from "@faker-js/faker";

const generateSummary = () => {
  const total = faker.finance.amount({ min: 120000, max: 180000, dec: 0 });
  const lastMonth = faker.finance.amount({ min: 1000, max: 8000, dec: 0 });
  const lastQuarter = faker.finance.amount({ min: 8000, max: 30000, dec: 0 });
  const today = faker.finance.amount({ min: 50, max: 500, dec: 0 });

  return [
    {
      label: "Total Revenue (Last 12 Months)",
      value: `$${total}`,
      color: "text-danger",
    },
    {
      label: "Last Month (May)",
      value: `$${lastMonth}`,
      color: "text-dark",
    },
    {
      label: "Last Quarter",
      value: `$${lastQuarter}`,
      color: "text-dark",
    },
    {
      label: "Today's Collection",
      value: `$${today}`,
      color: "text-dark",
    },
  ];
};

const RevenueSummary: React.FC = () => {
  const summary = useMemo(() => generateSummary(), []);

  return (
    <div className="d-flex flex-wrap gap-3 mb-4">
      {summary.map((item, idx) => (
        <div
          key={idx}
          className="bg-white shadow-sm rounded p-3 flex-grow-1"
          style={{ minWidth: "200px" }}
        >
          <div className={`fs-5 fw-semibold ${item.color}`}>{item.value}</div>
          <div className="text-muted small">{item.label}</div>
        </div>
      ))}
    </div>
  );
};

export default RevenueSummary;
