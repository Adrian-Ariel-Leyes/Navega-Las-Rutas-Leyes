import ItemCount from './ItemCount';

function ItemDetail({ item }) {
  return (
    <div>
      <h2>{item.nombre}</h2>
      <p>{item.descripcion}</p>
      <p>${item.precio}</p>
      <ItemCount stock={item.stock} />
    </div>
  );
}