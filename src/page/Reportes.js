import React from 'react'
import { Header } from '../components/Header'

export const Reportes = () => {
  return (
    <>
      <Header />
      <main>
        <section>
          <div class="bg-gray-200 mx-2 my-5 p-2 rounded">
            <h2>Elecciones</h2>
          </div>

          <div v class="">
            <div class="border border-gray-200 rounded mx-2">
              <div class="border-2">
                <div>
                  <div class="bg-[#ff8138] text-white  rounded p-2 flex justify-between items-center">
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
                      <option selected>Seleccionar</option>
                      <option value="1">candidatos</option>
                      <option value="2">Votantes</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div class="border border-gray-200 rounded mx-2 mt-2">
            <div class="border-2">
              <div>
                <div class="bg-[#ff8138] text-white  rounded p-2 flex justify-between items-center">
                  <h3>Lista de Candidatos</h3>
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
                          <th>Documento de entidad</th>
                          <th>Nombres</th>
                          <th>Apellidos</th>
                          <th>Fecha Registrado</th>
                          <th>Emitio Voto</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>45148958</td>
                          <td>Juana Maria</td>
                          <td>Vegas</td>
                          <td>20/09/2022</td>
                          <td>Si</td>
                        </tr>
                        <tr>
                          <td>1987657266</td>
                          <td>Juan Camilo</td>
                          <td>Restrepo Henao</td>
                          <td>22/08/2022</td>
                          <td>No</td>
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
}
