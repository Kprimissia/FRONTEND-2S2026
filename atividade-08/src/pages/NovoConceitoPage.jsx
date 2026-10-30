import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function NovoConceitoPage({ onAdicionarConceito }) {
  const navigate = useNavigate()
  const [titulo, setTitulo] = useState('')
  const [aula, setAula] = useState('Aula 08')
  const [categoria, setCategoria] = useState('Componentes')
  const [resumo, setResumo] = useState('')
  const [exemploCodigo, setExemploCodigo] = useState('')
  const [erro, setErro] = useState('')
  const [sucesso, setSucesso] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    // Validacao de Formulario Controlado (Aula 09)
    if (titulo.trim().length < 3) {
      setErro('O título do conceito deve possuir pelo menos 3 caracteres.')
      return
    }
    if (resumo.trim().length < 10) {
      setErro('O resumo explicativo deve possuir pelo menos 10 caracteres.')
      return
    }

    const novo = {
      id: `custom-${Date.now()}`,
      aula,
      titulo: titulo.trim(),
      categoria,
      resumo: resumo.trim(),
      exemploCodigo: exemploCodigo.trim() || '// Exemplo prático em React',
      favorito: true
    }

    onAdicionarConceito(novo)
    setErro('')
    setSucesso(true)
    setTitulo('')
    setResumo('')
    setExemploCodigo('')

    setTimeout(() => {
      navigate('/')
    }, 900)
  }

  return (
    <section className="form-panel">
      <h1 style={{ fontSize: '1.45rem', marginBottom: '0.5rem', color: '#38bdf8' }}>
        Cadastrar Novo Conceito React (Formulário Controlado — Aula 09)
      </h1>
      <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '1.25rem' }}>
        Demonstração de Controlled Components utilizando <code>useState</code>, <code>value</code>,{' '}
        <code>onChange</code>, <code>onSubmit</code> com <code>e.preventDefault()</code> e validação.
      </p>

      {erro && <div className="alert-box error">{erro}</div>}
      {sucesso && (
        <div className="alert-box success">
          Conceito cadastrado com sucesso! Redirecionando para o catálogo...
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="titulo">Título do Conceito *</label>
          <input
            id="titulo"
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            placeholder="Ex.: Custom Hooks"
          />
        </div>

        <div className="form-field">
          <label htmlFor="aula">Aula de Referência</label>
          <select id="aula" value={aula} onChange={(e) => setAula(e.target.value)}>
            <option value="Aula 08">Aula 08 — Projeto React 01</option>
            <option value="Aula 09">Aula 09 — Projeto React 02</option>
          </select>
        </div>

        <div className="form-field">
          <label htmlFor="categoria">Categoria Técnica</label>
          <input
            id="categoria"
            type="text"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          />
        </div>

        <div className="form-field">
          <label htmlFor="resumo">Resumo Explicativo *</label>
          <textarea
            id="resumo"
            rows="3"
            value={resumo}
            onChange={(e) => setResumo(e.target.value)}
            placeholder="Explique como o conceito funciona no React..."
          />
        </div>

        <div className="form-field">
          <label htmlFor="codigo">Exemplo de Código JSX/JS</label>
          <input
            id="codigo"
            type="text"
            value={exemploCodigo}
            onChange={(e) => setExemploCodigo(e.target.value)}
            placeholder="Ex.: const [ativo, setAtivo] = useState(false);"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Salvar Conceito no Estado React
        </button>
      </form>
    </section>
  )
}

export default NovoConceitoPage
