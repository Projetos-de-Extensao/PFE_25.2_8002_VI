import React, { useEffect, useState } from "react";
import api from "../api";
import { auth } from "../auth";

export default function Home() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    api
      .get("/appointments?_sort=id&_order=desc&_limit=5")
      .then((res) => setAppointments(res.data));
  }, []);

  const handleDelete = async (id) => {
    const user = auth.getUser();

    if (!user) {
      alert("Você precisa estar logado para remover.");
      return;
    }

    const ag = appointments.find((a) => a.id === id);

    if (!ag) return;

    if (ag.user !== user.name) {
      alert("Você só pode remover seus próprios agendamentos.");
      return;
    }

    if (!confirm("Deseja mesmo remover este agendamento?")) return;

    await api.delete(`/appointments/${id}`);

    setAppointments((prev) => prev.filter((a) => a.id !== id));
  };

  return (
    <section className="container">
      <h1 style={{ marginBottom: "20px" }}>Bem-vindo ao IBMEC Monitorias</h1>
      <p className="text-muted">
        Plataforma para agendar monitorias com facilidade.
      </p>

      <h2 style={{ marginTop: "40px" }}>📅 Últimos agendamentos</h2>

      {appointments.length === 0 && (
        <p className="text-muted">Nenhum agendamento ainda.</p>
      )}

      <div style={{ marginTop: "14px", display: "grid", gap: "12px" }}>
        {appointments.map((ag) => (
          <div
            key={ag.id}
            className="card"
            style={{
              padding: "14px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderLeft: "6px solid #1f4b8f"
            }}
          >
            <div>
              <strong>{ag.professorName}</strong>
              <br />
              <span className="text-muted">Data: {ag.date}</span>
              <br />
              <span className="text-muted">Aluno: {ag.user}</span>
            </div>

            {/* Botão só aparece se o agendamento pertence ao usuário atual */}
            {auth.getUser()?.name === ag.user && (
              <button
                className="btn outline small"
                onClick={() => handleDelete(ag.id)}
                style={{ marginLeft: "12px" }}
              >
                Remover
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}


