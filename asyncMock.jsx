const productos = [
  { id: '1', nombre: 'Tablero Madera', categoria: 'tableros', descripcion: 'Tablero clásico', precio: 100, stock: 5 },
  { id: '2', nombre: 'Piezas Staunton', categoria: 'piezas', descripcion: 'Set profesional', precio: 50, stock: 10 },
  // ...
];

export const getProductsByCategory = (categoriaId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(categoriaId ? productos.filter(p => p.categoria === categoriaId) : productos);
    }, 500);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos.find(p => p.id === id));
    }, 500);
  });
};