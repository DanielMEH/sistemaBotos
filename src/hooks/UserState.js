import React, { useState, useReducer } from "react";
import { UserReducer } from "./UserReducer";
import { UserContext } from "./UserContext";
import {LoginInsert} from "../api/userAuthentication";
import axios from "axios"
export const UserState = async(props) => {
    const initialData = {
        documento: null,
        selectUser: null
    };
  const [state, dispatch] = useReducer(first, initialData);

  const res = await LoginInsert(state)

  if (res.messahge = "Login") {
    
  } else if(res.messahge = "error"){

  }

    const getUser = async() => {
     const res = axios.get("")
        
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
