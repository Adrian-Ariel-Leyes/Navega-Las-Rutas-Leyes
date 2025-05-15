import { NavLink } from 'react-router-dom';
import '../styles/NavBar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <h1 className="logo">Tienda Ajedrez</h1>
      <div className="nav-links">
        <NavLink to="/" className="nav-link">Inicio</NavLink>
        <NavLink to="/categoria/tableros" className="nav-link">Tableros</NavLink>
        <NavLink to="/categoria/piezas" className="nav-link">Piezas</NavLink>
        <NavLink to="/categoria/relojes" className="nav-link">Relojes</NavLink>
      </div>
    </nav>
  );
}

export default NavBar;