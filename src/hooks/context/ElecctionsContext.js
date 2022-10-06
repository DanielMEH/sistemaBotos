import React, { useState, createContext, useContext, useEffect } from "react";
import { getPostRequestData } from "../../api/userAuthentication";
const postContext = createContext();

export const usePost = () => {
  const context = useContext(postContext);
  return context;
};

export const ElecctionsContext = ({ children }) => {
  const [postAdmin, setPostAdmin] = useState([]);

  const getPostRequest = async () => {
    const res = await getPostRequestData();
    setPostAdmin(res.data.data);
    console.log(res);
  };

  useEffect(() => {
    getPostRequest();
  }, []);
  return (
    <postContext.Provider
      value={{
        postAdmin,
        getPostRequest,
      }}
    >
      {children}
    </postContext.Provider>
  );
};
