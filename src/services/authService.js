// src/services/authService.js
import { apiClient } from './apiClient';

export const login = async (credentials) => {
  const response = await apiClient.post('/auth/login', credentials);
  return response.data;
};

export const signup = async (user) => {
  const response = await apiClient.post('/auth/signup', user);
  return response.data;
};

