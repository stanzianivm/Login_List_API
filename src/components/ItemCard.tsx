import React from 'react';
import { Item } from '../types/item';

interface ItemCardProps {
  item: Item;
}

const ItemCard: React.FC<ItemCardProps> = ({ item }) => {
  console.log(item)
  return (
    <div>
      <h3>{item.title}</h3>
      <small>Completed: {item.completed.toString()}</small><hr />
      <small>ID: {item.id}</small><hr />
      <small>UserId: {item.userId}</small>
    </div>
  );
};

export default ItemCard;