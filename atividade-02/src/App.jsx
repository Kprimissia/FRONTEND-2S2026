import { useState } from 'react'
import './App.css'

function App() {
  const [tarefa, setTarefa] = useState('')
  const [tarefas, setTarefas] = useState([])

  function adicionarTarefa() {
    if (!tarefa.trim()) return

    setTarefas([
      ...tarefas,
      {
        id: Date.now(),
        texto: tarefa,
        concluida: false,
      },
    ])

    setTarefa('')
  }

  function concluirTarefa(id) {
    setTarefas(
      tarefas.map((item) =>
        item.id === id
          ? { ...item, concluida: !item.concluida }
          : item
      )
    )
  }

  function removerTarefa(id) {
    setTarefas(tarefas.filter((item) => item.id !== id))
  }

  return (
    <main className="app">
      <div className="container">

        <header>
          <span className="tag">REACT APP</span>
          <h1>Minha Lista de Tarefas</h1>
          <p>Organize suas atividades de forma simples e rápida.</p>
        </header>

        <div className="form">
          <input
            type="text"
            placeholder="Digite uma nova tarefa..."
            value={tarefa}
            onChange={(e) => setTarefa(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') adicionarTarefa()
            }}
          />

          <button onClick={adicionarTarefa}>
            Adicionar
          </button>
        </div>

        <section className="tarefas">
          <div className="titulo-lista">
            <h2>Minhas tarefas</h2>
            <span>{tarefas.length}</span>
          </div>

          {tarefas.length === 0 ? (
            <div className="vazio">
              <div className="icone">✓</div>
              <h3>Nenhuma tarefa ainda</h3>
              <p>Adicione sua primeira tarefa acima.</p>
            </div>
          ) : (
            <div className="lista">
              {tarefas.map((item) => (
                <div
                  className={`tarefa ${
                    item.concluida ? 'concluida' : ''
                  }`}
                  key={item.id}
                >
                  <button
                    className="check"
                    onClick={() => concluirTarefa(item.id)}
                  >
                    {item.concluida ? '✓' : ''}
                  </button>

                  <span>{item.texto}</span>

                  <button
                    className="remover"
                    onClick={() => removerTarefa(item.id)}
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          )}
        </section>

        <footer>
          Projeto desenvolvido em React + Vite
        </footer>

      </div>
    </main>
  )
}

export default App