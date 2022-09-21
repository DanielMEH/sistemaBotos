import  Axios  from "axios"

export const LoginInsert = async ({data})=> await Axios.post("/loginUsuario",{
    body:data,
    header: { "Content-type": "application/x-www-form-urlencoded" }
    
})
