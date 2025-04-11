import { Item } from "../types/item";
// import simulatedItems from '../data/items.json';

const API_ENDPOINT = 'https://jsonplaceholder.typicode.com/todos'; // Reemplaza con la URL de tu API

export const fetchItems = async (): Promise<Item[]> => {
  try {
    const response = await fetch(API_ENDPOINT);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: Item[] = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching items:', error);
    throw error;
  }
};


// export const fetchItems = async (): Promise<Item[]> => {
//   return new Promise((resolve) => {
//     setTimeout(() => { // Simula una latencia de red
//       resolve(simulatedItems as Item[]); // Asegúrate de hacer el type casting
//     }, 3000);
//   });
// };