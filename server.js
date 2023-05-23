const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/api/search', (req, res) => {
 

  const searchResults = [
    { id: 1, name: 'Planet 1' },
    { id: 2, name: 'Planet 2' },
    { id: 3, name: 'Planet 3' },
  ];

  res.json(searchResults);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
