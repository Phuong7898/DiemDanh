import axios from 'axios';

const URL = 'http://localhost:5000';

export const fetchPosts = () => axios.get(`${URL}/`);
export const createPost = (payload) => axios.post(`${URL}/`, payload);
export const updatePost = (payload) => axios.post(`${URL}/update`, payload);