import { Link } from 'react-router-dom'

function Navbar({ totalConceitos, totalFavoritos, larguraJanela }) {
  return (
    <nav className="navbar">
      <Link to="/" className="brand">
        <span>⚛️ ReactHub</span>
      </Link>

      <div className="nav-links">
        <Link to="/" className="nav-link">Catálogo (Aulas 08 &amp; 09)</Link>
        <Link to="/novo" className="nav-link">+ Novo Conceito (Form Controlado)</Link>
        <Link to="/api-explorer" className="nav-link">Consumo API (fetch + useEffect)</Link>
      </div>

      <div className="nav-meta">
        <span className="meta-pill">Conceitos: {totalConceitos}</span>
        <span className="meta-pill">★ Favoritos: {totalFavoritos}</span>
        <span className="meta-pill">Viewport: {larguraJanela}px</span>
      </div>
    </nav>
  )
}

export default Navbar

