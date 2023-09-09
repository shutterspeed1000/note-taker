// setup express and server port
const express = require("express");
const PORT = 3001;

const app = express();

// add public folder to server webfiles
app.use(express.static("public"));

const api = require("./routes/apiroutes");
app.use("/api", api);

//routes
app.get("/", (req, res) => res.sendFile(__dirname + "/public/index.html"));
app.get("/notes", (req, res) => res.sendFile(__dirname + "/public/notes.html"));

// start server
app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));

//APIS
// const getNotes = () =>
//   fetch('/api/notes', {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });

// const saveNote = (note) =>
//   fetch('/api/notes', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(note),
//   });

// const deleteNote = (id) =>
//   fetch(`/api/notes/${id}`, {
//     method: 'DELETE',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });
