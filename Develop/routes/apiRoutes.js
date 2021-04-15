const router = require('express').Router()
var tableData = require("../db/db.json");
const fs = require('fs')


router.get('/notes', (req, res) => {
    res.json(tableData)
})

router.post('/notes', (req, res) => {
   console.log(req.body)
   //writing the file and saving to file
   //need to install fs
    fs.writeFileSync('/db/db.json', JSON.stringify(req.body));
     })

     
router.post('/notes', (req, res => {
    fs.readFile
}))
     

module.exports = router