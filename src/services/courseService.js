import axios from 'axios';
const API_URL = 'http://localhost:8081/courses';

export const getCourseById = async (id) => {
  const res = await axios.get(`${API_URL}/${id}`);
  console.log('Course data:', res.data); // <--- add this
  return res.data;
};
