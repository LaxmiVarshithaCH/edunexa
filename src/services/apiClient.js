// src/services/apiClient.js
import axios from 'axios';

export const apiClient = axios.create({
  baseURL: 'http://localhost:8081/auth', // Spring Boot backend
  headers: {
    'Content-Type': 'application/json',
  },
});
