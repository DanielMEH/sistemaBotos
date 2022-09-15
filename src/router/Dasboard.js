import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Header } from "../components/Header";
import { Candidatos } from "../page/Candidatos";
import { Elecciones } from "../page/Elecciones";
import { Resultados } from "../page/Resultados";
import { Reportes } from "../page/Reportes";
import { Votantes, votantes } from "../page/Votantes";
import { Usuarios } from "../page/Usuarios";
export const Dasboard = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<div>fff</div>} />
        <Route path="/authlogin" element={<div>Hola xd</div>} />
        <Route path="/authsignup" element={<div>Hola</div>} />
        <Route path="/admin/*" element={<div>Hola</div>}>
          <Route path="resultados" element={<Resultados />} />
          <Route path="candidato" element={<Candidatos />} />
          <Route path="elecciones" element={<Elecciones />} />
          <Route path="reportes" element={<Reportes />} />
          <Route path="votantes" element={<Votantes />} />
          <Route path="usuarios" element={<Usuarios />} />
          <Route path="*" element={<div>not found</div>} />
        </Route>
      </Routes>
    </>
  );
};
