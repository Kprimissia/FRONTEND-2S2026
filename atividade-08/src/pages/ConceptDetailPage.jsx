import { useParams, Link } from 'react-router-dom'

function ConceptDetailPage({ conceitos, onToggleFavorito }) {
  const { id } = useParams()
  const conceito = conceitos.find((item) => item.id === id)

  // Renderizacao condicional com if / early return (Aula 08)
  if (!conceito) {
    return (
      <div className="detail-panel">
        <div className="alert-box error">
          Conceito com ID <strong>{id}</strong> não encontrado.
        </div>
        <Link to="/" className="btn btn-primary">
          ← Voltar ao Catálogo
        </Link>
      </div>
    )
  }

  return (
    <section className="detail-panel">
      <div className="card-top" style={{ marginBottom: '1rem' }}>
        <span className="aula-tag">{conceito.aula} • {conceito.categoria}</span>
        <button
          type="button"
          className={`btn btn-fav ${conceito.favorito ? 'active' : ''}`}
          onClick={() => onToggleFavorito(conceito.id)}
        >
          {conceito.favorito ? '★ Favoritado' : '☆ Marcar Favorito'}
        </button>
      </div>

      <h1 style={{ fontSize: '1.6rem', marginBottom: '0.75rem' }}>{conceito.titulo}</h1>
      <p style={{ color: '#cbd5e1', lineHeight: 1.6, marginBottom: '1.25rem' }}>
        {conceito.resumo}
      </p>

      <div
        style={{
          background: '#0f172a',
          border: '1px solid #334155',
          padding: '1rem',
          borderRadius: '8px',
          fontFamily: 'monospace',
          color: '#38bdf8',
          marginBottom: '1.5rem'
        }}
      >
        {conceito.exemploCodigo}
      </div>

      <Link to="/" className="btn btn-primary">
        ← Voltar para a Lista
      </Link>
    </section>
  )
}

export default ConceptDetailPage
