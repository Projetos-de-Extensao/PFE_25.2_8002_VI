import React, { useState } from "react";
import api from "../api";
import { auth } from "../auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [isRegister, setIsRegister] = useState(false);

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");

  // LOGIN
  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await api.get(`/users?email=${email}&password=${pass}`);

    if (res.data.length === 0) {
      alert("Usuário ou senha incorretos.");
      return;
    }

    auth.login(res.data[0]);
    alert("Login realizado com sucesso!");
    navigate("/scheduler");
    window.location.reload();
  };

  // CADASTRO
  const handleRegister = async (e) => {
    e.preventDefault();

    const newUser = { name, email, password: pass };

    await api.post("/users", newUser);

    alert("Cadastro realizado! Agora faça login.");
    setIsRegister(false);
  };

  return (
    <section className="container card" style={{ maxWidth: "400px" }}>
      <h2>{isRegister ? "Criar Conta" : "Login"}</h2>

      <form className="form" onSubmit={isRegister ? handleRegister : handleLogin}>

        {isRegister && (
          <input
            placeholder="Nome completo"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        )}

        <input
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          placeholder="Senha"
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          required
        />

        <button className="btn" type="submit">
          {isRegister ? "Cadastrar" : "Entrar"}
        </button>
      </form>

      <button
        className="btn outline"
        style={{ marginTop: "16px", width: "100%" }}
        onClick={() => setIsRegister(!isRegister)}
      >
        {isRegister ? "Já tenho conta" : "Criar conta"}
      </button>
    </section>
  );
}
