import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from "@fortawesome/free-solid-svg-icons";
// import { Header } from "../components/Header";
// import { Candidatos } from "../page/Candidatos";
 import { Elecciones } from "../page/Elecciones";
// import { Resultados } from "../page/Resultados";
// import { Reportes } from "../page/Reportes";
// import { Votantes, votantes } from "../page/Votantes";
// import { Usuarios } from "../page/Usuarios";
import { Home } from "../page/Home";
export const Dasboard = () => {
  return (
    <>
     
      <Routes>

        <Route path="/*" element={  <Home/>}/>
        
        
        
      </Routes>
    </>
  );
};
