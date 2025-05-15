import { Link } from 'react-router-dom';
import '../styles/Item.css';

function Item({ item }) {
  return (
    <div className="item-card">
      <h3>{item.nombre}</h3>
      <p>{item.descripcion}</p>
      <p><strong>${item.precio}</strong></p>
      <Link to={/item/${item.id}} className="detail-button">Ver Detalle</Link>
    </div>
  );
}

export default Item;