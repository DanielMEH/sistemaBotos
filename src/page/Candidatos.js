import React,{useEffect,useState} from "react";
import { Header } from "../components/Header";
import {DataTableC} from "../components/DataTableC"
import Axios from 'axios';
import Swal from "sweetalert2";

export const Candidatos = () => {
  const [Elecciones, setElecciones] = useState([]);
  const [Image, setImage] = useState([]);
  const consult = async ()=>{
    const datos = await Axios.get("http://localhost:3002/electionsView")
    setElecciones(datos.data.data)
    console.log(datos);

  }
  const handleSubmit = async (e)=>{
    e.preventDefault();
    const newPostCandidato ={
        documento:e.target.documento.value,
        nombreCandidato:e.target.nombre.value,
        programaFormacion:e.target.programaFormacion.value,
        fichaPrograma:e.target.numeroFicha.value,
        estado:e.target.estado.value,
        imagen:Image,
        id:e.target.options.value
    }
  const response = await Axios.post("http://localhost:3002/postCandidato",newPostCandidato,{
    
  headers:{
    
    'Content-Type':'multipart/form-data'
    }
  })
  
  .then((response)=>{
   if(response.data.message === "POSTCANDIDATO"){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Candidato Registrado',
    })
    window.location.href = "/candidatos"
   }
  })
  .catch((error)=>{
    console.log(error);
  })
  }
   
  
  useEffect(()=>{
 consult();
  },[])
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
                  <div class="">
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
                              <form onSubmit={handleSubmit}>
                                <div class="mb-3 w-96">
                                  <label
                                    for="formFile"
                                    class="form-label inline-block mb-2 text-gray-700"
                                  >
                                    Foto
                                  </label>
                                  <input onChange={
                                    (e)=>{
                                      setImage(e.target.files[0]);
                                    }
                                  }
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
            name="imagen"
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
            name="documento"
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
            name="nombre"
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
            name="programaFormacion"
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
            name="numeroFicha"
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
          name="descripcion"
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
                name="estado"
                                      aria-label="Default select example"
                                    >
                                      <option selected>
                                        Selecionar el estado
                                      </option>
                                      <option value="1">Activo</option>
                                      <option value="2">Inactivo</option>
                                    </select>
                                    <select
                                      class="form-select appearance-none
                block
                w-full
                px-3
                py-1.5
                mt-3
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
                name="options"
                                      aria-label="Default select example"
                                    >
                                      <option selected>
                                        Selecionar Eleccion
                                      </option>
                                      {Elecciones.map(i=>(
                                      <option value={i.idEleccion}>{i.descripcion}</option>
                                      )
                                      )}
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
                   <DataTableC/>
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
