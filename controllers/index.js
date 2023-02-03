const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const router = express.Router();

router.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/'))
);

router.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '../db/db.json'))
);



module.exports = router;