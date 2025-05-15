import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ItemList from '../components/ItemList';
import { getProductsByCategory } from '../mock/asyncMock';

function ItemListContainer() {
  const { categoriaId } = useParams();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getProductsByCategory(categoriaId).then(setProductos);
  }, [categoriaId]);

  return <ItemList items={productos} />;
}