import React from 'react'
import { Link } from 'react-router-dom'

export const Select = () => {
  return (
    <div className=' h-fit absolute inset-0 m-auto  items-center flex justify-center gap-2'>

<div className="flex justify-center">
  <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
    <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">1) Elección</h5>
    <p className="text-gray-700 text-base mb-4">
    Aprendiz participa para la execelencia
    </p>
    <Link to="/CandidatoVotar" 
    className=" inline-block px-6 py-2.5 bg-[#ff8138] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#fd7e14]  hover:shadow-lg focus:bg-[#fd7e14]  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#fd7e14] active:shadow-lg transition duration-150 ease-in-out">
        Ingresar
        </Link>
  </div>
</div>
<div className="flex justify-center  ">
  <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
    <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">2) Elección</h5>
    <p className="text-gray-700 text-base mb-4">
      Aprendiz participa para la execelencia
    </p>
    <Link to="/CandidatoVotar" 
    className=" inline-block px-6 py-2.5 bg-[#ff8138] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#fd7e14]  hover:shadow-lg focus:bg-[#fd7e14]  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#fd7e14] active:shadow-lg transition duration-150 ease-in-out">
        Ingresar
        </Link>
  </div>
</div>
    </div>
  )
}
