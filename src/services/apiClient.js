// src/services/apiClient.js
import axios from 'axios';

export const apiClient = axios.create({
<<<<<<< HEAD
  baseURL: 'http://localhost:8081/auth', // Spring Boot backend
=======
  baseURL: 'http://ec2-56-228-23-27.eu-north-1.compute.amazonaws.com:8081/auth', // Spring Boot backend
>>>>>>> 2704c1f482e7527432d19bc1872cfb5a072b3717
  headers: {
    'Content-Type': 'application/json',
  },
});
