import React, { useState, useEffect} from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Axios from "axios"
import Swal from "sweetalert2";
export const Select = () => {
const [eleccionGet, seteleccionGet] = useState([])
  const { id } = useParams();
  let documento = id
  const navegate = useNavigate()
  const getEleccionVo = async ()=>{
    const response =await Axios.get("http://localhost:3002/electvotante/"+documento)
    if (response.data.message === "ERROR_NOT_EXIXT") {
      await Swal.fire({
        icon: "error",
        title: "Error",
        text: "Ingrese un documento valido",
        footer: "<p>Verifica que estes registrado en la plataforma</p>",
      });
     return window.location = "/"
    }else if(response.data.message === "ERROR_DB"){
      await Swal.fire({
        icon: "error",
        title: "Error",
        text: "Hubo un herror al conectarse con el servidor",
        footer: "<p>Intenta de nuevo</p>",
      });
     return window.location = "/"
    }else{

      seteleccionGet(response.data.message)
      console.log(response.data.message);

    }
  }
  const handleButtom = (e) => {
    e.preventDefault();
    navegate("/CandidatoVotar/"+parseInt(e.target.idEleccion.value)+"/"+ documento)
   
  }
  useEffect(() => {
   getEleccionVo();
    
  },[]);

 
  return (
    <div className=" h-fit w-2/4  absolute inset-0 m-auto self-center  items-center flex justify-center gap-2">
      
      
      <div className="flex w-full justify-center  ">
        {eleccionGet.map(elecction=>(
          
        <form key={elecction.idEleccion}  className="w-full" onSubmit={handleButtom}>
          <div className="block w-full p-6 rounded-lg shadow-lg bg-white">
            <input type="text" className="hidden" value={elecction.idEleccion} name="idEleccion"/>
          <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
            {elecction.descripcion}
          </h5>
          <p className="text-gray-700 text-base mb-4">
            {elecction.cargo}
          </p>
          <button
            className=" inline-block px-6 py-2.5 bg-[#ff8138] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#fd7e14]  hover:shadow-lg focus:bg-[#fd7e14]  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#fd7e14] active:shadow-lg transition duration-150 ease-in-out"

          >
            Ingresar
          </button>
        </div>
        </form>
        ))}
      </div>
    </div>

  );
};
