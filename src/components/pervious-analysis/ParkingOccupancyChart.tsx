import React, { useMemo } from "react";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

// Constants
const labels = ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May"];
const TOTAL_PARKING_SLOTS = 50;
const TOTAL_EV_SLOTS = 9;

// Generate static chart data
const generateOccupancyData = () => {
  const parkingData = labels.map(() => faker.number.int({ min: 20, max: 95 }));
  const evData = labels.map(() => faker.number.int({ min: 10, max: 100 }));
  return { parkingData, evData };
};

const ParkingOccupancyChart: React.FC = () => {
  const chartData = useMemo(() => generateOccupancyData(), []);

  const data = {
    labels,
    datasets: [
      {
        label: "Parking Occupancy (%)",
        data: chartData.parkingData,
        borderColor: "#d11c4b",
        backgroundColor: "#d11c4b",
        tension: 0.3,
        pointRadius: 4,
      },
      {
        label: "EV Slot Occupancy (%)",
        data: chartData.evData,
        borderColor: "#1c64f2",
        backgroundColor: "#1c64f2",
        tension: 0.3,
        pointRadius: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false as const,
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context: any) {
            const value = context.parsed.y;
            const label = context.dataset.label;
            const totalSlots = label.includes("EV") ? TOTAL_EV_SLOTS : TOTAL_PARKING_SLOTS;
            const slotCount = Math.round((value / 100) * totalSlots);
            return `${label}: ${value}% → ${slotCount}/${totalSlots} slots`;
          },
        },
      },
      legend: {
        display: true,
        position: "top" as const,
        labels: {
          boxWidth: 12,
        },
      },
    },
    scales: {
      y: {
        min: 0,
        max: 100,
        ticks: {
          stepSize: 20,
          callback: (value: string | number) => `${value}%`,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="bg-white p-3 shadow-sm rounded mb-4" style={{ height: "300px" }}>
      <h6 className="mb-3">Occupancy Trends (Last 12 Months)</h6>
      <Line data={data} options={options} />
    </div>
  );
};

export default ParkingOccupancyChart;
