import { Link } from 'react-router-dom'

function ConceptCard({ conceito, onToggleFavorito }) {
  const { id, aula, titulo, categoria, resumo, favorito } = conceito

  return (
    <article className={`concept-card ${favorito ? 'favorite' : ''}`}>
      <div>
        <div className="card-top">
          <span className="aula-tag">{aula} • {categoria}</span>
          <span>{favorito ? '★ Favorito' : '☆ Padrão'}</span>
        </div>
        <h3>{titulo}</h3>
        <p>{resumo}</p>
      </div>

      <div className="card-actions">
        <Link to={`/conceitos/${id}`} className="btn btn-primary">
          Ver Detalhes (useParams)
        </Link>
        <button
          type="button"
          className={`btn btn-fav ${favorito ? 'active' : ''}`}
          onClick={() => onToggleFavorito(id)}
        >
          {favorito ? 'Remover ★' : 'Favoritar ☆'}
        </button>
      </div>
    </article>
  )
}

export default ConceptCard

