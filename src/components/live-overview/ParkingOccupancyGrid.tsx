import React, { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import { Car } from "lucide-react";
import '../../styling/ParkingOccupancyGrid.css';

interface ParkingSlot {
  id: string;
  occupied: boolean;
}

interface ParkingRow {
  label: string;
  slots: ParkingSlot[];
}

const generateInitialGrid = (): ParkingRow[] => {
  return ["A", "B", "C", "D", "E"].map((label) => ({
    label,
    slots: Array.from({ length: 10 }, (_, i) => ({
      id: `${label}${i + 1}`,
      occupied: faker.datatype.boolean(),
    })),
  }));
};

// Helper to randomly toggle a few slots
const toggleRandomSlots = (grid: ParkingRow[], toggleCount = 3): ParkingRow[] => {
  const flatSlots = grid.flatMap(row => row.slots);
  const total = flatSlots.length;

  const indexesToToggle = new Set<number>();
  while (indexesToToggle.size < toggleCount) {
    indexesToToggle.add(faker.number.int({ min: 0, max: total - 1 }));
  }

  indexesToToggle.forEach(idx => {
    flatSlots[idx].occupied = !flatSlots[idx].occupied;
  });

  // Reconstruct into rows
  const updatedRows = ["A", "B", "C", "D", "E"].map((label, rowIdx) => ({
    label,
    slots: flatSlots.slice(rowIdx * 10, (rowIdx + 1) * 10),
  }));

  return updatedRows;
};

const ParkingOccupancyGrid: React.FC = () => {
  const [rows, setRows] = useState<ParkingRow[]>(generateInitialGrid());
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setRows(prev => toggleRandomSlots(prev));
      setLastUpdated(new Date());
    }, 5000); // update every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white p-3 shadow-sm rounded mb-4 h-100">
      <h6 className="mb-2">Parking Occupancy (Live)</h6>
      <div className="text-muted small mb-3">
        Last updated: {lastUpdated.toLocaleTimeString()}
      </div>

      {rows.map((row) => (
        <div key={row.label} className="mb-2">
          <div className="fw-semibold mb-1">{`Row ${row.label}`}</div>
          <div className="d-flex flex-wrap gap-2">
            {row.slots.map((slot) => (
              <div
                key={slot.id}
                className={`p-2 border rounded d-flex align-items-center justify-content-center parking-slot ${
                  slot.occupied ? "occupied" : "available"
                }`}
                title={`Slot ${slot.id}`}
              >
                <Car size={18} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ParkingOccupancyGrid;
