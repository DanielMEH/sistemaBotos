import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faArrowRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink, useNavigate } from "react-router-dom";
export const Header = () => {
  const navegate = useNavigate();
  const handleSession = () => {
    console.log("cerrar sesion");
    navegate("/logout");
  };
  return (
    <>
      <header>
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
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
