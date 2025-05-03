import axios from 'axios';

const API = axios.create({
 baseURL: 'http://localhost:3000/api/login', // URL de la API falsa
 headers: {
   'Content-Type': 'application/json',
 },
});

// Simulación de login
export const login = async (credentials) => {
  try {
    // Endpoint falso
    const response = await API.post('/login', credentials);
    return response.data;
  } catch (error) {
    throw error.response?.data || {message: 'Error en la conexión'};
  }
};

// Simulación de registro
export const register = async (userData) => {
  try {
    const response = await API.post('/register', userData); // Ruta provisional
    return response.data;
  } catch (error) {
    throw error.response?.data || {message: 'Error en la conexión'};
  }
};
