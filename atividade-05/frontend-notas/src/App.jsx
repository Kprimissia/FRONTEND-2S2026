import { useState, useEffect } from 'react'
import './App.css'

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api/notes'

const INITIAL_FALLBACK_NOTES = [
  {
    id: '1730000000001',
    titulo: 'Primeira nota',
    texto: 'Conteúdo da primeira nota gerenciada pela API REST em Express.js.',
    criadoEm: '2026-04-10T12:00:00.000Z'
  },
  {
    id: '1730000000002',
    titulo: 'Estudar Métodos HTTP e CRUD',
    texto: 'Revisar diferença entre GET, POST, PUT e DELETE no Express.js.',
    criadoEm: '2026-04-10T14:30:00.000Z'
  }
]

function App() {
  const [notes, setNotes] = useState([])
  const [titulo, setTitulo] = useState('')
  const [texto, setTexto] = useState('')
  const [editingId, setEditingId] = useState(null)
  const [apiOnline, setApiOnline] = useState(true)
  const [lastHttpAction, setLastHttpAction] = useState('Aguardando requisição HTTP...')

  // 1. GET /api/notes - Carrega todas as notas
  const fetchNotes = async () => {
    try {
      const response = await fetch(API_BASE_URL)
      if (!response.ok) throw new Error(`HTTP ${response.status}`)
      const data = await response.json()
      setNotes(data)
      setApiOnline(true)
      setLastHttpAction(`GET ${API_BASE_URL} -> 200 OK (${data.length} notas)`)
    } catch {
      setApiOnline(false)
      setNotes((prev) => (prev.length > 0 ? prev : INITIAL_FALLBACK_NOTES))
      setLastHttpAction('Servidor local offline: operando em modo demonstrativo sincronizado em memória')
    }
  }

  useEffect(() => {
    fetchNotes()
  }, [])

  // 2. POST /api/notes ou PUT /api/notes/:id
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!titulo.trim() || !texto.trim()) return

    if (editingId) {
      // PUT /api/notes/:id
      try {
        const response = await fetch(`${API_BASE_URL}/${editingId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ titulo, texto })
        })
        if (!response.ok) throw new Error(`HTTP ${response.status}`)
        const updated = await response.json()
        setNotes((prev) => prev.map((n) => (n.id === editingId ? updated : n)))
        setLastHttpAction(`PUT /api/notes/${editingId} -> 200 OK`)
      } catch {
        setNotes((prev) =>
          prev.map((n) => (n.id === editingId ? { ...n, titulo, texto } : n))
        )
        setLastHttpAction(`PUT /api/notes/${editingId} (Simulado Local) -> 200 OK`)
      }
      setEditingId(null)
    } else {
      // POST /api/notes
      try {
        const response = await fetch(API_BASE_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ titulo, texto })
        })
        if (!response.ok) throw new Error(`HTTP ${response.status}`)
        const created = await response.json()
        setNotes((prev) => [...prev, created])
        setLastHttpAction(`POST /api/notes -> 201 Created (id: ${created.id})`)
      } catch {
        const fallbackNote = {
          id: Date.now().toString(),
          titulo,
          texto,
          criadoEm: new Date().toISOString()
        }
        setNotes((prev) => [...prev, fallbackNote])
        setLastHttpAction(`POST /api/notes (Simulado Local) -> 201 Created (id: ${fallbackNote.id})`)
      }
    }

    setTitulo('')
    setTexto('')
  }

  // Prepara edicao (PUT)
  const handleEdit = (note) => {
    setEditingId(note.id)
    setTitulo(note.titulo)
    setTexto(note.texto)
    setLastHttpAction(`Editando nota ID ${note.id} (pronto para enviar PUT /api/notes/${note.id})`)
  }

  // 3. DELETE /api/notes/:id
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/${id}`, {
        method: 'DELETE'
      })
      if (!response.ok && response.status !== 204) throw new Error(`HTTP ${response.status}`)
      setNotes((prev) => prev.filter((n) => n.id !== id))
      setLastHttpAction(`DELETE /api/notes/${id} -> 204 No Content`)
    } catch {
      setNotes((prev) => prev.filter((n) => n.id !== id))
      setLastHttpAction(`DELETE /api/notes/${id} (Simulado Local) -> 204 No Content`)
    }
  }

  const cancelEdit = () => {
    setEditingId(null)
    setTitulo('')
    setTexto('')
  }

  return (
    <div className="notes-app">
      <header className="notes-header">
        <div>
          <h1>Gerenciador de Notas — CRUD REST</h1>
          <p>Aula 05: Consumo de API Express.js (GET, POST, PUT e DELETE)</p>
        </div>
        <span className={`status-pill ${apiOnline ? 'online' : 'fallback'}`}>
          {apiOnline ? 'API Express Conectada' : 'Modo Local (API Express Offline)'}
        </span>
      </header>

      <div className="notes-grid-layout">
        <section className="note-form-card">
          <h2>{editingId ? `Editar Nota #${editingId}` : 'Nova Nota (POST)'}</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="titulo">Título da Nota</label>
              <input
                id="titulo"
                type="text"
                placeholder="Ex.: Estudar Express.js"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="texto">Conteúdo / Texto</label>
              <textarea
                id="texto"
                placeholder="Digite o conteúdo da nota..."
                value={texto}
                onChange={(e) => setTexto(e.target.value)}
                required
              />
            </div>

            <div className="form-actions">
              <button type="submit" className="btn btn-primary">
                {editingId ? 'Salvar Alterações (PUT)' : 'Criar Nota (POST)'}
              </button>
              {editingId && (
                <button type="button" className="btn btn-secondary" onClick={cancelEdit}>
                  Cancelar
                </button>
              )}
            </div>
          </form>
        </section>

        <section className="notes-list-card">
          <h2>Notas Cadastradas ({notes.length})</h2>
          <div className="notes-list">
            {notes.map((note) => (
              <article key={note.id} className="note-item">
                <div className="note-item-header">
                  <h3>{note.titulo}</h3>
                  <span className="note-id">ID: {note.id}</span>
                </div>
                <p className="note-text">{note.texto}</p>
                <div className="note-footer">
                  <span className="note-date">
                    Criado em: {new Date(note.criadoEm).toLocaleString('pt-BR')}
                  </span>
                  <div className="note-buttons">
                    <button
                      type="button"
                      className="btn btn-edit"
                      onClick={() => handleEdit(note)}
                    >
                      Editar (PUT)
                    </button>
                    <button
                      type="button"
                      className="btn btn-delete"
                      onClick={() => handleDelete(note.id)}
                    >
                      Excluir (DELETE)
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>

      <div className="http-log">
        <strong>Última Operação HTTP:</strong> {lastHttpAction}
      </div>
    </div>
  )
}

export default App

