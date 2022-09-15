import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
export const Modal = (estado) => {
    const [model, setModel] = useState(false)
    setModel(estado)
  console.log(estado);
 
    return(
    <div className={model ? "block" : "hidden"}>
      <div className="bg-slate-800  text-white  border-t">
        <div>
          <ul className="flex flex-col">
            <li>
              <NavLink
                to="tg"
                className="p-2 block text-xl bg-slate-700 m-1 rounded  hover:opacity-80"
              >
                Usuarios
              </NavLink>
            </li>
            <li>
              <NavLink
                to="tg"
                className="p-2 block text-xl bg-slate-700 m-1 rounded  hover:opacity-80"
              >
                Elecciones
              </NavLink>
            </li>
            <li>
              <NavLink
                to="tg"
                className="p-2 block text-xl bg-slate-700 m-1 rounded  hover:opacity-80"
              >
                Candidatos
              </NavLink>
            </li>
            <li>
              <NavLink
                to="tg"
                className="p-2 block text-xl bg-slate-700 m-1 rounded hover:opacity-80"
              >
                Votantes
              </NavLink>
            </li>
            <li>
              <NavLink
                to="tg"
                className="p-2 block text-xl bg-slate-700 m-1 rounded hover:opacity-80"
              >
                Resultados
              </NavLink>
              <NavLink
                to="tg"
                className="p-2 block text-xl bg-slate-700 m-1 rounded  hover:opacity-80"
              >
                Reportes
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
