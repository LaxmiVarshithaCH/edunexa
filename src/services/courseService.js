import axios from 'axios';
<<<<<<< HEAD
const API_URL = 'http://localhost:8081/courses';
=======
const API_URL = 'http://ec2-56-228-23-27.eu-north-1.compute.amazonaws.com:8080/courses';
>>>>>>> 2704c1f482e7527432d19bc1872cfb5a072b3717

export const getCourseById = async (id) => {
  const res = await axios.get(`${API_URL}/${id}`);
  console.log('Course data:', res.data); // <--- add this
  return res.data;
};
