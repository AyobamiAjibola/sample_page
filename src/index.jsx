const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
    res.status(200).send({ data: "Welcome Skyline" });
  });

app.all("*", (req, res) => {
    res.status(200).send({err: "Not cool"})
});

const port = 8000;

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
