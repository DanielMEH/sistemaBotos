import React, { useState, useReducer } from "react";
import { UserReducer } from "./UserReducer";
import { UserContext } from "./UserContext";
import {LoginInsert} from "../api/userAuthentication";
import axios from "axios"
export const UserState = async({data}) => {
    const initialData = {
        documento: null,
        selectUser: null
    };
  const [state, dispatch] = useReducer([]);

  const res = await LoginInsert(data)

  if (res.messahge = "Login") {
    
  } else if(res.messahge = "error"){

  }

    const getUser = async() => {
     const res = axios.get("https://api.twitter");

        
  };
  const getProfile = () => {};
    return (
      <UserContext.Provider
        value={{
          documento: state.documento,
          selectUser: state.selectUser,
          getUser,
          getProfile
        }}
      >
        {props.children}
      </UserContext.Provider>
    );
};
