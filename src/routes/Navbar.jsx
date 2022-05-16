import React from 'react'
import { Outlet, Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      {" "}
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default Navbar