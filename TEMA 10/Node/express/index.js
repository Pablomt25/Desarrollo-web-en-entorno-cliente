const express = require('express')
const app = express()
const port = 3000

app.get('/pokemons', (req, res) => {
    res.send('Ruta pokemons')
  })

app.get('/', (req, res) => {
  res.send('Hello!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})