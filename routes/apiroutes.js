const express = require("express");
const fs = require(`fs`);
const app = express();

// Middleware for json parsing
app.use(express.json());

const notes = require("../db/db.json");

// GET all notes in DB
app.get("/notes", (req, res) => res.json(notes));

// POST new note to DB and write file

app.post("/notes", (req, res) => {
  let newNote = req.body;

  //set note id based on number of items in array
  newNote.id = notes.length + 1;

  notes.push(newNote);

  fs.writeFile("./db/db.json", JSON.stringify(notes), function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("File written successfully");
    }
  });
  // load new notes/all notes after DB update
  res.json(notes);
});

// delete note using ID and splice in array memory, the write to file

app.delete("/notes/:id", (req, res) => { 

let index = notes.findIndex(inx => inx.id == req.params.id)

   notes.splice(index, 1);

   fs.writeFile("./db/db.json", JSON.stringify(notes), function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log("File written successfully");
      }
    });
  // load new notes/all notes after DB update
   res.json(notes);

})

module.exports = app;
