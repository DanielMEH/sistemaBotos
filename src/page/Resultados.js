import React from 'react'

export const Resultados = () => {
  return (
    <>
      <main>
        <section>
          <div className="bg-gray-200 mx-2 my-5 p-2 rounded">
            <h2>Resultados</h2>
          </div>

          <div className="">
            <h2 className="mx-2 mb-2">Seleccióna una elección</h2>
            <div className="border border-gray-900 rounded mx-2">
              <div className="border-2">
                <div>
                  <h3 className="bg-[#ff8138]  text-white  rounded p-2">
                    Elecciones
                  </h3>
                  <div className=" mx-2 p-10 ">
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
                      >
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
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
                    <div className="mb-3 xl:w-96"></div>
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
