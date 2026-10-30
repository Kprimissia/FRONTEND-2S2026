import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CONCEITOS_INICIAIS } from './data/conceitosReact'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import ConceptDetailPage from './pages/ConceptDetailPage'
import NovoConceitoPage from './pages/NovoConceitoPage'
import ApiExplorerPage from './pages/ApiExplorerPage'
import './App.css'

function App() {
  const [conceitos, setConceitos] = useState(CONCEITOS_INICIAIS)
  const [larguraJanela, setLarguraJanela] = useState(window.innerWidth)

  const totalFavoritos = conceitos.filter((c) => c.favorito).length

  // Efeito 1 (Aula 09): Atualiza o titulo da aba do navegador conforme estado de favoritos
  useEffect(() => {
    document.title = `ReactHub (${totalFavoritos} ★) — Aulas 08 e 09`
  }, [totalFavoritos])

  // Efeito 2 (Aula 09): Listener de resize da janela com funcao de limpeza (cleanup)
  useEffect(() => {
    const atualizarLargura = () => setLarguraJanela(window.innerWidth)
    window.addEventListener('resize', atualizarLargura)

    return () => {
      window.removeEventListener('resize', atualizarLargura)
    }
  }, [])

  const handleToggleFavorito = (id) => {
    setConceitos((prev) =>
      prev.map((item) => (item.id === id ? { ...item, favorito: !item.favorito } : item))
    )
  }

  const handleAdicionarConceito = (novoConceito) => {
    setConceitos((prev) => [novoConceito, ...prev])
  }

  return (
    <BrowserRouter>
      <div className="app-shell">
        <Navbar
          totalConceitos={conceitos.length}
          totalFavoritos={totalFavoritos}
          larguraJanela={larguraJanela}
        />

        <main>
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  conceitos={conceitos}
                  onToggleFavorito={handleToggleFavorito}
                />
              }
            />
            <Route
              path="/conceitos/:id"
              element={
                <ConceptDetailPage
                  conceitos={conceitos}
                  onToggleFavorito={handleToggleFavorito}
                />
              }
            />
            <Route
              path="/novo"
              element={
                <NovoConceitoPage onAdicionarConceito={handleAdicionarConceito} />
              }
            />
            <Route path="/api-explorer" element={<ApiExplorerPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
