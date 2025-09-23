import { apiClient } from './apiClient';

export const enrollCourse = async (userId, courseId) => {
  const res = await apiClient.post(`/enrollments/enroll?userId=${userId}&courseId=${courseId}`);
  return res.data;
};
