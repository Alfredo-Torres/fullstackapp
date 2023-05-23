import axios from 'axios';

const API_KEY = 'DuqjmXeaeX1UM1GAJJc8dbXGIyTRciTQ1GQiA14y';
const BASE_URL = 'https://api.nasa.gov/planetary/apod';

export const fetchSearchResults = async (searchTerm) => {
  try {
    const response = await axios.get(`${BASE_URL}?search=${searchTerm}&api_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching search results:', error);
    throw error;
  }
};

