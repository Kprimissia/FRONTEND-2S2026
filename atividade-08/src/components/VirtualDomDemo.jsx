import { useState } from 'react'

function VirtualDomDemo() {
  const [renders, setRenders] = useState(1)
  const [ultimoHorario, setUltimoHorario] = useState(new Date().toLocaleTimeString('pt-BR'))

  const dispararReconciliacao = () => {
    setRenders((prev) => prev + 1)
    setUltimoHorario(new Date().toLocaleTimeString('pt-BR'))
  }

  return (
    <section className="vdom-box">
      <h2>Simulador Interativo: Virtual DOM &amp; Reconciliação (Aula 08)</h2>
      <p style={{ color: '#cbd5e1', fontSize: '0.9rem', marginBottom: '0.85rem' }}>
        Ao clicar no botão abaixo, o React atualiza apenas os nós de texto alterados no DOM real,
        preservando toda a árvore de elementos ao redor.
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
        <button type="button" className="btn btn-primary" onClick={dispararReconciliacao}>
          Atualizar Estado no Virtual DOM
        </button>
        <span>
          <strong>Ciclos de Renderização:</strong> {renders}
        </span>
        <span>
          <strong>Última Reconciliação:</strong> {ultimoHorario}
        </span>
      </div>
    </section>
  )
}

export default VirtualDomDemo

