import React from "react";
import {useState, useEffect} from "react"
import { useParams, useNavigate, Navigate, Link} from "react-router-dom"
import Swal from "sweetalert2";
import Axios from "axios"
export const CandidatoVotar = () => {
  const [candidatoGet, setCandidatosGet] = useState([])
  const {id, idk} = useParams()
  
  const getCandidatosSource = async ()=>{
    const response = await Axios.get("http://localhost:3002/candidatosViws/"+ parseInt(id))
    console.log(response);
    if (response.data.data === "ERRUPLOAD_CAND") {
    return  await Swal.fire({
        icon: "error",
        title: "Error",
        text: "Hubo un fallo en cargar la informacion",
        footer: "<p>Verifica que estes registrado en la plataforma</p>",
      });
    }else if(response.data.data === "NOT_FOUND_RESULT"){
     return await Swal.fire({
        icon: "error",
        title: "Error",
        text: "Hubo un herror al conectarse con el servidor",
        footer: "<p>Intenta de nuevo</p>",
      });
    }

      return setCandidatosGet(response.data.data);
    
  }

  useEffect(() => {
    getCandidatosSource();
  },[])
  return (
    <div>
      <div className="text-center md:max-w-xl lg:max-w-3xl mx-auto">
        <h3 className="text-3xl font-bold mt-3 text-gray-800 block ">
          Elige tu candidato
        </h3>
        <p className="m-6 pb-2 mb-2 md:mb-12 md:pb-0 block">
          Solo podras ejercer tu voto una sola vez
        </p>
      </div>
      <div className="max-w-7xl mx-auto mt-[5rem]">
        <section className="mb-20 text-gray-700">
          <div className="grid sm:grid-cols-2 mx-6 lg:grid-cols-3 gap-6 text-center">
            {candidatoGet.map(candidatoView =>(
            <div>
              <div className="block mt-12   rounded-lg shadow-lg bg-white">
                <div className="overflow-hidden  rounded-t-lg h-fit"></div>
                <div className="w-24 -mt-12 overflow-hidden border border-2 border-white rounded-full mx-auto bg-white">
                  <img src={candidatoView.imgUrl} />
                </div>
                <div className="p-6">
                  <h4 className="text-2xl font-semibold mb-4">{candidatoView.nombreCandidato}</h4>
                  <hr />
                  <p className="mt-4">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="quote-left"
                      className="w-6 pr-2 inline-block"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
                      ></path>
                    </svg>
                    {candidatoView.programaFormacion}
                  </p>

                  <p>


                    <Link
                     to ={"/votar/"+parseInt(idk)+"/"+candidatoView.documento}
                      className="  bg-[#ff8138] text-white p-2 mt-3 block rounded"
                    >
                      Votar
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
