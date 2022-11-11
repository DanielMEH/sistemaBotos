import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { useParams } from 'react-router-dom';

export const EditElection = () => {
  const { id } = useParams();
  const [eleccionGet, setEleccionGet] = useState([]);
  const getElection = async () => {
    const response = await Axios.get("http://localhost:3002/viewsElections/" + parseInt(id));
    setEleccionGet(response.data.data);
  }
  useEffect(() => {
    getElection();
  }, [])

  const handdleSubmit = (e) => {
    e.preventDefault()
    const newPost = {
      descripcion: e.target.descripcion.value,
      cargo: e.target.cargo.value,
      estado: e.target.estado.value
    }
    
    const updateElection = async () => {
      const response = await Axios.put("http://localhost:3002/updateElection/"+parseInt(id), newPost);
      window.location.href = '/elecciones'
    }
    updateElection()
  }


  return (
    <>
      {eleccionGet.map((i) => (
        <div className="login bg-slate-900">
          <div className="block p-6 rounded-lg h-fit border shadow-2xl bg-white max-w-sm absolute inset-0 m-auto">
            <form onSubmit={handdleSubmit}>
              <h2 className="text-center text-2xl font-semibold mb-2">
                Actualizar datos
              </h2>
              <div className="form-group mb-6">
                <label
                  htmlFor="exampleInputEmail2"
                  className="form-label mt-1 text-xl inline-block mb-2 text-gray-700"
                >

                </label>
                <input
                  type="text"
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
                  placeholder="Descripción"
                  name="descripcion"
                  defaultValue={i.descripcion}
                />
              </div>
              <div className="form-group mb-6">
                <label
                  htmlFor="exampleInputEmail2"
                  className="form-label mt-1 text-xl inline-block mb-2 text-gray-700"
                >
                </label>
                <input
                  type="text"
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
                  placeholder="Cargo"
                  name="cargo"
                  defaultValue={i.cargo}
                />
              </div>
              <div className="form-group mb-6">
                <select className="form-select appearance-none block w-full px-3py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border 
             border-solid border-gray-300 rounded transition ease-in-out m-0
           focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  aria-label="Default select example"
                  name='estado'
                >
                  <option selected> {i.estado} </option>
                  <option value="1">Activo</option>
                  <option value="2">Inactivo</option>
                </select>
              </div>
              <div className="flex justify-between items-center mb-6">
                <span
                  href="#!"
                  className="cursor-pointer text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
                >
                </span>
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
                ACTUALIZAR!
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
      ))}

    </>
  )
}

