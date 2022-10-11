import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
