//https://github.com/15Dkatz/beat-cors-server

const express = require('express');
const request = require('request');

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/data', (req, res) => {
  request(
    { url: 'https://fathym-prd.azure-api.net/iot-ensemble/WarmQuery?includeEmulated=false&lcu-subscription-key=973e1d72ad5d4dd3bc82e0e41f38fbef' },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: err.message });
      }

      res.json(JSON.parse(body));
    }
  )
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));
