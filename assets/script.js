// require('dotenv').config();

function showRandom(category) {
  const outputBox = document.getElementById("output-box");

  // Fade out before loading
  outputBox.classList.add('fade-out');

  setTimeout(() => {
    outputBox.classList.remove('fade-out');

  if (category === 'joke') {
    outputBox.textContent = "Loading joke...";
    fetch("https://v2.jokeapi.dev/joke/Any?lang=en&safe-mode")
      .then(res => res.json())
      .then(jokeData => {
        const jokeText = jokeData.type === "single"
          ? jokeData.joke
          : `${jokeData.setup} — ${jokeData.delivery}`;
        outputBox.textContent = jokeText;
      })
      .catch(() => {
        outputBox.textContent = "Failed to load joke.";
      });
  }

else if (category === 'quote') {
  outputBox.textContent = "Loading quote...";

  fetch("https://api.api-ninjas.com/v1/quotes", {
    method: "GET",
    headers: {
      "X-Api-Key": "xOhPkreNJe/0ly3sMq+s4g==ISHCaeZ4sv6utTle"
      //"X-Api-Key": process.env.API_NINJAS_KEY
    }
  })
    .then(response => {
      if (!response.ok) throw new Error("Failed to fetch");
      return response.json();
    })
    .then(data => {
      if (data.length > 0) {
        const quote = data[0];
        const quoteText = `
          <p><strong>Quote:</strong> "${quote.quote}"</p>
          <p><strong>Author:</strong> ${quote.author || "Unknown"}</p>
        `;
        outputBox.innerHTML = quoteText;
      } else {
        outputBox.textContent = "No quote found.";
      }
    })
    .catch(error => {
      outputBox.textContent = "Failed to load quote.";
      console.error("Error:", error);
    });
}

  else if (category === 'poem') {
    outputBox.textContent = "Loading poem...";
    
    fetch("https://poetrydb.org/random")
      .then(response => {
        if (!response.ok) throw new Error("Failed to fetch poem");
        return response.json();
      })
      .then(data => {
        const poem = data[0];
        const poemLines = poem.lines.join("<br>");
        const poemHTML = `
          <p><strong>${poem.title}</strong> by ${poem.author}</p>
          <p>${poemLines}</p>
        `;
        outputBox.innerHTML = poemHTML;
      })
      .catch(error => {
        outputBox.textContent = "Failed to load poem.";
        console.error("Error:", error);
      });
  }

  else if (category === 'book') {
    outputBox.textContent = "Loading book...";

    const subjects = ["love", "history", "science", "adventure", "fiction", "fantasy"];
    const randomSubject = subjects[Math.floor(Math.random() * subjects.length)];

    fetch(`https://openlibrary.org/subjects/${randomSubject}.json?limit=20`)
      .then(res => res.json())
      .then(data => {
        const works = data.works;
        if (works && works.length > 0) {
          const randomBook = works[Math.floor(Math.random() * works.length)];
          outputBox.innerHTML = `
            <p><strong>${randomBook.title}</strong></p>
            <p>by ${randomBook.authors?.map(author => author.name).join(", ") || "Unknown Author"}</p>
          `;
        } else {
          outputBox.textContent = "No book found.";
        }
      })
      .catch(() => {
        outputBox.textContent = "Failed to load book.";
      });
  }

else if (category === 'music') {
  outputBox.textContent = "Loading song...";

  fetch("https://saavn.dev/api/search/songs?query=bollywood")
    .then(response => {
      if (!response.ok) throw new Error("Failed to fetch songs");
      return response.json();
    })
    .then(data => {
      const songs = data.data.results;
      if (songs.length > 0) {
        const randomSong = songs[Math.floor(Math.random() * songs.length)];

        // Get artist names from artists.primary
        const primaryArtistsArray = randomSong.artists?.primary || [];
        const artistNames = primaryArtistsArray.map(artist => artist.name).join(", ") || "Unknown";

        const songText = `
          <p><strong>Song:</strong> ${randomSong.name}</p>
          <p><strong>Artist(s):</strong> ${artistNames}</p>
        `;
        outputBox.innerHTML = songText;
      } else {
        outputBox.textContent = "No songs found.";
      }
    })
    .catch(error => {
      outputBox.textContent = "Failed to load song.";
      console.error("Error:", error);
    });
}

else if (category === 'movie') {
  const TMDB_API_KEY = "ae50e70ae0803997e8bac1c8c25081cc"; 
    outputBox.textContent = "Loading movie...";
const randomPage = Math.floor(Math.random() * 500) + 1;

    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}&language=en-US&page=${randomPage}`)
      .then(res => res.json())
      .then(data => {
        if (data.results && data.results.length > 0) {
          // Pick a random movie from the results array
          const randomIndex = Math.floor(Math.random() * data.results.length);
          const movie = data.results[randomIndex];
          outputBox.innerHTML = `
            <p><strong>Movie:</strong> ${movie.title}</p>
            <p><strong>Release Date:</strong> ${movie.release_date || "Unknown"}</p>
            <p><strong>Overview:</strong> ${movie.overview || "No overview available."}</p>
          `;
        } else {
          outputBox.textContent = "No movies found.";
        }
      })
      .catch(() => {
        outputBox.textContent = "Failed to load movie.";
      });
  }

  else  if (category === 'anime') {
    outputBox.textContent = "Loading anime...";

    // Fetch top anime (first page)
    fetch("https://api.jikan.moe/v4/top/anime")
      .then(res => res.json())
      .then(data => {
        if (data.data && data.data.length > 0) {
          // Pick a random anime
          const randomIndex = Math.floor(Math.random() * data.data.length);
          const anime = data.data[randomIndex];
          outputBox.innerHTML = `
            <p><strong>Anime:</strong> ${anime.title}</p>
            <p><strong>Score:</strong> ${anime.score || "N/A"}</p>
            <p><strong>Episodes:</strong> ${anime.episodes || "N/A"}</p>
          `;
        } else {
          outputBox.textContent = "No anime found.";
        }
      })
      .catch(() => {
        outputBox.textContent = "Failed to load anime.";
      });
  }

  else if (category === 'game') {
  outputBox.textContent = "Loading game...";

  fetch("https://api.rawg.io/api/games?key=1cde7464c0574d83a322115a9007636f&page_size=20")
    .then(res => res.json())
    .then(data => {
      const games = data.results;
      if (games && games.length > 0) {
        const randomIndex = Math.floor(Math.random() * games.length);
        const game = games[randomIndex];
        outputBox.innerHTML = `
          <h3>${game.name}</h3>
          <img src="${game.background_image}" alt="${game.name} Thumbnail" width="200">
          <p><strong>Released:</strong> ${game.released}</p>
          <p><strong>Rating:</strong> ${game.rating}</p>
          <p><strong>Platforms:</strong> ${game.platforms.map(p => p.platform.name).join(', ')}</p>
        `;
      } else {
        outputBox.textContent = "No games found.";
      }
    })
    .catch(error => {
      outputBox.textContent = "Failed to load game.";
      console.error("Error fetching game data:", error);
    });
}

  else {
    const items = data[category]?.india;
    const randomItem = items[Math.floor(Math.random() * items.length)];
    outputBox.textContent = randomItem || "No data available.";
  }

      // Fade in after update
    outputBox.classList.add('fade-in');

    setTimeout(() => {
      outputBox.classList.remove('fade-in');
    }, 500);

  }, 300);
}
