const express = require("express");
const app = express();
const PORT = 3000;
const path = require("path");

app.use(express.urlencoded({ extended: true}))
app.use(express.json())

// app.get('/', (req, res) => {
//     res.send('You connected')
// })

//GET /notes - Should return the notes.html file.
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/notes.html'))
})
// GET * - Should return the index.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'))
})

// GET /api/notes - Should read the db.json file and return all saved notes as JSON.

app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname + '/db/db.json'))
})







app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`)
})