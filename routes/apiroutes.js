const express = require('express');
const fs = require(`fs`)
const app = express()

app.use(express.json());

const notes = require('../db/db.json');

// GET all notes in DB
app.get('/notes', (req, res) => res.json(notes))

 app.post('/notes', (req, res) => {

    console.log(notes)  

    console.log(req.body)

    notes.push(req.body)
   
console.log(notes)

fs.writeFileSync('./db/db.json',JSON.stringify(notes),function(err) {
   if (err) {
      console.log(err);
    } else {
      console.log('File written successfully');
    }
 });
      
   })




module.exports = app;