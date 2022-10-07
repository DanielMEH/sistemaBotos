import React, { useState } from "react";
import { Select } from "../layouts/Select";
import { useNavigate } from "react-router-dom";
import { AprendizAuthentic } from "../layouts/AprendizAuthentic";
export const Validar = () => {
  const navegate = useNavigate();
  const [idUser, setIdUser] = useState(null);
  return <>{idUser ? navegate("/") : navegate("/")}</>;
};
