import React from "react";
import ReactDOM from "react-dom/client";
import PaginaRepositorios from "./PaginaRepositorios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Router>
    <Routes>
      <Route index element={<PaginaRepositorios />} />
    </Routes>
  </Router>
);
