const express = require("express");
const fs = require(`fs`);
const app = express();

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

app.delete("/notes/:id", (req, res) => { 

   notes.splice(req.params.id - 1, 1);

   fs.writeFile("./db/db.json", JSON.stringify(notes), function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log("File written successfully");
      }
    });

   res.json(notes);

})



module.exports = app;
