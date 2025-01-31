import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GamePage from "@pages/GamePage";
import Exploration from "@pages/Exploration";
import Combat from "@pages/Combat";
import Home from "@pages/Home";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gamestat" element={<GamePage />} />
        <Route path="/exploration" element={<Exploration />} />
        <Route path="/combat" element={<Combat />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
