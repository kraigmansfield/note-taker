const { notStrictEqual } = require("assert");
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

router.post('/notes', (req,res) => {
  console.log(req.body)
  const notes = JSON.parse(fs.readFileSync("./db/db.json"));
  const newNotes = req.body
  notes.push(newNotes);
  fs.writeFileSync("./db/db.json", JSON.stringify(notes))
  res.json(notes);
  res.json({msg:"connected"})
})

router.delete('/:notes',(req,res)=>{

})

module.exports = router;