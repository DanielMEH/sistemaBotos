import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "../assets/index.css";
import { Modal } from "../container/Modal";
export const Header = () => {
  const [modal, setModal] = useState(false);
  const handleBottom = () => {
    setModal(!modal);
  };
  return (
    <>
      <header className="bg-slate-800 flex items-center justify-between">
        <div className="text-white text-xl p-1">SplotVotos</div>
        <div
          className="hover:bg-slate-700 cursor-pointer"
          onClick={handleBottom}
        >
          <FontAwesomeIcon
            icon={faBars}
            className="text-white p-2  text-3xl "
          />
        </div>
      </header>
      <Modal estado={modal} />
    </>
  );
};
