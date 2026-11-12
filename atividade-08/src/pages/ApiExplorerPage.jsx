import { useState, useEffect } from 'react'

function ApiExplorerPage() {
  const [artigos, setArtigos] = useState([])
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState(null)
  const [tentativa, setTentativa] = useState(0)

  // Estados para envio de dados com POST (Aula 09 - Slide 31)
  const [novoTitulo, setNovoTitulo] = useState('')
  const [novoConteudo, setNovoConteudo] = useState('')
  const [enviandoPost, setEnviandoPost] = useState(false)
  const [statusPost, setStatusPost] = useState('')
  const [erroPost, setErroPost] = useState('')

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

  const handleEnviarPost = async (e) => {
    e.preventDefault()
    if (novoTitulo.trim().length < 3 || novoConteudo.trim().length < 5) {
      setErroPost('Informe um título (mín. 3 caracteres) e conteúdo (mín. 5 caracteres).')
      setStatusPost('')
      return
    }

    setEnviandoPost(true)
    setErroPost('')
    setStatusPost('')

    try {
      const resposta = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: novoTitulo.trim(),
          body: novoConteudo.trim(),
          userId: 1
        })
      })

      if (!resposta.ok) {
        throw new Error(`Erro HTTP ao enviar POST: ${resposta.status}`)
      }

      const criado = await resposta.json()
      setArtigos((prev) => [{ ...criado, id: Date.now() }, ...prev])
      setNovoTitulo('')
      setNovoConteudo('')
      setStatusPost(`Publicação enviada com sucesso via POST (ID retornado pela API: ${criado.id}).`)
    } catch (err) {
      setErroPost(err.message || 'Não foi possível enviar os dados para a API.')
    } finally {
      setEnviandoPost(false)
    }
  }

  return (
    <section className="detail-panel">
      <div className="card-top" style={{ marginBottom: '1rem' }}>
        <div>
          <h1 style={{ fontSize: '1.45rem', color: '#38bdf8' }}>
            Consumo de API com fetch + async/await + useEffect (Aula 09)
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginTop: '0.25rem' }}>
            Requisições HTTP <code>GET</code> e <code>POST</code> com tratamento de carregamento,{' '}
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

      <form onSubmit={handleEnviarPost} style={{ marginBottom: '1.5rem' }}>
        <h2 style={{ fontSize: '1.1rem', marginBottom: '0.75rem', color: '#e2e8f0' }}>
          Enviar Nova Publicação (POST)
        </h2>
        {erroPost && (
          <div className="alert-box error" role="alert">
            {erroPost}
          </div>
        )}
        {statusPost && (
          <div className="alert-box success" role="status">
            {statusPost}
          </div>
        )}
        <div className="form-field">
          <label htmlFor="post-titulo">Título da publicação</label>
          <input
            id="post-titulo"
            type="text"
            value={novoTitulo}
            onChange={(e) => setNovoTitulo(e.target.value)}
            placeholder="Ex.: Aprendendo React com fetch POST"
          />
        </div>
        <div className="form-field">
          <label htmlFor="post-conteudo">Conteúdo</label>
          <textarea
            id="post-conteudo"
            rows="2"
            value={novoConteudo}
            onChange={(e) => setNovoConteudo(e.target.value)}
            placeholder="Descreva a publicação a ser enviada..."
          />
        </div>
        <button type="submit" className="btn btn-primary" disabled={enviandoPost}>
          {enviandoPost ? 'Enviando POST...' : 'Enviar para API (POST)'}
        </button>
      </form>

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

