import React from "react";
import { Login } from "../auth/Login";
import { Dasboard } from "./Dasboard";
import { Elecciones } from "../page/Elecciones";
import { Candidatos } from "../page/Candidatos";
import { Votantes } from "../page/Votantes";
import { Reportes } from "../page/Reportes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const Router = () => {
  return (
    <Routes>
      <Route path="/dasboard/*" element={<Dasboard />} />
      <Route path="/elecciones" element={ <Elecciones/>} />
      <Route  path="/candidatos" element={<Candidatos/>}/>
      <Route  path="/votantes" element={<Votantes/>}/>
      <Route  path="/reportes" element={<Reportes/>}/>
      {/* <Route path="/" element={<Login />} />
      <Route path="/User/:id" element={<Login />} />
      <Route path="/count/User" element={<Login />} />
      <Route path="/Votar" element={<Login />} />
      <Route path="*" element={<div>Get not found</div>} /> */}
    </Routes>
  );
};

export default Router;
