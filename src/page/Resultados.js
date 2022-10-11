import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link, NavLink, useNavigate } from "react-router-dom";
export const Resultados = () => {
  const [dataE, setDataE] = useState([]);
  const [candidatosGet, setCandidatosGet] = useState([]);
  const getEleccionesData = async () => {
    const response = await Axios.get("http://localhost:3002/electionsView");
    setDataE(await response.data.data);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = e.target.elecionstatetate.value;
    if (id) {
      const responseCad = await Axios.get(
        "http://localhost:3002/candidatosViws/" + id
      );
      setCandidatosGet(await responseCad.data.data);
    }
  };

  useEffect(() => {
    getEleccionesData();
  }, []);
  return (
    <>
      <main>
        <section>
          <div className="bg-gray-200 mx-2 my-5 p-2 rounded">
            <h2>Resultados</h2>
          </div>

          <div className="">
            <h2 className="mx-2 mb-2">Seleccióne una elección</h2>
            <div className="border border-gray-900 rounded mx-2">
              <div className="border-2">
                <div>
                  <h3 className="bg-[#ff8138]  text-white  rounded p-2">
                    Elecciones
                  </h3>
                  <div className=" mx-2 p-10 ">
                    <div className="mb-3 xl:w-96">
                      <form onSubmit={handleSubmit}>
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
                          name="elecionstatetate"
                        >
                          {dataE.map((responseData) => (
                            <>
                              <option value={responseData.idEleccion}>
                                {responseData.descripcion}
                              </option>
                            </>
                          ))}
                        </select>
                        <button className="bg-[#ff8138] py-1 mt-2 rounded text-white px-3">
                          Elegir
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="mt-2">
            <div className="border border-gray-900 rounded mx-2">
              <div className="border-2">
                <div>
                  <h3 className="bg-[#ff8138]  text-white  rounded p-2">
                    Resultados
                  </h3>

                  <div className=" mx-2 p-10 ">
                  
                    <div className="mb-3 grid grid-cols-1 gap-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                      {candidatosGet === "NOT_FOUND_RESULT"
                        ? "No Hay candidatos para esra eleccion"
                        : candidatosGet.map((section) => (
                            <>
                              <div class="relative mx-auto w-full">
                                <div class="rounded-lg bg-white p-4 shadow">
                                  <div class="relative flex h-52 justify-center overflow-hidden rounded-lg">
                                    <div class="w-full transform transition-transform duration-500 ease-in-out hover:scale-110">
                                      <div class="absolute inset-0 bg-gray-200 bg-opacity-80">
                                        <img src={section.imgUrl} alt="" />
                                      </div>
                                    </div>

                                    <div class="absolute bottom-0 right-5 mb-3 flex">
                                      <p class="flex items-center font-medium text-gray-800">
                                        <i class="fa fa-heart mr-2 text-2xl text-white"></i>
                                      </p>
                                    </div>

                                    <span class="absolute top-0 right-2 z-10 mt-3 ml-3 inline-flex select-none rounded-sm bg-gray-800 px-2 py-1 text-xs font-semibold text-white">
                                      {section.nombreCandidato}
                                    </span>
                                    <span class="absolute top-0 left-0 z-10 mt-3 ml-3 inline-flex select-none rounded-lg bg-transparent px-3 py-2 text-lg font-medium text-white">
                                      {" "}
                                      <i class="fa fa-star"></i>{" "}
                                    </span>
                                  </div>

                                  <div class="mt-4">
                                    <h2
                                      class="line-clamp-1 text-2xl font-medium text-gray-800 md:text-lg"
                                      title="New York"
                                    >
                                      Programa de formación:{" "}
                                      {section.programaFormacion}
                                    </h2>

                                    <p class="text-primary mt-2 inline-block whitespace-nowrap rounded-xl font-semibold leading-tight">
                                      <span class="text-2xl text-gray-500">
                                        Numero de la ficha{" "}
                                        {section.fichaPrograma}
                                      </span>
                                    </p>
                                  </div>
                                  <div class="mt-8 grid grid-cols-2">
                                    <div class="flex items-center">
                                      <div className="ml-1 block">
                                        Estado:{" "}
                                        {section.estado === "Activo" ? (
                                          <>
                                            <h2 className="text-green-400">
                                              {section.estado}
                                            </h2>
                                          </>
                                        ) : (
                                          <h2 className="text-red-500">
                                            {section.estado}
                                          </h2>
                                        )}
                                      </div>
                                    </div>

                                    <div class="flex justify-center items-center">
                                      Numero de votos:
                                      <span>
                                        <i class="fa f-phone rounded-md bg-gray-200 py-1 px-3 text-2xl text-gray-800">
                                          {section.totalVotos}
                                        </i>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </>
                          ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
