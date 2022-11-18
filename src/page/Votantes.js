import React, { useState, useEffect, useMemo } from "react";
import { DataTableV } from "../components/DatatableV";
import { Header } from "../components/Header";
import Axios from "axios";
import Swal from "sweetalert2";
export const Votantes = () => {
  const [dataE, setDataE] = useState([]);
  const [csv, setCsv] = useState([]);
  const handdleSumbit = async (e) => {
    e.preventDefault();
    const newDataForm = {
      documento: parseInt(e.target.documento.value),
      nombresApellidos: e.target.nombre.value,
      programaFormacion: e.target.programa.value,
      fichaPrograma: parseInt(e.target.numFicha.value),
      idEleccion2: parseInt(e.target.stateEleccion.value),
    };
    await Axios.post("http://localhost:3002/creatvotantes", newDataForm).then(
      (response) => {
        if (response.data.message === "INSERT_VOTANTES") {
          Swal.fire({
            icon: "success",
            title: "Votante creado correctamente",
            showConfirmButton: false,
          });
          window.location.href = "/votantes";
        }
      }
    );
  };
  const getEleccionesData = async () => {
    const response = await Axios.get("http://localhost:3002/electionsView");
    setDataE(await response.data.data);
    console.log(response);
  };


  const handdleButtomCsv = async (e) => {
    e.preventDefault();

    const dataForm = {
      stateEleccioncsv: e.target.stateEleccioncsv.value,
      estadoscv: e.target.estadoscv.value,
      csvDocument: csv,
    };
    console.table(dataForm, "Hola");
  };
  useEffect(() => {
    getEleccionesData();
  }, []);
  return (
    <>
      <Header />
      <main>
      
        <section>
          <div class="bg-gray-200 mx-2 my-5 p-2 rounded">
            <h2>Elecciones</h2>
          </div>

          <div class="border border-gray-200 rounded mx-2">
            <div class="border-2">
              <div class="bg-[#ff8138]  text-white  rounded p-2 flex justify-between items-center">
                <h3>lista de Elecciones</h3>
              </div>

              <div class=" mx-2 p-10  ">
                <div class="mb-3  flex flex-col sm:flex-row">
                  <div class="flex space-x-2 justify-center mx-2">
                    <div
                      class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
                      id="staticBackdrop"
                      data-bs-backdrop="static"
                      data-bs-keyboard="false"
                      tabindex="-1"
                      aria-labelledby="staticBackdropLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog relative w-auto pointer-events-none">
                        <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                          <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                            <h5
                              className="text-xl font-medium leading-normal text-gray-800"
                              id="exampleModalLabel"
                            >
                              Subir
                            </h5>
                            <button
                              type="button"
                              className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div className="modal-body relative p-4">
                            <form onSubmit={handdleButtomCsv}>
                              <div className="mb-3 w-96">
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
                                  name="stateEleccioncsv"
                                >
                                  <option selected>
                                    Selecionar una elección
                                  </option>
                                  {dataE.map((responseData) => (
                                    <option value={responseData.idEleccion}>
                                      {responseData.descripcion}
                                    </option>
                                  ))}
                                </select>
                                <label
                                  for="formFile"
                                  className="form-label inline-block mb-2 text-gray-700"
                                >
                                  Seleccionar Archivo .Csv
                                </label>
                                <input
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
                                  type="file"
                                  id="formFile"
                                  name="scvArch"
                                  onChange={(e) => {
                                    setCsv(e.target.files[0]);
                                  }}
                                />
                              </div>
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
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                aria-label="Default select example"
                                name="estadoscv"
                              >
                                <option selected>Estado</option>
                                <option value="Activo">Activo</option>
                                <option value="Inactivo">Inactivo</option>
                              </select>
                              <button
                                type="submit"
                                className="
              w-full
              mt-2
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
              active:bg-[#fd7e14] active:shadow-lg
              transition
              duration-150
              ease-in-out"
                              >
                                Subir{" "}
                              </button>
                            </form>
                          </div>
                          <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                            <button
                              type="button"
                              className="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
                              data-bs-dismiss="modal"
                            >
                              Cerrar
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <button
                        type="button"
                        className="inline-block mt-2 sm:mt-0 px-6 pt-2.5 pb-2 bg-gray-500 text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-gray-600 hover:shadow-lg focus:bg-gray-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out flex align-center
                              whitespace-nowrap"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                      >
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="download"
                          class="w-3 mr-2"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="currentColor"
                            d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
                          ></path>
                        </svg>
                        Cargar Aprendices
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="border border-gray-200 rounded mx-2 mt-2">
            <div className="border-2">
              <div className="bg-[#ff8138]  text-white  rounded p-2 flex justify-between items-center">
                <h3>lista de Elecciones</h3>
                <div className="">
                  <button
                    type="button"
                    className="px-6
py-2.5
bg-gray-600
text-white
font-medium
text-xs
leading-tight
uppercase
rounded
shadow-md
hover:bg-gray-700 hover:shadow-lg
focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0
active:bg-gray-700 active:shadow-lg
transition
duration-150
ease-in-out"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Agregar nuevo
                  </button>

                  <div
                    className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
                    id="exampleModal"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog relative w-auto pointer-events-none">
                      <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                        <div className="modal-header flex flex-col flex-shrink-0 items-center justify-center p-4 border-b border-gray-200 rounded-t-md">
                          <h5
                            className="text-xl font-medium leading-normal text-gray-800"
                            id="exampleModalLabel"
                          >
                            Ingresar Datos
                          </h5>
                          <div className="block p-6 rounded-lg  bg-white max-w-md">
                            <form onSubmit={handdleSumbit}>
                              <div className="mb-3 w-96">
                                <label
                                  for="formFile"
                                  className="form-label inline-block mb-2 text-gray-700"
                                >
                                  Documento
                                </label>
                                <input
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
                                  type="number"
                                  id="formFile"
                                  name="documento"
                                />
                              </div>
                              <div className="form-group mb-6">
                                <input
                                  type="text"
                                  className="form-control block
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
                                  name="nombre"
                                />
                              </div>
                              <div className="form-group mb-6">
                                <input
                                  type="text"
                                  className="form-control block
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
                                  name="programa"
                                />
                              </div>
                              <div className="form-group mb-6">
                                <input
                                  type="number"
                                  className="form-control block
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
                                />
                              </div>

                              <div className="flex justify-center flex-col">
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
                                    <option selected>
                                      Selecionar una elección
                                    </option>
                                    {dataE.map((responseData) => (
                                      <option value={responseData.idEleccion}>
                                        {responseData.descripcion}
                                      </option>
                                    ))}
                                  </select>
                                </div>
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
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    aria-label="Default select example"
                                    name="estado"
                                  >
                                    <option selected>Estado</option>
                                    <option value="Activo">Activo</option>
                                    <option value="Inactivo">Inactivo</option>
                                  </select>
                                </div>{" "}
                                */
                              </div>

                              <button
                                type="submit"
                                className="
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
                          </div>
                          <button
                            type="button"
                            className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                          <button
                            type="button"
                            className="px-6
    py-2.5
    bg-red-600
    text-white
    font-medium
    text-xs
    leading-tight
    uppercase
    rounded
    shadow-md
    hover:bg-red-700 hover:shadow-lg
    transition
    duration-150
    ease-in-out"
                            data-bs-dismiss="modal"
                          >
                            Cerrar
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" mx-2 p-10 ">
                <div className="">
                  <DataTableV />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
