import React from "react";
import { Login } from "../auth/Login";
import { Dasboard } from "./Dasboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const Router = () => {
  return (
    <Routes>
      <Route path="/*" element={<Dasboard />} />
      <Route path="/" element={<Login />} />
      <Route path="/User/:id" element={<Login />} />
      <Route path="/count/User" element={<Login />} />
      <Route path="/Votar" element={<Login />} />
      <Route path="*" element={<div>Get not found</div>} />
    </Routes>
  );
};

export default Router;
