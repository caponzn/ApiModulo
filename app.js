const express = require('express');
const server = express();
const morseCovert = require('./morse')

server.get('/', (req, res) => {
    res.send('Helo Word!')
})

server.get('/msg/:text', (req, res) => {
    const txt = req.params.text;

    res.json ({text: txt, morse: morseCovert.morse2(txt)})
})



const port = 3000
server.listen(port, () => {
    console.log(`Servidor online na porta ${port}`)
})
