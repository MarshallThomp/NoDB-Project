const express = require('express')

const Ctrl = require('./controllers/dogs')

const app = express()
const port = 4321

app.use(express.json())


app.get('/api/dogs', Ctrl.read)
app.post('/api/dogs', Ctrl.create)
app.put('/api/dogs/:id', Ctrl.update)
app.delete('/api/dogs/:id', Ctrl.delete)

app.listen(port, () => {
    console.log('Listening on port', port)
})