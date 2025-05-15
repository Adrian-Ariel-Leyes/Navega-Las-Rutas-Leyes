import { Link } from 'react-router-dom';

function Item({ item }) {
  return (
    <div className="item">
      <h3>{item.nombre}</h3>
      <p>{item.descripcion}</p>
      <Link to={/item/${item.id}}>Ver detalle</Link>
    </div>
  );
}