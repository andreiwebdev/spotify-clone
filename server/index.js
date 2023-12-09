const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("<h1>Home page</h1>");
});

app.get("/discover", (req, res) => {
  axios.get("https://api.deezer.com/playlist/2917719082").then((response) => {
    res.send(response.data);
  });
});

app.get("/search/:searchTerm", (req, res) => {
  const searchTerm = req.params.searchTerm;

  axios
    .get("https://api.deezer.com/search?q=", {
      params: {
        q: searchTerm,
      },
    })
    .then((response) => {
      res.send(response.data);
    });
});

app.get("/chart/", (req, res) => {
  axios.get("https://api.deezer.com/chart/").then((response) => {
    res.send(response.data);
  });
});

app.get("/track/:songid", (req, res) => {
  const songid = req.params.songid;

  axios
    .get(`https://api.deezer.com/track/${songid}`, {
      params: {
        songid,
      },
    })
    .then((response) => {
      res.send(response.data);
    });
});

app.get("/artist/:artistid", (req, res) => {
  const artistid = req.params.artistid;

  axios
    .get(`https://api.deezer.com/artist/${artistid}`, {
      params: {
        artistid,
      },
    })
    .then((response) => {
      res.send(response.data);
    });
});

const PORT = process.env.VITE_PORT || 4000;

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
