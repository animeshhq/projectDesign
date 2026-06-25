import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Deployments from "./pages/Deployments";
import Dashboard from "./pages/Dashboard";
import DeploymentDetails from "./pages/DeploymentDetails";
import Docs from "./pages/Docs";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/deployments" element={<Deployments />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/deployment/:id" element={<DeploymentDetails />} />
        <Route path="/docs" element={<Docs />} />
      </Routes>
    </div>
  );
}
