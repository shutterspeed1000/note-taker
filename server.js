// setup express and server port
const express = require("express");

// port for express.js server, environment or 3001
const PORT = process.env.PORT || 3001;

const app = express();

// add public folder to server webfiles
app.use(express.static("public"));

// sending API calls to seperate module
const api = require("./routes/apiroutes");


// Defaulting all /api to api 
app.use("/api", api);

//routes for public html files
app.get("/", (req, res) => res.sendFile(__dirname + "/public/index.html"));
app.get("/notes", (req, res) => res.sendFile(__dirname + "/public/notes.html"));

// start server
app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
