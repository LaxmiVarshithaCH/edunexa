import axios from 'axios';

const API_URL = 'http://localhost:8080/enrollments';

export const enrollCourse = async (userId, courseId) => {
  const res = await axios.post(`${API_URL}/enroll?userId=${userId}&courseId=${courseId}`);
  return res.data;
};
