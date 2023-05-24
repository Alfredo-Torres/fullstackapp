const express = require('express');
const cors = require('cors');
const { fetchSearchResults } = require('./src/api');

const app = express();

app.use(cors());

app.get('/api/search', async (req, res) => {
  try {
    const { searchTerm } = req.query;
    const searchData = await fetchSearchResults();
    res.json(searchData);
  } catch (error) {
    console.error('Error fetching search data:', error);
    res.status(500).json({ error: 'Failed to fetch search data' });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


