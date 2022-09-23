import React from "react";
import { Header } from "../components/Header";

export const Candidatos = () => {
  return (
    <>
      <Header />

      <main>
        <section>
          <div class="bg-gray-200 mx-2 my-5 p-2 rounded">
            <h2>Elecciones</h2>
          </div>
          <div class="">
            <div class="border border-gray-200 rounded mx-2">
              <div class="border-2">
                <div>
                  <div class="bg-[#ff8138]  text-white  rounded p-2 flex justify-between items-center">
                    <h3>lista de Elecciones</h3>
                  </div>
                </div>

                <div class=" mx-2 p-10 ">
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
                    >
                      <option selected>Elegir eleccion</option>
                      <option value="1">Eleccion 1</option>
                      <option value="2">Eleccion 2</option>
                      <option value="3">Eleccion 3</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /*-- ggggg*/}
          <div class="border border-gray-200 rounded mx-2 mt-2">
            <div class="border-2">
              <div>
                <div class="bg-[#ff8138]  text-white  rounded p-2 flex justify-between items-center">
                  <h3>lista de candidatos</h3>
                  <div class="modal">
                    <button
                      type="button"
                      class="px-6
py-2.5
bg-gray-200
text-black
font-medium
text-xs
leading-tight
uppercase
rounded
shadow-md
hover:bg-gray-300 hover:shadow-lg
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
                      class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
                      id="exampleModal"
                      tabindex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div class="modal-dialog relative w-auto pointer-events-none">
                        <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                          <div class="modal-header flex flex-col flex-shrink-0 items-center justify-center p-4 border-b border-gray-200 rounded-t-md">
                            <h5
                              class="text-xl font-medium leading-normal text-gray-800"
                              id="exampleModalLabel"
                            >
                              Ingresar Datos
                            </h5>
                            <div class="block p-6 rounded-lg  bg-white max-w-md">
                              <form>
                                <div class="mb-3 w-96">
                                  <label
                                    for="formFile"
                                    class="form-label inline-block mb-2 text-gray-700"
                                  >
                                    Foto
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
                                    type="file"
                                    id="formFile"
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
            mt-2
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    id="exampleInput7"
                                    placeholder="Documento"
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
                                    id="exampleInput7"
                                    placeholder="Nombres Completo y apellidos"
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
                                    id="exampleInput7"
                                    placeholder="Programa de Formacion"
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
                                    id="exampleInput7"
                                    placeholder="Numero de la ficha"
                                  />
                                </div>
                                <div class="form-group mb-6">
                                  <textarea
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
                                    id="exampleFormControlTextarea13"
                                    rows="3"
                                    placeholder="Descripción"
                                  ></textarea>
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
                                      aria-label="Default select example"
                                    >
                                      <option selected>
                                        Selecionar el estado
                                      </option>
                                      <option value="1">Activo</option>
                                      <option value="2">Inactivo</option>
                                    </select>
                                  </div>
                                </div>
                                COPY Important! Tailwind Elements is 100% free
                                and relies
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
                                  Registrar
                                </button>
                              </form>
                            </div>
                            <button
                              type="button"
                              class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                            <button
                              type="button"
                              class="px-6
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
                <div class=" mx-2 p-10 ">
                  <div class="">
                    <table
                      id="table_id"
                      class="ui celled table responsive nowrap unstackable "
                      style={{ width: "100%" }}
                    >
                      <thead class="bg-white border-b">
                        <tr>
                          <th>Documento</th>
                          <th>Foto</th>
                          <th>Nombres y apellidos</th>
                          <th>Programa de formación</th>
                          <th>Numero de la ficha</th>
                          <th>Descripción</th>
                          <th>Estado</th>
                          <th>Fecha de registro</th>
                          <th>Ajustes</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1005090349</td>
                          <td>Foto #1</td>
                          <td>Juan Daniel </td>
                          <td>Adsi</td>
                          <td>2469181</td>
                          <td>Excelencia</td>
                          <td>Inactivo</td>
                          <td>12-04-2022</td>

                          <td>
                            <div class="btn">
                              <a
                                class="bg-blue-600 text-white rounded p-1 m-1"
                                href="/edit"
                              >
                                Editar
                              </a>
                              <a
                                class="bg-red-600 text-white p-1 rounded m-1"
                                href="/delete"
                              >
                                Eliminar
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>1109414100</td>
                          <td>Foto #1</td>
                          <td>Juan Daniel Opina O</td>
                          <td>Gestión Empresarial</td>
                          <td>1125634</td>
                          <td>Exelencia</td>
                          <td>Inactivo</td>
                          <td>12-04-2022</td>
                          <td>
                            <div class="btn">
                              <a
                                class="bg-blue-600 text-white rounded p-1 m-1"
                                href="/edit"
                              >
                                Editar
                              </a>
                              <a
                                class="bg-red-600 text-white p-1 rounded m-1"
                                href="/delete"
                              >
                                Eliminar
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>1109414100</td>
                          <td>Foto #1</td>
                          <td>Juan Daniel Opina O</td>
                          <td>Gestión Empresarial</td>
                          <td>1125634</td>
                          <td>Exelencia</td>
                          <td>Inactivo</td>
                          <td>12-04-2022</td>
                          <td>
                            <div class="btn">
                              <a
                                class="bg-blue-600 text-white rounded p-1 m-1"
                                href="/edit"
                              >
                                Editar
                              </a>
                              <a
                                class="bg-red-600 text-white p-1 rounded m-1"
                                href="/delete"
                              >
                                Eliminar
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>1109414100</td>
                          <td>Foto #1</td>
                          <td>Juan Daniel Opina O</td>
                          <td>Gestión Empresarial</td>
                          <td>1125634</td>
                          <td>Exelencia</td>
                          <td>Inactivo</td>
                          <td>12-04-2022</td>
                          <td>
                            <div class="btn">
                              <a
                                class="bg-blue-600 text-white rounded p-1 m-1"
                                href="/edit"
                              >
                                Editar
                              </a>
                              <a
                                class="bg-red-600 text-white p-1 rounded m-1"
                                href="/delete"
                              >
                                Eliminar
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>1109414100</td>
                          <td>Foto #1</td>
                          <td>Juan Daniel Opina O</td>
                          <td>Gestión Empresarial</td>
                          <td>1125634</td>
                          <td>Exelencia</td>
                          <td>Inactivo</td>
                          <td>12-04-2022</td>
                          <td>
                            <div class="btn">
                              <a
                                class="bg-blue-600 text-white rounded p-1 m-1"
                                href="/edit"
                              >
                                Editar
                              </a>
                              <a
                                class="bg-red-600 text-white p-1 rounded m-1"
                                href="/delete"
                              >
                                Eliminar
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>1109414100</td>
                          <td>Foto #1</td>
                          <td>Juan Daniel Opina O</td>
                          <td>Gestión Empresarial</td>
                          <td>1125634</td>
                          <td>Exelencia</td>
                          <td>Inactivo</td>
                          <td>12-04-2022</td>
                          <td>
                            <div class="btn">
                              <a
                                class="bg-blue-600 text-white rounded p-1 m-1"
                                href="/edit"
                              >
                                Editar
                              </a>
                              <a
                                class="bg-red-600 text-white p-1 rounded m-1"
                                href="/delete"
                              >
                                Eliminar
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>1109414100</td>
                          <td>Foto #1</td>
                          <td>Juan Daniel Opina O</td>
                          <td>Gestión Empresarial</td>
                          <td>1125634</td>
                          <td>Exelencia</td>
                          <td>Inactivo</td>
                          <td>12-04-2022</td>
                          <td>
                            <div class="btn">
                              <a
                                class="bg-blue-600 text-white rounded p-1 m-1"
                                href="/edit"
                              >
                                Editar
                              </a>
                              <a
                                class="bg-red-600 text-white p-1 rounded m-1"
                                href="/delete"
                              >
                                Eliminar
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>1109414100</td>
                          <td>Foto #1</td>
                          <td>Juan Daniel Opina O</td>
                          <td>Gestión Empresarial</td>
                          <td>1125634</td>
                          <td>Exelencia</td>
                          <td>Inactivo</td>
                          <td>12-04-2022</td>
                          <td>
                            <div class="btn">
                              <a
                                class="bg-blue-600 text-white rounded p-1 m-1"
                                href="/edit"
                              >
                                Editar
                              </a>
                              <a
                                class="bg-red-600 text-white p-1 rounded m-1"
                                href="/delete"
                              >
                                Eliminar
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>1109414100</td>
                          <td>Foto #1</td>
                          <td>Juan Daniel Opina O</td>
                          <td>Gestión Empresarial</td>
                          <td>1125634</td>
                          <td>Exelencia</td>
                          <td>Inactivo</td>
                          <td>12-04-2022</td>
                          <td>
                            <div class="btn">
                              <a
                                class="bg-blue-600 text-white rounded p-1 m-1"
                                href="/edit"
                              >
                                Editar
                              </a>
                              <a
                                class="bg-red-600 text-white p-1 rounded m-1"
                                href="/delete"
                              >
                                Eliminar
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>1109414100</td>
                          <td>Foto #1</td>
                          <td>Juan Daniel Opina O</td>
                          <td>Gestión Empresarial</td>
                          <td>1125634</td>
                          <td>Exelencia</td>
                          <td>Inactivo</td>
                          <td>12-04-2022</td>
                          <td>
                            <div class="btn">
                              <a
                                class="bg-blue-600 text-white rounded p-1 m-1"
                                href="/edit"
                              >
                                Editar
                              </a>
                              <a
                                class="bg-red-600 text-white p-1 rounded m-1"
                                href="/delete"
                              >
                                Eliminar
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>1109414100</td>
                          <td>Foto #1</td>
                          <td>Juan Daniel Opina O</td>
                          <td>Gestión Empresarial</td>
                          <td>1125634</td>
                          <td>Exelencia</td>
                          <td>Inactivo</td>
                          <td>12-04-2022</td>
                          <td>
                            <div class="btn">
                              <a
                                class="bg-blue-600 text-white rounded p-1 m-1"
                                href="/edit"
                              >
                                Editar
                              </a>
                              <a
                                class="bg-red-600 text-white p-1 rounded m-1"
                                href="/delete"
                              >
                                Eliminar
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>1109414100</td>
                          <td>Foto #1</td>
                          <td>Juan Daniel Opina O</td>
                          <td>Gestión Empresarial</td>
                          <td>1125634</td>
                          <td>Exelencia</td>
                          <td>Inactivo</td>
                          <td>12-04-2022</td>
                          <td>
                            <div class="btn">
                              <a
                                class="bg-blue-600 text-white rounded p-1 m-1"
                                href="/edit"
                              >
                                Editar
                              </a>
                              <a
                                class="bg-red-600 text-white p-1 rounded m-1"
                                href="/delete"
                              >
                                Eliminar
                              </a>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
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
