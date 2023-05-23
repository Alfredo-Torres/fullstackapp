import axios from 'axios';

const BASE_URL = 'https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI';

export const fetchSearchResults = async (searchTerm) => {
  try {
    const response = await axios.get(`${BASE_URL}?table=exoplanets&format=json&where=${searchTerm}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching planet information:', error);
    throw error;
  }

};



