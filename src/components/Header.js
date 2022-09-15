import React from "react";
import { Link, Outlet } from "react-router-dom";
export const Header = () => {
  return (
    <div>
      Header
      <Outlet />
      <Link to="welcome">clik</Link>
    </div>
  );
};
