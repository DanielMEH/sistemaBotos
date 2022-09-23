import React from "react";

export const AprendizAuthentic = () => {
  return (
    <>
      <title>Login</title>
      <div class="login">
        <div class="block p-6 rounded-lg h-48 shadow-2xl border bg-white max-w-sm absolute inset-0 m-auto">
          <form>
            <div class="form-group mb-6">
              <label
                for="exampleInputPassword2"
                class="form-label inline-block mb-2 sm:text-[1.3rem] text-gray-700"
              >
                Ingresar numero de documento
              </label>
              <input
                type="number"
                class="form-control block
                  w-full
                  px-3
                  py-2
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-[#fd7e14]
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-[#fd7e14] focus:outline-none"
                id="exampleInputPassword2"
                placeholder="Documento"
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
                sm:text-xl
                leading-tight
                capitalize
                rounded
                shadow-md
                hover:bg-[#fd7e14] hover:shadow-lg
                focus:bg-[#fd7e14] focus:shadow-lg focus:outline-none focus:ring-0
                active:bg-[#fd7e14] active:shadow-lg
                transition
                duration-150
                ease-in-out"
            >
              Ingresar
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
