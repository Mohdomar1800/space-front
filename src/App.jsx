import "./App.css";
import Landing from './pages/landing';
import Home from './pages/home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home/>} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
