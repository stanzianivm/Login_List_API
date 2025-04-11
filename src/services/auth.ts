import { User } from "../types/user";
import usersData from '../data/users.json';

// Función que simula una llamada a una API para verificar las credenciales
const loginUser = (username: string, password: string): Promise<User | null> => {
    return new Promise((resolve) => {
      // Simulamos una latencia de red
      setTimeout(() => {
        const user = (usersData as User[]).find(
          (user) => user.username === username && user.password === password
        );
        if (user) {
          resolve(user); // Resolvemos con el usuario si se encuentra
        } else {
          resolve(null); // Resolvemos con null si no se encuentra
        }
      }, 500); // Simula un retraso de 500ms
    });
  };
  
  export { loginUser };