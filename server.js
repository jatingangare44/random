// server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');


const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

// QUOTE API
app.get('/api/quote', async (req, res) => {
  try {
    const apiKey = process.env.API_NINJAS_KEY;

    const response = await fetch('https://api.api-ninjas.com/v1/quotes', {
      headers: {
        'X-Api-Key': process.env.API_NINJAS_KEY
      }
    });

    console.log("Response status:", response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error("API returned error:", errorText);
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Fetch error:', error.message);
    res.status(500).json({ error: 'Failed to fetch quote' });
  }
});


// MOVIE API
app.get('/api/movie', async (req, res) => {
  try {
    const randomPage = Math.floor(Math.random() * 500) + 1;
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=${randomPage}`);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch movie" });
  }
});

// GAME API
app.get('/api/game', async (req, res) => {
  try {
    const response = await fetch(`https://api.rawg.io/api/games?key=${process.env.RAWG_API_KEY}&page_size=20`);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch game" });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
