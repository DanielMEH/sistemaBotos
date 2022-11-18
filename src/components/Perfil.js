import React,{useEffect, useState} from 'react'
import "../assets/perfil.css"
import  axios  from 'axios'

export const Perfil = () => {
const getAdmins = async() =>{


	const response = await  axios.get("http://localhost:3002/AdminData");
	console.log(response.data.data);
	if (response.data.message === "ADMIN_ACTIVE") {
		alert("activo")
	}else if(response.data.message === "ADMIN_INACTIVE"){

		window.location.href ="/AdminAuttentiacion"

	}

}

useEffect(() => {
getAdmins()
},[])
  return (
	<>
	 <section className="seccion-perfil-usuario">
        <div className="perfil-usuario-header">
            <div className="perfil-usuario-portada">
                <div className="perfil-usuario-avatar">
                   <img src="https://png.pngtree.com/png-vector/20190115/ourlarge/pngtree-web-page-ui-default-avatar-handsome-guy-png-image_344498.jpg" alt="img-avatar"></img>
                    <button type="button" className="boton-avatar">
                        <i className="far fa-image"></i>
                    </button>
                </div>
                <button type="button" className="boton-portada">
                    <i className="far fa-image"></i> Administrador
                </button>
            </div>
        </div>
        <div className="perfil-usuario-body">
            <div className="perfil-usuario-bio">
                <h3 className="titulo">Hola, Maria Alejandra De la Cruz</h3>
                <p className="texto"></p>
            </div>
            <div className="perfil-usuario-footer">
                <ul className="lista-datos">
                    <li><i className="icono fas fa-map-signs"></i> Correo Electronico: </li>
                    <li><i className="icono fas fa-phone-alt"></i> Estado: </li>
                    <li><i className="icono fas fa-briefcase"></i> Cargo: </li>
                    <li><i className="icono fas fa-building"></i> Fecha de creacion de la cuenta: </li>
                </ul>
                <ul className="lista-datos">
                    <li><i className="icono fas fa-map-marker-alt"></i> Ubicacion.</li>
                    <li><i className="icono fas fa-calendar-alt"></i> Fecha nacimiento.</li>
                    <li><i className="icono fas fa-user-check"></i> Registro.</li>
                    <li><i className="icono fas fa-share-alt"></i> Redes sociales.</li>
                </ul>
            </div>
           
        </div>
    </section>
	</>
  )
}
