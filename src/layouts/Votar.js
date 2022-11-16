import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate, Navigate, Link } from "react-router-dom";
import Swal from "sweetalert2";

import Axios from "axios";
export const Votar = () => {
  const { idk, documento1 } = useParams();
  const id = documento1;
  const handleEvendSource = async () => {
    const response = await Axios.put(
      "http://localhost:3002/updatvotantesfine/" +
        parseInt(idk) +
        "/" +
        parseInt(documento1)
    );
    console.log(response);
  };
  const navegate = useNavigate();
  console.log("iddocumento", idk, "idEleccion", id);
  const [candidato, setCandidato] = useState([]);
  const eventFunction = async () => {
    const response = await Axios.get( 
      "http://localhost:3002/candidatosvista/" + parseInt(id)
    );
    if (response.data.data === "ERROR_VIEW_VOTANTES") {
      await Swal.fire({
        icon: "error",
        title: "Error",
        text: "Hubo un herror al conectarse con el servidor",
        footer: "<p>Intenta de nuevo</p>",
      });
    }
    setCandidato(response.data.data);
    console.log(response);
  };
  useEffect(() => {
    eventFunction();
  }, []);
  console.log(idk, documento1);

  const handdleDefineVoto = () => {
    Swal.fire({
      title: `Estas seguro de que quieres votar por este candidato <img src="${candidato.map(
        (id) => id.imgUrl
      )}" />`,
      showDenyButton: true,

      confirmButtonText: "Aceptar",
      denyButtonText: `Cancelar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        handleEvendSource();
        Swal.fire("Gracias por votar", "", "success");
        navegate("/");
      } else if (result.isDenied) {
        Swal.fire(
          "Se cancelo la solicitud debera iniciar nuevamente con su documento",
          "",
          "warning"
        );
        navegate("/cerrCuenta");
      }
    });
  };
  return <div>{handdleDefineVoto()}</div>;
};
