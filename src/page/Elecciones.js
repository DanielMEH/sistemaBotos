import React from "react";
import { Header } from "../components/Header";
import { DataTableE } from "../components/DataTableE";
export const Elecciones = () => {


  return (
    <>
      <Header />
      <main>
        <div className="bg-gray-200 mx-2 my-5 p-2 rounded">
          <h2>Elecciones</h2>
        </div>
        <div className="border border-gray-200 rounded mx-2 ">
          <div className="bg-[#ff8138]  text-white  rounded p-2 mb-2 flex justify-between items-center">
            <h3>lista de Elecciones </h3>
            <div className="">
              <button
                type="button"
                className="px-6
py-2.5
bg-gray-200
text-black
font-medium
text-xs
leading-tight
uppercase
rounded
shadow-md
hover:bg-ray-300 hover:shadow-lg
focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0
active:bg-gray-300 active:shadow-lg
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
                        class="text-xl font-medium leading-normal text-gray-800"
                        id="exampleModalLabel"
                      >
                        Ingresar Datos
                      </h5>
                      <div className="block p-6 rounded-lg  bg-white max-w-md">
                        <form>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="form-group mb-6">
                              <input
                                type="text"
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
                                id="exampleInput123"
                                aria-describedby="emailHelp123"
                                placeholder="Descripción"
                              />
                            </div>
                            <div className="form-group mb-6">
                              <input
                                type="text"
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
                                id="exampleInput124"
                                aria-describedby="emailHelp124"
                                placeholder="Cargo"
                              />
                            </div>
                          </div>

                          <div className="form-group mb-6">
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
                            >
                              <option selected>Seleccionar</option>
                              <option defaultValue="1">Activo</option>
                              <option defaultValue="2">Inactivo</option>
                            </select>
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
          <div clasName=" mx-2 p-10 ">
            <div clasName="">
              <DataTableE />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
