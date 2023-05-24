import axios from 'axios';

const BASE_URL = 'https://api.le-systeme-solaire.net/rest/bodies';

export const fetchSearchResults = async (searchTerm) => {
  try {
    const response = await axios.get(`${BASE_URL}?filter[]=name,${searchTerm}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching search results:', error);
    throw error;
  }
};


