import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api";

const Professor = () => {
  const { id } = useParams();
  const [prof, setProf] = useState(null);
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    api.get(`/professors/${id}`).then((res) => setProf(res.data));
    api.get(`/exercises?professorId=${id}`).then((res) => setExercises(res.data));
  }, [id]);

  if (!prof) return <div className="container">Carregando...</div>;

  return (
    <section className="container card">
      <h2>{prof.name}</h2>
      <p>{prof.bio}</p>

      <h4>Datas disponíveis</h4>
      <div className="chips">
        {prof.available.map((d) => (
          <span key={d} className="chip">{d}</span>
        ))}
      </div>

      <h4>Listas de exercícios</h4>
      <ul>
        {exercises.map((ex) => (
          <li key={ex.id}>
            {ex.title}
            <button
              className="btn small"
              onClick={() => {
                const blob = new Blob([ex.content], { type: "text/plain" });
                const url = URL.createObjectURL(blob);
                const a = document.createElement("a");
                a.href = url;
                a.download = ex.fileName;
                a.click();
                URL.revokeObjectURL(url);
                alert("Arquivo baixado: " + ex.fileName);
              }}
            >
              Baixar
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Professor; // 👈 OBRIGATÓRIO
