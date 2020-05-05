const express = require('express');

const app = express();

app.get('/', (req, res) =>{
    return res.send("Maratona Full Cycle 2.0");
})

app.listen('3000');