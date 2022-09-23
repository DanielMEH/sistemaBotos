import React from "react";
import { Login } from "../auth/Login";
import { Dasboard } from "./Dasboard";
import { Elecciones } from "../page/Elecciones";
import { Candidatos } from "../page/Candidatos";
import { Votantes } from "../page/Votantes";
import { Reportes } from "../page/Reportes";
import { Admin } from "../layouts/AdminAuthentic";
import { AprendizAuthentic } from "../layouts/AprendizAuthentic";
import { RecoveryPassword } from "../layouts/RecoveryPassword";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CandidatoVotar } from "../layouts/CandidatoVotar";
import { Select } from "../layouts/Select";
const Router = () => {
  return (
    <Routes>
      <Route path="/dasboard/*" element={<Dasboard />} />
      <Route path="/elecciones" element={<Elecciones />} />
      <Route path="/candidatos" element={<Candidatos />} />
      <Route path="/votantes" element={<Votantes />} />
      <Route path="/reportes" element={<Reportes />} />
      <Route path="/AdminAttenctiacion" element={<Admin />} />
      <Route path="/CandidatoVotar" element={<CandidatoVotar />} />
      <Route path="/recoveryPasswordAdmin" element={<RecoveryPassword />} />
      <Route path="/" element={<AprendizAuthentic />} />
      <Route path="/selectEleccion" element={<Select/>} />
      {/* <Route path="/" element={<Login />} />
      <Route path="/User/:id" element={<Login />} />
      <Route path="/count/User" element={<Login />} />
      <Route path="/Votar" element={<Login />} />
      <Route path="*" element={<div>Get not found</div>} /> */}
    </Routes>
  );
};

export default Router;
