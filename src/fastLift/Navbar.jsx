import { Routes, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";

export function Navbar() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/dashboard">Dashboard</Link>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}
