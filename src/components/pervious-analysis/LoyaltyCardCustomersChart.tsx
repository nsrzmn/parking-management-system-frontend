import React from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

// Define fixed month labels
const labels = ["Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May"];

// Generate fake loyalty card counts for each month
const data = {
  labels,
  datasets: [
    {
      label: "Loyalty Card Customers",
      data: labels.map(() => faker.number.int({ min: 100, max: 1000 })),
      backgroundColor: "#28a745",
      borderRadius: 4,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false as const,
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        stepSize: 250,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

const LoyaltyCardCustomersChart: React.FC = () => {
  return (
    <div className="bg-white p-3 shadow-sm rounded mb-4" style={{ height: "300px" }}>
      <h6 className="mb-3">Loyalty Card Customers (Last 10 Months)</h6>
      <Bar data={data} options={options} />
    </div>
  );
};

export default LoyaltyCardCustomersChart;
