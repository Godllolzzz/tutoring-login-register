import Dashboard from "./components/Dashboard";
import Loading from "./components/Loading";
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Dashboard />} />
        <Route path="/loading" element={<Loading />} />
      </Routes>
    </Router>
  );
}
