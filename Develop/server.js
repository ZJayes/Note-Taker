const { response } = require("express");
const express = require("express");
const fs = require('fs')
const app = express();
const PORT = process.env.PORT || 3000;
const path = require("path");


app.use(express.urlencoded({ extended: true}))
app.use(express.json())
//retreiving everything from the public file
app.use(express.static('public'))


//GET /notes - Should return the notes.html file.
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/notes.html'))
})
// GET * - Should return the index.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'))
})

// GET /api/notes - Should read the db.json file and return all saved notes as JSON.
//dont need to sendFile
app.get('/api/notes', (req , res) => {
    res.sendFile(path.join(__dirname, '/db/db.json'))
 });

// POST /api/notes - Should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client.
app.post('/api/notes', (req, res) => {
    const newNote = req.body
    newNote.id = uuidv4()
    const allNotes = JSON.parse(fs.readFileSync(path.join(__dirname, '/db/db.json'), 'utf8'))
    allNotes.push(newNote)
    fs.writeFileSync(path.join(__dirname, '/db/db.json'), JSON.stringify(allNotes))
    res.sendStatus(200)
})




// DELETE /api/notes/:id - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique id when it's saved. In order to delete a note, you'll need to read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file.


app.delete('/api/notes/:id', (req,res) => {
    const noteId = req.params.id
    let Notes = JSON.parse(fs.readFileSync(path.join(__dirname, '/db/db.json'), 'utf8'))
    Notes = Notes.filter(note => note.id != noteId)
    fs.writeFileSync(path.join(__dirname, '/db/db.json'), JSON.stringify(Notes))
    res.status(200).send(Notes)

})


app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`)
})