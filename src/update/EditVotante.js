import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
export const EditVotante = () => {
  const { id } = useParams();
  const [dataE, setDataE] = useState([]);
  const [vot, setvot] = useState([]);
  const getDatosCandidato = async () => {
    const responseCandidato = await Axios.get(
      "http://localhost:3002/bestVotos/" + parseInt(id)
    );

    setvot(responseCandidato.data.message);
    console.log(responseCandidato);
  };
  const getEleccionesData = async () => {
    const response = await Axios.get("http://localhost:3002/electionsView");
    setDataE(await response.data.data);
    console.log(response);
  };
  const handdleSumbit = async (e) => {
    e.preventDefault();
    const newDataForm = {
      documento: parseInt(e.target.documento.value),
      nombresApellidos: e.target.nombre.value,
      programaFormacion: e.target.programa.value,
      fichaPrograma: parseInt(e.target.numFicha.value),
      idEleccion2: parseInt(e.target.stateEleccion.value),
      estado: e.target.estado.value,
    };
    await Axios.put(
      `http://localhost:3002/updatvotantes/${id}`,
      newDataForm
    ).then((response) => {
      if (response.data.message === "UploadData") {
        Swal.fire({
          icon: "success",
          title: "Votante Actualizado",
          showConfirmButton: false,
        });
        window.location.href = "/votantes";
      } else if (response.data.message === "ErrorUploadData") {
        Swal.fire({
          icon: "error",
          title: "Error al Actualizar",
          showConfirmButton: false,
        });
      }
    });
  };
  useEffect(() => {
    getDatosCandidato();
    getEleccionesData();
  }, []);
  return (
    <>
      <div class="block p-6 rounded-lg  bg-white max-w-md">
        {vot.map((i) => (
          <form onSubmit={handdleSumbit}>
            <div class="mb-3 w-96">
              <label
                for="formFile"
                class="form-label inline-block mb-2 text-gray-700"
              >
                Documento
              </label>
              <input
                class="form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                type="number"
                id="formFile"
                defaultValue={i.documento}
                name="documento"
              />
            </div>
            <div class="form-group mb-6">
              <input
                type="text"
                class="form-control block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInput7"
                placeholder="Nombres y Apellidos"
                defaultValue={i.nombresApellidos}
                name="nombre"
              />
            </div>
            <div class="form-group mb-6">
              <input
                type="text"
                class="form-control block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInput7"
                placeholder="Programa de Formación"
                defaultValue={i.programaFormacion}
                name="programa"
              />
            </div>
            <div class="form-group mb-6">
              <input
                type="number"
                class="form-control block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInput7"
                placeholder="Numero de ficha"
                name="numFicha"
                defaultValue={i.fichaPrograma}
              />
            </div>

            <div class="flex justify-center flex-col">
              <div className="mb-3 xl:w-96">
                <select
                  className="form-select appearance-none
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding bg-no-repeat
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border--[#ff8138] focus:outline-none"
                  aria-label="Default select example"
                  name="stateEleccion"
                >
                  <option selected>Selecionar una ellección</option>
                  {dataE.map((responseData) => (
                    <option value={responseData.idEleccion}>
                      {responseData.descripcion}
                    </option>
                  ))}
                </select>
              </div>
              <div class="mb-3 xl:w-96">
                <select
                  class="form-select appearance-none
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding bg-no-repeat
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  aria-label="Default select example"
                  name="estado"
                >
                  <option selected>Estado</option>
                  <option value="Activo">Activo</option>
                  <option value="Inactivo">Inactivo</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              class="
          w-full
          px-6
          py-2.5
          bg-[#ff8138]
          text-white
          font-medium
          text-xl
          leading-tight
           Capitalize
          rounded
          shadow-md
          hover:bg-[#fd7e14] hover:shadow-lg
          focus:bg-[#fd7e14] focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-[#fd7e14]active:shadow-lg
          transition
          duration-150
          ease-in-out"
            >
              Registrar
            </button>
          </form>
        ))}
      </div>
    </>
  );
};
