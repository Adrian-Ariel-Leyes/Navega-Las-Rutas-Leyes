import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ItemDetail from '../components/ItemDetail';
import { getProductById } from '../mock/asyncMock';

function ItemDetailContainer() {
  const { itemId } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    getProductById(itemId).then(setProducto);
  }, [itemId]);

  return producto ? <ItemDetail item={producto} /> : <p>Cargando...</p>;
}