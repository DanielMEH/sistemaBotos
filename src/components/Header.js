import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faArrowRightToBracket} from '@fortawesome/free-solid-svg-icons'
import {Link } from "react-router-dom"
export const Header = () => {
  return (
    <>
    <header>
        <nav
        className="relative w-full flex flex-wrap items-center justify-between py-3 bg-gray-900 text-gray-200 shadow-lg navbar navbar-expand-lg navbar-light"
      >
        <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
          <button
            className="navbar-toggler text-gray-200 border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent1"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
           
            <FontAwesomeIcon icon={faBars}/>
          </button>
          <div className="collapse navbar-collapse flex-grow items-center" id="navbarSupportedContent1">
            <Link className="text-xl text-white pr-2 font-semibold" href="/dasboard">SistamaVoto</Link>
       
            <ul className="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
              <li className="nav-item p-2">
                <a
                  className="nav-link text-white opacity-60 hover:opacity-80 focus:opacity-80 p-0"
                  href="/dasboard"
                  >Resultados</a>
              </li>
              <li className="nav-item p-2">
                <a
                  className="nav-link text-white opacity-60 hover:opacity-80 focus:opacity-80 p-0"
                  href="/elecciones"
                  >Eleccíones</a>
              </li>
              <li className="nav-item p-2">
                  <a
                    className="nav-link text-white opacity-60 hover:opacity-80 focus:opacity-80 p-0"
                    href="/candidatos"
                    >Candidatos</a>
                </li>
                <li className="nav-item p-2">
                  <a
                    className="nav-link text-white opacity-60 hover:opacity-80 focus:opacity-80 p-0"
                    href="/votantes"
                    >Votantes</a>
                </li>
      
                <li className="nav-item p-2">
                  <a
                    className="nav-link text-white opacity-60 hover:opacity-80 focus:opacity-80 p-0"
                    href="/reportes"
                    >Reportes</a>
                </li>
            </ul>
          </div>
          <div className="flex items-center relative">
         
              <ul
                className="dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none left-auto right-0"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <a
                    className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                    href="#"
                    >Action</a>
                </li>
                <li>
                  <a
                    className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                    href="#"
                    >Another action</a>
                </li>
                <li>
                  <a
                    className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                    href="#"
                    >Something else here</a>
                </li>
              </ul>
            </div>
            <div className="dropdown relative">
              <a
                className="dropdown-toggle flex items-center hidden-arrow"
                href="#"
                id="dropdownMenuButton2"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
              <span className="mr-1">Cerrar Sesión </span>
                <FontAwesomeIcon icon={faArrowRightToBracket}/>
              </a>
              <ul
                className="dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none left-auto right-0"
                aria-labelledby="dropdownMenuButton2"
              >
              <li>
                  
                  <a
                    className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                    href="#"
                    >Ajustes</a>
                </li>
                <li>
                  <a
                    className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                    href="#"
                    >Cerrar Sesión</a>
                </li>
              </ul>
            </div>
          </div>
       
      </nav>
       </header>
    </>
  )
}
