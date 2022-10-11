import React, {useState} from "react";
import Axios from "axios";
import Swal from "sweetalert2";
import { useParams, useNavigate, Navigate, Link, Form} from "react-router-dom"
export const Admin = () => {
  const navegate = useNavigate()
  const [cuenta, setCuenta] = useState(true)
  const handdleSubmit = async (e)=>{
    e.preventDefault();
    const correo = e.target.correo.value;
    const password = e.target.password.value;
    const formPost = {
      correo: correo,
      password: password
    }
    if (cuenta) {
      const response = await  Axios.post("http://localhost:3002/login",formPost);
       console.log(response);
     console.log(response);
     if (response.data.message === "SUCCESFULUSER") {
      let timerInterval
 await Swal.fire({
  title: 'Espera un momento',
  html: 'Cargando.. <b></b> Segundos',
  timer: 2000,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading()
    const b = Swal.getHtmlContainer().querySelector('b')
    timerInterval = setInterval(() => {
      b.textContent = Swal.getTimerLeft()
    }, 100)
  },
  willClose: () => {
    clearInterval(timerInterval)
  }
}).then((result) => {
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log('I was closed by the timer')
  }
})
   navegate("/dasboards")
     }else if(response.data.message === "EROORUSER"){
      await Swal.fire({ 
        icon: "error",
        title: "Error",
        text: "El correo o contraseña son incorrectos",
        footer: "<p>Intenta de nuevo</p>",
      });

      }
      
    }else{
     
     const response = await  Axios.post("http://localhost:3002/signup",formPost);
     console.log(response);
     if (response.data.message === "insetUser") {
      await Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Su cuenta fue creada exitosamente",
        showConfirmButton: false,
        timer: 1500,
      });
      setCuenta(!cuenta)

     }else if(response.data.message === "EMAIL_EXIST"){
      await Swal.fire({ 
        icon: "error",
        title: "Error",
        text: "Este correo ya existe",
        footer: "<p>Intenta con otro correo</p>",
      });

     }
    }
  }
  const handleEstado = ()=>{
    setCuenta(!cuenta)
  }
  return (
    <>
      <div className="login bg-slate-900">
        <div className="block p-6 rounded-lg h-fit border shadow-2xl bg-white max-w-sm absolute inset-0 m-auto">
          <form onSubmit={handdleSubmit}>
            <h2 className="text-center text-2xl font-semibold mb-2">
              {cuenta ? "Iniciar session":"Registrarse"}
             
            </h2>
            <div className="form-group mb-6">
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
                Ingresar contraseña
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
              <span
              onClick={handleEstado}
                href="#!"
                className="cursor-pointer text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
              >
                {cuenta ? "No tienes cuenta?": "Ya tienes cuenta?"}
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
              {cuenta ? "Iniciar session": "Registrarse"}
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
