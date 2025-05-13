import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="w-full flex gap-x-4 h-10 bg-green-600">
        <NavLink to="/">
          <div>Home</div>
        </NavLink>
        <NavLink to="/api/calls">
          <div>Dashboard</div>
        </NavLink>
      </div>
      <div>header</div>
    </>
  );
}
