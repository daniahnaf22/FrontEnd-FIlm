import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./pages/Dashboard";
import Negaras from "./pages/Negara";
import AddNegara from "./pages/AddNegara";
import EditNegara from "./pages/EditNegara";
import RumahProduksis from "./pages/RumahProduksi";
import AddRumahProd from "./pages/AddRumahProd";
import EditRumahProd from "./pages/EditRumahProd";
import Artis from "./pages/Artis";
import AddArtis from "./pages/AddArtis";
import EditArtis from "./pages/EditArtis";
import Films from "./pages/Films";
import AddFilm from "./pages/AddFilm";
import EditFilm from "./pages/EditFilm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/negara" element={<Negaras />} />
        <Route path="/negara/add" element={<AddNegara />} />
        <Route path="/negara/edit/:id" element={<EditNegara />} />
        <Route path="/rumahproduksi" element={<RumahProduksis />} />
        <Route path="/rumahproduksi/add" element={<AddRumahProd />} />
        <Route path="/rumahproduksi/edit/:id" element={<EditRumahProd />} />
        <Route path="/artis" element={<Artis />} />
        <Route path="/artis/add" element={<AddArtis />} />
        <Route path="/artis/edit/:id" element={<EditArtis />} />
        <Route path="/film" element={<Films />} />
        <Route path="/film/add" element={<AddFilm />} />
        <Route path="/film/edit/:id" element={<EditFilm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
