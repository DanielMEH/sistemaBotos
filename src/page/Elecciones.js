import React, { useState, useEffect } from "react";
import { Header } from "../components/Header";
import { DataTableE } from "../components/DataTableE";
import Axios from "axios";
import Swal from "sweetalert2";
import { Link, NavLink, useNavigate } from "react-router-dom";
import moment from "moment-with-locales-es6";
export const Elecciones = () => {
  const [eleccionGet, setEleccionGet] = useState([]);
  const getElection = async () => {
    const response = await Axios.get("http://localhost:3002/electionsView");
    setEleccionGet(response.data.data);
  };
  const handlesubmit = async (e) => {
    e.preventDefault();
    const descripcion = e.target.descripcion.value;
    const cargo = e.target.cargo.value;
    const estado = e.target.estado.value;
    const formData = {
      descripcion,
      cargo,
      estado,
    };
    const responseForm = await Axios.post(
      "http://localhost:3002/createElection",
      formData
    );

    if (responseForm.data.data === "INSERTELLECCION") {
      let timerInterval;
      await Swal.fire({
        title: "Espera un momento",
        html: "<b></b>...",
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
          const b = Swal.getHtmlContainer().querySelector("b");
          timerInterval = setInterval(() => {
            b.textContent = Swal.getTimerLeft();
          }, 100);
        },
        willClose: () => {
          clearInterval(timerInterval);
        },
      }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log("I was closed by the timer");
        }
      });
      await Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Registro creado",
        showConfirmButton: false,
        timer: 1500,
      });

      window.location.href = "/elecciones";
    } else if (responseForm.data.data === "ERRDATA") {
      await Swal.fire({
        icon: "error",
        title: "Hubo un error",
        text: "No se pudo crear el registro intenta de nuevo",
      });
    }
  };

  useEffect(() => {
    getElection();
  }, []);

  moment.locale("es");
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
                        <form onSubmit={handlesubmit}>
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
                                name="descripcion"
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
                                name="cargo"
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
                              name="estado"
                            >
                              <option selected>Seleccionar</option>
                              <option defaultValue="Activo">Activo</option>
                              <option defaultValue="Inactivo">Inactivo</option>
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
              <section className="">
                <div className="flex flex-col justify-center h-full">
                  <div className="  bg-white shadow-lg rounded-sm border border-gray-200">
                    <div className="">
                      <div className="overflow-x-auto">
                        <DataTableE />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
