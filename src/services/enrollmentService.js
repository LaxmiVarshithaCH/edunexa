import axios from 'axios';

<<<<<<< HEAD
const API_URL = 'http://localhost:8081/enrollments';
=======
const API_URL = 'http://ec2-56-228-23-27.eu-north-1.compute.amazonaws.com:8080/enrollments';
>>>>>>> 2704c1f482e7527432d19bc1872cfb5a072b3717

export const enrollCourse = async (userId, courseId) => {
  const res = await axios.post(`${API_URL}/enroll?userId=${userId}&courseId=${courseId}`);
  return res.data;
};
