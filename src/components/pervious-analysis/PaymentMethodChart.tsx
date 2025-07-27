import React, { useMemo } from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(ArcElement, Tooltip, Legend);

// Total transactions today (randomized for realism)
const TOTAL_TRANSACTIONS = faker.number.int({ min: 150, max: 300 });

const generatePaymentData = () => {
  const a = faker.number.int({ min: 15, max: 35 }); // Mobile Payments
  const b = faker.number.int({ min: 10, max: 25 }); // Loyalty Points
  const c = faker.number.int({ min: 20, max: 40 }); // Cards
  const total = a + b + c;
  const d = Math.max(100 - total, 0);               // Cash Payment

  return [a, b, c, d];
};

const PaymentMethodChart: React.FC = () => {
  const paymentPercentages = useMemo(() => generatePaymentData(), []);
  const paymentTransactions = paymentPercentages.map(
    (percent) => Math.round((percent / 100) * TOTAL_TRANSACTIONS)
  );

  const data = {
    labels: [
      "Mobile Payments",
      "Loyalty Points",
      "Debit / Credit Cards",
      "Cash Payment",
    ],
    datasets: [
      {
        data: paymentPercentages,
        backgroundColor: ["#e91e63", "#673ab7", "#ff5722", "#4caf50"],
        borderWidth: 2,
        borderColor: "#fff",
        cutout: "60%",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false as const,
    plugins: {
      legend: {
        position: "right" as const,
        labels: {
          font: { size: 12 },
          padding: 10,
          boxWidth: 14,
        },
      },
      tooltip: {
        callbacks: {
          label: function (context: any) {
            const index = context.dataIndex;
            const label = context.label;
            const percent = context.raw;
            const txns = paymentTransactions[index];
            return `${label}: ${percent}% (${txns} txns)`;
          },
        },
      },
    },
  };

  return (
    <div className="bg-white p-3 shadow-sm rounded mb-4" style={{ height: "300px" }}>
      <h6 className="mb-3">Payment Methods</h6>
      <div style={{ height: "220px" }}>
        <Doughnut data={data} options={options} />
      </div>
      <div className="text-muted small text-end mt-2">
        Total Transactions: {TOTAL_TRANSACTIONS}
      </div>
    </div>
  );
};

export default PaymentMethodChart;
