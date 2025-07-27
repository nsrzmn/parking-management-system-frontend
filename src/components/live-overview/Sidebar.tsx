// components/Sidebar.tsx

import React from "react";
import { Home, BarChart } from "lucide-react";
import { useLocation, Link } from "react-router-dom";
import logoIcon from "../../assets/HeaderIcon 1.png"; // Adjust path as needed
import "../../styling/sidebar.css";

interface SidebarItem {
  name: string;
  icon: React.ReactNode;
  path: string;
}

const sidebarItems: SidebarItem[] = [
  {
    name: "Live Overview",
    icon: <Home size={18} />,
    path: "/live-overview",
  },
  {
    name: "Previous Analysis",
    icon: <BarChart size={18} />,
    path: "/previous-analysis",
  },
];

const Sidebar: React.FC = () => {
  const location = useLocation();

  return (
    <aside className="sidebar d-flex flex-column justify-content-between vh-100">
      <div>
        {/* Header Box */}
        <div className="header-card d-flex flex-column align-items-center text-center">
          <img
            src={logoIcon}
            alt="Logo"
            className="mb-2"
            style={{ width: "40px" }}
          />
          <div className="fw-semibold text-white small lh-sm">
            Parking <br />
            Management <br />
            System
          </div>
        </div>

        {/* Navigation */}
        <nav className="nav flex-column mt-4 px-3">
          {sidebarItems.map((item, idx) => (
            <Link
              key={idx}
              to={item.path}
              className={`nav-link d-flex justify-content-between align-items-center ${
                location.pathname === item.path ? "active" : ""
              }`}
            >
              <div className="d-flex align-items-center gap-2">
                {item.icon}
                <span>{item.name}</span>
              </div>
              <span className="arrow">&gt;</span>
            </Link>
          ))}
        </nav>
      </div>

      {/* User Info */}
      <div className="user-box d-flex align-items-center gap-2 p-2 mx-3 mb-3 rounded">
        <div
          className="user-avatar rounded-circle bg-danger d-flex align-items-center justify-content-center text-white fw-bold"
          style={{ width: 32, height: 32 }}
        >
          F
        </div>
        <div className="flex-grow-1">
          <div className="small text-white-50">Welcome back,</div>
          <div className="text-white fw-semibold">User</div>
        </div>
        <div className="text-white">⌄</div>
      </div>
    </aside>
  );
};

export default Sidebar;
