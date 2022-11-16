import React from "react";

import { Dasboard } from "./Dasboard";
import { ElecctionsContext } from "../hooks/context/ElecctionsContext";
import { Elecciones } from "../page/Elecciones";
import { Candidatos } from "../page/Candidatos";
import { Votantes } from "../page/Votantes";
import { Reportes } from "../page/Reportes";
import { Admin } from "../layouts/AdminAuthentic";
import { AprendizAuthentic } from "../layouts/AprendizAuthentic";
import { RecoveryPassword } from "../layouts/RecoveryPassword";
import { Route, Routes } from "react-router-dom";
import { CandidatoVotar } from "../layouts/CandidatoVotar";
import { Select } from "../layouts/Select";
import { Navigate } from "react-router-dom";
import { Votar } from "../layouts/Votar";
import { EditElection } from "../update/EditElection";
import { UpdCand } from "../update/UpdCand";
import { EditVotante } from "../update/EditVotante";
const Router = () => {
  return (
    <ElecctionsContext>
      <Routes>
        <Route path="/AdminAuttentiacion" element={<Admin />} />
        <Route path="/recoveryPasswordAdmin" element={<RecoveryPassword />} />
        <Route path="/" element={<AprendizAuthentic />} />
        <Route path="/dasboard/*" element={<Dasboard />} />
        <Route path="/dasboards" element={<Navigate to="/dasboard" />} />
        <Route path="/logout" element={<Navigate to="/AdminAuttentiacion" />} />
        <Route path="/cerrCuenta" element={<Navigate to="/" />} />
        <Route path="/elecciones" element={<Elecciones />} />
        <Route path="/candidatos" element={<Candidatos />} />
        <Route path="/votantes" element={<Votantes />} />
        <Route path="/reportes" element={<Reportes />} />
        <Route path="/CandidatoVotar/:id/:idk" element={<CandidatoVotar />} />
        <Route path="/selectEleccion/:id" element={<Select />} />
        <Route path="/votar/:idk/:documento1" element={<Votar />} />
        <Route path="/eleccion" element={<Navigate to="/selectEleccion/:id" />}/>
        <Route path="/editElection/:id" element={<EditElection />} />
        <Route path="/editCandidato/:id" element={<UpdCand />} />
        <Route path="/editVotante/:id" element={<EditVotante/>} />

      </Routes>
    </ElecctionsContext>
  );
};

export default Router;
