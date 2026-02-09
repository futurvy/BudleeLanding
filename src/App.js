import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SchoolsPage from "./pages/SchoolsPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/schools" element={<SchoolsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
