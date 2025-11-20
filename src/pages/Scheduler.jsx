import { auth } from "../auth";
import React, { useEffect, useState } from 'react';
import api from '../api';
import ProfessorCard from '../components/ProfessorCard';
import CalendarView from '../components/CalendarView';
import Modal from '../components/Modal';

const Scheduler = () => {
  const [subjects, setSubjects] = useState([]);
  const [professors, setProfessors] = useState([]);
  const [selectedProf, setSelectedProf] = useState(null);
  const [exercisesOpen, setExercisesOpen] = useState(false);
  const [exList, setExList] = useState([]);

  useEffect(() => {
    api.get('/subjects').then((res) => setSubjects(res.data));
    api.get('/professors').then((res) => setProfessors(res.data));
  }, []);

  const openExercises = (profId) => {
    api.get(`/exercises?professorId=${profId}`).then((res) => {
      setExList(res.data);
      setExercisesOpen(true);
    });
  };

  const downloadDummy = (exercise) => {
    const blob = new Blob([exercise.content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = exercise.fileName;
    a.click();
    URL.revokeObjectURL(url);
    alert('Arquivo baixado: ' + exercise.fileName);
  };

  // AGORA SIM: O RETURN ESTÁ DENTRO DO COMPONENTE
  return (
    <section className="container">
      <h2>Agendamento de Monitorias</h2>

      <div className="grid">

        <aside className="sidebar card">
          <h3>Matérias</h3>
          <ul>
            {subjects.map((s) => (
              <li key={s.id}>{s.name}</li>
            ))}
          </ul>
        </aside>

        <div className="main-panel">
          <div className="prof-list">
            {professors.map((p) => (
              <div key={p.id} className="prof-box">
                <ProfessorCard prof={p} />
                <div className="prof-extra">
                  <button className="btn" onClick={() => openExercises(p.id)}>
                    Lista de exercícios
                  </button>

                 <button
  className="btn outline"
  onClick={() => {
    if (!auth.isLogged()) {
      alert("Você precisa fazer login para agendar.");
      return;
    }
    setSelectedProf(p);
  }}
>
  Agendar
</button>

                </div>
              </div>
            ))}
          </div>

          <CalendarView professors={professors} />
        </div>
      </div>

      <Modal open={exercisesOpen} onClose={() => setExercisesOpen(false)}>
        <h3>Listas de exercícios</h3>
        {exList.length === 0 ? (
          <p>Nenhuma lista encontrada.</p>
        ) : (
          <ul>
            {exList.map((ex) => (
              <li key={ex.id} className="exercise-line">
                <strong>{ex.title}</strong>
                <button className="btn small" onClick={() => downloadDummy(ex)}>
                  Baixar (simulado)
                </button>
              </li>
            ))}
          </ul>
        )}
      </Modal>

      <Modal open={!!selectedProf} onClose={() => setSelectedProf(null)}>
        {selectedProf && (
          <div>
            <h3>Agendar com {selectedProf.name}</h3>
            <p>Escolha uma das datas disponíveis:</p>
            <ul>
              {selectedProf.available.map((d) => (
                <li key={d}>
                  <button
                    className="btn"
                    onClick={() => {
                      api.post("/appointments", {
  professorId: selectedProf.id,
  professorName: selectedProf.name,
  date: d,
  user: auth.getUser()?.name || "Visitante"
}).then(() => {
  alert("Agendamento criado!");
});

                    }}
                  >
                    {d}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Scheduler;
