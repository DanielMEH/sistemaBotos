import React, { useState, useReducer } from "react";
import { UserReducer } from "./UserReducer";
import { UserContext } from "./UserContext";
import axios from "axios"
export const UserState = (props) => {
    const initialData = {
        documento: null,
        selectUser: null
    };
  const [state, dispatch] = useReducer(first, initialData);

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
