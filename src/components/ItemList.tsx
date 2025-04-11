import React from 'react';
import { fetchItems } from '../services/api';
import { Item } from '../types/item';
import ItemCard from './ItemCard';
import useFetchData from '../hook/useFetchData';

const ItemList: React.FC = () => {
  const { data: items, isLoading, error } = useFetchData<Item[]>(fetchItems);

  if (isLoading) {
    return <div>Cargando items...</div>;
  }

  if (error) {
    return <div>Error al cargar los items: {error.message}</div>;
  }

  if (!items || items.length === 0) {
    return <div>No hay items para mostrar.</div>;
  }

  return (
    <div>
      <h1>Lista de Items</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <ItemCard item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;