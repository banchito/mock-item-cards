import axios from 'axios';
export const BASE_URL = 'http://localhost:3001';

export const fetchItems = async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}/items`);
    return data;
  } catch (error) {
    throw error;
  }
};
