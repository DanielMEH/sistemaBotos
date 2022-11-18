import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faArrowRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Axios from "axios";
import Swal from "sweetalert2";
export const Header = () => {
  const navegate = useNavigate();
  const handleSession = () => {
    console.log("cerrar sesion");
    navegate("/logout");
  };
    const handdleForm = (e) => {
    e.preventDefault();
    const newForm = {
      textG: e.target.textGy.value,
    };

    Axios.put("http://localhost:3002/textUpdate", newForm).then((response) => {
      if (response.data.message === "SUCCESFULL_TEXT") {
        console.log(response);
        Swal.fire({
          icon: "success",
          title: "Se Actualizo exitosamente",
          showConfirmButton: true,
        });
      }
    });
  };
  return (
    <>
      <header>
          <div
          class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
          id="staticBackdropt"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog relative w-auto pointer-events-none">
            <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
              <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                <h5
                  class="text-xl font-medium leading-normal text-gray-800"
                  id="exampleModalLabel"
                >
                  Actualizar titulo del evento
                </h5>
                <button
                  type="button"
                  class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body relative p-4">
                <form onSubmit={handdleForm}>
                  <div class="mb-3 w-96">
                    <label
                      for="formFile"
                      class="form-label inline-block mb-2 text-gray-700"
                    >
                      Crear
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
                      type="text"
                      id="formFile"
                      name="textGy"
                    />
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
              active:bg-[#fd7e14] active:shadow-lg
              transition
              duration-150
              ease-in-out"
                  >
                    Actualizar
                  </button>
                </form>
              </div>
              <div class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                <button
                  type="button"
                  class="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
                  data-bs-dismiss="modal"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
        <nav className="relative w-full flex flex-wrap items-center text-white justify-between py-3 bg-[#ff8138]  shadow-lg navbar navbar-expand-lg navbar-light">
          <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
            <button
              className="navbar-toggler text-gray-200 border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent1"
              aria-controls="navbarSupportedContent1"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
            <div
              className=" navbar-collapse flex-grow items-center"
              id="navbarSupportedContent1"
            >
              <Link
                className="text-2xl text-white hover:text-white  pr-2 font-semibold "
                href="/dasboard"
              >
                SistamaVoto
              </Link>

              <ul className="navbar-nav flex flex-col sm:text-2xl pl-0 list-style-none mr-auto">
                <li className="nav-item p-2">
                  <a
                    className="nav-link  hover:text-black text-white  hover:red-400  focus:opacity-80 p-0"
                    href="/dasboard"
                  >
                    Resultados
                  </a>
                </li>
                <li className="nav-item p-2">
                  <a
                    className={({ isActive }) =>
                      isActive
                        ? "nav-link hover:text-black text-black  hover:opacity-80 focus:opacity-80 p-0"
                        : "nav-link hover:text-black text-white  hover:opacity-80 focus:opacity-80 p-0"
                    }
                    href="/elecciones"
                  >
                    Eleccíones
                  </a>
                </li>
                <li className="nav-item p-2">
                  <a
                    className={({ isActive }) =>
                      isActive
                        ? "nav-link hover:text-black text-black  hover:opacity-80 focus:opacity-80 p-0"
                        : "nav-link hover:text-black text-white  hover:opacity-80 focus:opacity-80 p-0"
                    }
                    href="/candidatos"
                  >
                    Candidatos
                  </a>
                </li>
                <li className="nav-item p-2">
                  <a
                    className={({ isActive }) =>
                      isActive
                        ? "nav-link hover:text-black text-black  hover:opacity-80 focus:opacity-80 p-0"
                        : "nav-link hover:text-black text-white  hover:opacity-80 focus:opacity-80 p-0"
                    }
                    href="/votantes"
                  >
                    Votantes
                  </a>
                </li>
                {/* 
                <li className="nav-item p-2">
                  <a
                    className={({ isActive }) =>
                      isActive
                        ? "nav-link hover:text-black text-black  hover:opacity-80 focus:opacity-80 p-0"
                        : "nav-link hover:text-black text-white  hover:opacity-80 focus:opacity-80 p-0"
                    }
                    href="/reportes"
                  >
                    Reportes
                  </a>
                </li> */}
              </ul>
            </div>
            <div className="flex items-center relative">
              <ul
                className="dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none left-auto right-0"
                aria-labelledby="dropdownMenuButton1"
              ></ul>
            </div>
            <div className="dropdown relative">
              <p
                className="dropdown-toggle flex items-center hidden-arrow"
                href="#"
                id="dropdownMenuButton2"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className="mr-1 text-2xl hover:text-black">
                  Mi cuenta{" "}
                </span>
                <FontAwesomeIcon icon={faArrowRightToBracket} />
              </p>
              <ul
                className="dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none left-auto right-0"
                aria-labelledby="dropdownMenuButton2"
              >
                <li>
                  <p
                    className="dropdown-item cursor-pointer text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdropt"
                  >
                    Crear titulo del evento
                  </p>
                </li>

                <li>
                  <span
                    onClick={handleSession}
                    className="cursor-pointer dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                    href="#"
                  >
                    Cerrar Sesión
                  </span>
                </li>
                  <li>
                  <a
                    
                    className="cursor-pointer dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                    href="/perfil"
                  >
                    Mi perfil
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
