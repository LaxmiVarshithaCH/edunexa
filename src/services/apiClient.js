// src/services/apiClient.js
import axios from 'axios';

export const apiClient = axios.create({

  baseURL: 'http://ec2-56-228-23-27.eu-north-1.compute.amazonaws.com:8081', // Spring Boot backend

  headers: {
    'Content-Type': 'application/json',
  },
});
