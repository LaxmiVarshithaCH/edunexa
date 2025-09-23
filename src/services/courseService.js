import { apiClient } from './apiClient';

export const getCourseById = async (id) => {
  const res = await apiClient.get(`/courses/${id}`);
  console.log('Course data:', res.data);
  return res.data;
};
