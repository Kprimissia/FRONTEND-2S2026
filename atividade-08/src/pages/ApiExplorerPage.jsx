import { useState, useEffect } from 'react'

function ApiExplorerPage() {
  const [artigos, setArtigos] = useState([])
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState(null)
  const [tentativa, setTentativa] = useState(0)

  useEffect(() => {
    const controlador = new AbortController()

    async function carregarDadosApi() {
      setCarregando(true)
      setErro(null)
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6', {
          signal: controlador.signal
        })
        if (!response.ok) {
          throw new Error(`Erro HTTP: ${response.status}`)
        }
        const dados = await response.json()
        setArtigos(dados)
      } catch (err) {
        if (err.name !== 'AbortError') {
          setErro(err.message || 'Falha ao buscar dados da API externa.')
        }
      } finally {
        if (!controlador.signal.aborted) {
          setCarregando(false)
        }
      }
    }

    carregarDadosApi()

    return () => {
      controlador.abort()
    }
  }, [tentativa])

  return (
    <section className="detail-panel">
      <div className="card-top" style={{ marginBottom: '1rem' }}>
        <div>
          <h1 style={{ fontSize: '1.45rem', color: '#38bdf8' }}>
            Consumo de API com fetch + async/await + useEffect (Aula 09)
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginTop: '0.25rem' }}>
            Requisição HTTP GET assíncrona com tratamento de estados de carregamento, validação de{' '}
            <code>response.ok</code>, limpeza com <code>AbortController</code> e captura de erros.
          </p>
        </div>
        <button
          type="button"
          className="btn btn-primary"
          disabled={carregando}
          onClick={() => setTentativa((atual) => atual + 1)}
        >
          {carregando ? 'Carregando...' : 'Recarregar API'}
        </button>
      </div>

      {carregando && (
        <div className="alert-box" role="status">
          Carregando publicações da API REST externa...
        </div>
      )}

      {erro && (
        <div className="alert-box error" role="alert">
          Erro ao consultar API: {erro}
        </div>
      )}

      {!carregando && !erro && artigos.length === 0 && (
        <div className="alert-box">Nenhuma publicação encontrada na API.</div>
      )}

      {!carregando && !erro && artigos.length > 0 && (
        <div className="concepts-grid">
          {artigos.map((post) => (
            <article key={post.id} className="concept-card">
              <div>
                <div className="card-top">
                  <span className="aula-tag">POST #{post.id}</span>
                  <span>User ID: {post.userId}</span>
                </div>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}

export default ApiExplorerPage

