import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/live-overview/Sidebar";
import LiveOverview from "./pages/LiveOverview";
import PreviousAnalysis from "./pages/PreviousAnalysis";

const App: React.FC = () => {
  return (
    <Router>
      <div className="d-flex">
        <Sidebar />
        <main className="flex-grow-1 p-4">
          <Routes>
            <Route path="/" element={<LiveOverview />} />
            <Route path="/live-overview" element={<LiveOverview />} />
            <Route path="/previous-analysis" element={<PreviousAnalysis />} />
            {/* Optional: Redirect root to /live-overview */}
            <Route path="/" element={<Navigate to="/live-overview" replace />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
