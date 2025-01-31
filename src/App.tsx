import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@pages/Home";
import Exploration from "@pages/Exploration";
import Combat from "@pages/Combat";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exploration" element={<Exploration />} />
        <Route path="/combat" element={<Combat />} />
      </Routes>
    </Router>
  );
}

export default App;