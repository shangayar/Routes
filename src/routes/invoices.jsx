import { Outlet, Link } from "react-router-dom";
import Navbar from "./Navbar";

export default function Invoices() {
    return (
      <main style={{ padding: "1rem 0" }}>
        <Navbar/>
        <h2>Invoices</h2>        
      </main>
    );
  }