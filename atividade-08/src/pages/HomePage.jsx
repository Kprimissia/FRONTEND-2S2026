import { useState } from 'react'
import ConceptCard from '../components/ConceptCard'
import VirtualDomDemo from '../components/VirtualDomDemo'

function HomePage({ conceitos, onToggleFavorito }) {
  const [busca, setBusca] = useState('')
  const [filtroAula, setFiltroAula] = useState('Todas')
  const [apenasFavoritos, setApenasFavoritos] = useState(false)

  // Filtragem com .filter()
  const conceitosFiltrados = conceitos.filter((item) => {
    const matchTexto =
      item.titulo.toLowerCase().includes(busca.toLowerCase()) ||
      item.resumo.toLowerCase().includes(busca.toLowerCase())
    const matchAula = filtroAula === 'Todas' || item.aula === filtroAula
    const matchFav = !apenasFavoritos || item.favorito
    return matchTexto && matchAula && matchFav
  })

  return (
    <div>
      <section className="hero-banner">
        <h1>Aplicação React Completa — Aulas 08 e 09</h1>
        <p>
          Projeto integrando JSX, Árvore de Componentes, Props, Virtual DOM, Listas e Keys,
          Renderização Condicional, useState, Formulários Controlados, useEffect, Consumo de API
          com fetch e React Router.
        </p>
      </section>

      <section className="filter-bar">
        <input
          type="text"
          placeholder="Pesquisar conceito por título ou descrição..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
        <select value={filtroAula} onChange={(e) => setFiltroAula(e.target.value)}>
          <option value="Todas">Todas as Aulas</option>
          <option value="Aula 08">Aula 08 — Fundamentos React</option>
          <option value="Aula 09">Aula 09 — Hooks, Forms, API &amp; Router</option>
        </select>
        <button
          type="button"
          className={`btn ${apenasFavoritos ? 'btn-fav active' : 'btn-fav'}`}
          onClick={() => setApenasFavoritos((prev) => !prev)}
        >
          {apenasFavoritos ? '★ Mostrando Favoritos' : '☆ Filtrar Favoritos'}
        </button>
      </section>

      {/* Renderizacao Condicional (if / ternario) e Listas com .map() + key */}
      {conceitosFiltrados.length === 0 ? (
        <div className="alert-box error">
          Nenhum conceito encontrado para os filtros selecionados.
        </div>
      ) : (
        <section className="concepts-grid">
          {conceitosFiltrados.map((conceito) => (
            <ConceptCard
              key={conceito.id}
              conceito={conceito}
              onToggleFavorito={onToggleFavorito}
            />
          ))}
        </section>
      )}

      <VirtualDomDemo />
    </div>
  )
}

export default HomePage
