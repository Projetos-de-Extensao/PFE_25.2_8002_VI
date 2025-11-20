import React from 'react'
import { Link } from 'react-router-dom'


export default function ProfessorCard({prof}){
return (
<div className="prof-card">
<h3>{prof.name}</h3>
<p>{prof.bio}</p>
<div className="prof-actions">
<Link to={`/professor/${prof.id}`} className="btn outline">Ver perfil</Link>
</div>
</div>
)
}