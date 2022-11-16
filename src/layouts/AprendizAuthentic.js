import React, { useState, useEffect } from "react";
import { Form, useNavigate } from "react-router-dom";
import Axios from "axios";
import Swal from "sweetalert2";
export const AprendizAuthentic = () => {
  const [setData, setfirst] = useState(null);
  const [titulo, setTitulo] = useState([]);
  const navegate = useNavigate();

  const getData = async () => {
    await Axios.get("http://localhost:3002/text").then((response) => {
      setTitulo(response.data.data);
      console.log(response);
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const documento = e.target.documento.value;
    const result = await Axios.post("http://localhost:3002/votantesView", {
      documento: documento,
    });

    if (result.data.message === "SUCCESFULL_VIEW") {
      await Swal.fire({
        position: "top-end",
        icon: "success",
        title: "El documento fue correcto",
        showConfirmButton: false,
        timer: 1500,
      });

      navegate("/selectEleccion/" + documento);
    } else if (result.data.message === "ERROR_NOT_EXIXT") {
      await Swal.fire({
        icon: "error",
        title: "Error",
        text: "El documento no existe o no es valido",
        footer: "<p>Verifica que estes registrado en la plataforma</p>",
      });
    } else if (result.data.message === "USER_IS_INACTIVE") {
      await Swal.fire({
        icon: "error",
        title: "Error",
        text: "Ya votaste",
        footer: `<p>Estado de error ${result.data.message} </p>`,
      });
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className="container mx-auto  ">
        <div className="flex justify-center px-6  absolute inset-0 m-auto  h-fit ">
          <div className="w-full xl:w-2/4 lg:w-11/12 flex flex-col sm:flex-row shadow-xl border rounded-xl overflow-hidden">
            <div className="w-full h-auto bg-[#ff8138]  lg:block lg:w-1/2 bg-cover rounded-l-lg">
              <div className="px-8 mb-4 text-center">
                <h3 className="pt-4 mb-2 text-3xl text-white">
                  {titulo.map((i) => (
                    <h3>{i.text == null ? "hola" : i.text}</h3>
                  ))}
                </h3>
                <p className="mb-2 text-xl text-white">
                  Al momento de votar por su candidato no podra volver a votar.
                  asegurate de de elegir bien.
                </p>
              </div>
            </div>

            <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
              <form onSubmit={handleSubmit}>
                <div className="form-group mb-6">
                  <label
                    htmlFor="exampleInputPassword2"
                    className="form-label inline-block mb-2 sm:text-[1.3rem] text-gray-700"
                  >
                    Ingresar numero de documento:
                  </label>
                  <input
                    type="number"
                    className="form-control block
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
                    name="documento"
                  />
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
        </div>
      </div>
    </>
  );
};
