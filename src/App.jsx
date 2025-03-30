import "./App.css";
import Landing from './pages/landing';
import Home from './pages/home'
import CargoItems from './pages/cargoItems'
import Dashboard from './pages/dashboard'
import Settings from './pages/settings'
import Storage from './pages/storage'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/cargo" element={<CargoItems/>} />
          <Route path="/storage" element={<Storage/>} />
          <Route path="/settings" element={<Settings/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
