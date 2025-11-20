import React from 'react'


export default function CalendarView({professors}){
// Exibe visual simples: datas disponíveis agrupadas
return (
<div className="calendar-view">
<h4>Calendário de Disponibilidade</h4>
{professors.map(p=> (
<div key={p.id} className="calendar-line">
<strong>{p.name}:</strong>
<span>{p.available.join(' • ')}</span>
</div>
))}
</div>
)
}