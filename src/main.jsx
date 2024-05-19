import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Page404 } from "./Page404.jsx";
import { Search } from "./Search.jsx";
import ReactDOM from "react-dom/client";
import Pokemon from "./Pokemon.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Search />} />
        <Route path="Pokemon" element={<Pokemon />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
