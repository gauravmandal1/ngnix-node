import express from "express";

const app = express();

app.get('/', (req, res) => {
  const headers = req.headers;
  res.status(200).send(headers);
});

const SERVER_PORT = process.env.SERVER_PORT || 3000; 

app.listen(SERVER_PORT, () => {
  console.log(`Express listening on port ${SERVER_PORT}`);
});
