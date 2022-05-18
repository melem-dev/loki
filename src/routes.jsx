import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Table from "./pages/Table";

export default function () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="game" element={<Table />} />

        <Route path="*" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
