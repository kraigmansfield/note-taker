const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const router = express.Router();

router.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/index.html'))
);

router.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/notes.html'))
);



module.exports = router;