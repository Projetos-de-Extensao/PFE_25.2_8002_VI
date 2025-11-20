// src/App.jsx
import React from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Scheduler from "./pages/Scheduler";
import Professor from "./pages/Professor";

import { auth } from "./auth";

export default function App() {
  const user = auth.getUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logout();
    navigate("/login");
    // forçar atualização visual (caso necessário)
    window.location.reload();
  };

  return (
    <div className="app-root">
      <header className="topbar">
        <Link to="/" className="brand">
          IBMEC Monitorias
        </Link>

        <nav style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <Link to="/">Home</Link>
          <Link to="/scheduler">Agendamento</Link>

          {!user && <Link to="/login">Login</Link>}

          {user && (
            <>
              <span style={{ color: "#1f4b8f", fontWeight: "600" }}>
                Olá, {user.name ? user.name.split(" ")[0] : user.email}
              </span>

              <button
                onClick={handleLogout}
                className="btn small outline"
                style={{ padding: "6px 10px" }}
              >
                Sair
              </button>
            </>
          )}
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/scheduler" element={<Scheduler />} />
          <Route path="/professor/:id" element={<Professor />} />
        </Routes>
      </main>
    </div>
  );
}
