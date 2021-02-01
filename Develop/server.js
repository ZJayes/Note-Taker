const express = require("express");
const app = express();
const PORT = 3000;
// const path = require("path");



app.get('/', (req, resp) => {
    res.send(path.join(__dirname + '/public/index.html'))
})

app.get('/notes', (req, resp) => {
    res.send(path.join(__dirname + '/public/notes.html'))
})

app.get('/', (req, resp) => {
    res.send(path.join(__dirname + '/index.html'))
})
// app.use(express.urlencoded({ extended: true}))
// app.use(express.json())







app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`)
})