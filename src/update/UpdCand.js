import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import Swal from "sweetalert2";
export const UpdCand = () => {
  const [Elecciones, setElecciones] = useState([]);
  const [Candidato, setCandidato] = useState([]);

  const getDatosCandidato = async () => {
    const responseCandidato = await Axios.get(
      "http://localhost:3002/candidatosvista/" + parseInt(id)
    );
    setCandidato(responseCandidato.data.data);
    console.log(responseCandidato.data.data);
  };
  const [Image, setImage] = useState([]);
  const { id } = useParams();
  console.log(id);
  const consult = async () => {
    const datos = await Axios.get("http://localhost:3002/electionsView");
    setElecciones(datos.data.data);
    console.log(datos);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPostCandidato = {
      documento: parseInt(e.target.documento.value),
      nombreCandidato: e.target.nombre.value,
      programaFormacion: e.target.programaFormacion.value,
      fichaPrograma: parseInt(e.target.fichaPrograma.value),
      estado: e.target.estado.value,
      imagen: Image,
      totalVotos: parseInt(e.target.totalVotos.value),
      id: e.target.options.value,
    };
    console.table(newPostCandidato);

    const UpdatePost = async () => {
      const response = await Axios.put(
        "http://localhost:3002/updateCandidato/" +
          parseInt(newPostCandidato.documento),
        newPostCandidato,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
        .then(async (response) => {
          if (response.data.message === "UploadData") {
            await Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Registro actualizado",
              showConfirmButton: false,
              timer: 1500,
            });
            window.location.href = "/candidatos";
          } else if (response.data.message === "ErrorUploadData") {
            await Swal.fire({
              position: "top-end",
              icon: "error",
              title: "Error al actualizar el registro",
              showConfirmButton: false,
              timer: 1500,
            });
          } else {
            await Swal.fire({
              position: "top-end",
              icon: "error",
              title: "Hubo un error desconocido al actualizar el registro",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        })
        .catch((error) => {
          console.log(error);
        });
      console.log(response);
    };
    UpdatePost();
  };
  useEffect(() => {
    getDatosCandidato();
    consult();
  }, []);
  return (
    <>
      {Candidato.map((i) => (
        <>
          <form
            onSubmit={handleSubmit}
            className=" w-full sm:w-2/4 sm:mx-auto mx-auto lg:w-1/4 border rounded shadow p-2 mt-4"
          >
            <h1 className="text-center block text-xl">Actualizar datos</h1>
            <div class="mb-3 w-96">
              <label
                for="formFile"
                className="form-label inline-block mb-2 text-gray-700"
              >
                Foto
              </label>
              <input
                onChange={(e) => {
                  setImage(e.target.files[0]);
                }}
                className="form-control
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
                name="imagen"
                type="file"
                id="formFile"
                defaulValue={i.imgUrl}
              />
            </div>
            <div className="form-group mb-6">
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
            mt-2
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                name="documento"
                id="exampleInput7"
                placeholder="Documento"
                defaultValue={i.documento}
              />
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
            mt-2
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                name="nombre"
                id="exampleInput7"
                placeholder="Nombres Completo y apellidos"
                defaultValue={i.nombreCandidato}
              />

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
            mt-2
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                name="programaFormacion"
                id="exampleInput7"
                placeholder="Programa de Formacion"
                defaultValue={i.programaFormacion}
              />
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
            mt-2
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                name="fichaPrograma"
                id="exampleInput7"
                placeholder="Numero de la ficha"
                defaultValue={i.fichaPrograma}
              />
            </div>
            <div class="form-group mb-6">
              <input
                type="text"
                class="
            form-control
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
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
            
          "
                name="totalVotos"
                id="exampleFormControlTextarea13"
                placeholder="totalVotos"
                defaultValue={i.totalVotos == null ? 0 : i.totalVotos}
              ></input>
            </div>
            <div class="flex justify-center">
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
                  name="estado"
                  aria-label="Default select example"
                >
                  <option selected>Selecionar el estado</option>
                  <option value="1">Activo</option>
                  <option value="2">Inactivo</option>
                </select>
                <select
                  class="form-select appearance-none
                block
                w-full
                px-3
                py-1.5
                mt-3
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
                  name="options"
                  aria-label="Default select example"
                >
                  <option selected>Selecionar Eleccion</option>
                  {Elecciones.map((i) => (
                    <option value={i.idEleccion}>{i.descripcion}</option>
                  ))}
                </select>
              </div>
            </div>
            <button
              type="submit"
              class=" w-full px-6 py-2.5 bg-blue-600 text-white font-medium
          text-xsf
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-blue-700 hover:shadow-lg
          focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-blue-800 active:shadow-lg
          transition
          duration-150
          ease-in-out"
            >
              Actualizar datos
            </button>
          </form>
        </>
      ))}
    </>
  );
};
