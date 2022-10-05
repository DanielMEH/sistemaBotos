import React from "react";


export const Admin = () => {

  return (
    <>
      <div className="login bg-slate-900">
        <div className="block p-6 rounded-lg h-fit border shadow-2xl bg-white max-w-sm absolute inset-0 m-auto">
          <form>
            <h2 className="text-center text-2xl font-semibold mb-2">
              Iniciar Sesión
            </h2>
            <div class="form-group mb-6">
              <label
                htmlFor="exampleInputEmail2"
                className="form-label mt-1 text-xl inline-block mb-2 text-gray-700"
              >
                Correo electronico
              </label>
              <input
                type="email"
                className="form-control
                  block
                  w-full
                  px-3
                  py-3
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
                id="exampleInputEmail2"
                aria-describedby="emailHelp"
                placeholder="Email"
                name="correo"
              />
            </div>
            <div className="form-group mb-6">
              <label
                htmlFor="exampleInputPassword2"
                className="form-label inline-block mt-1 text-xl mb-2 text-gray-700"
              >
                Ingresar Contraseña
              </label>
              <input
                type="password"
                className="form-control block
                  w-full
                  px-3
                  py-3
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
                id="exampleInputPassword2"
                placeholder="Contraseña"
                name="password"
              />
            </div>
            <div className="flex justify-between items-center mb-6">
              <a
                href="#!"
                className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
              >
                Olvidate tu contraseña?
              </a>
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
              Iniciar sesión
            </button>
            {/* <p class="text-gray-800 mt-6 text-center">
              No tienes cuenta?{" Inicia session "}
              <a
                href="#!"
                class="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
              >
                Registrarse
              </a>
            </p> */}
          </form>
        </div>
      </div>
    </>
  );
};
