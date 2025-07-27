import React, { useMemo } from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Pie } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(ArcElement, Tooltip, Legend);

// Generate random vehicle type shares that sum to 100
const generateVehicleShare = () => {
  const four = faker.number.int({ min: 30, max: 60 });
  const three = faker.number.int({ min: 10, max: 40 });
  const total = four + three;
  const two = Math.max(100 - total, 0);
  return [four, three, two];
};

const VehicleTypeChart: React.FC = () => {
  const [four, three, two] = useMemo(() => generateVehicleShare(), []);

  const data = {
    labels: ["Four Wheelers", "Three Wheelers", "Two Wheelers"],
    datasets: [
      {
        label: "Vehicle Type Share",
        data: [four, three, two],
        backgroundColor: ["#20c997", "#9966ff", "#36a2eb"],
        borderColor: "#fff",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false as const,
    plugins: {
      legend: {
        position: "bottom" as const,
        labels: {
          boxWidth: 12,
          padding: 10,
          font: {
            size: 12,
          },
        },
      },
      tooltip: {
        callbacks: {
          label: function (context: any) {
            return `${context.label}: ${context.raw}%`;
          },
        },
      },
    },
  };

  return (
    <div
      className="bg-white p-3 shadow-sm rounded mb-4"
      style={{ height: "300px", minWidth: "300px" }}
    >
      <h6 className="mb-3">Vehicle Types</h6>
      <div style={{ height: "220px" }}>
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};

export default VehicleTypeChart;
