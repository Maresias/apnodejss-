const express = require('express')

const app = express()
app.use(express.json())

app.get('/', (req, res) =>{
    res.send('Hello World!')
})

app.get('/projects', (req, res) =>{
    const {name, age} = req.query
    res.send(`${name} has ${age} years`)
})

app.post('/projects', (req, res)=>{
    const { name, age } = req.body
    res.send([
        `name: ${name}, age: ${age}`
    ])
})

app.put('/projects/:id', (req, res) => {
    const { id } = req.params
    const { age, name } = req.body
    res.send(`{
        "id": ${id},
        "age": ${age},
        "name": "${name}"
    }`)
})

app.delete('/projects/:id', (req, res) => {

    res.send(`{
        "zerado"
    }`)
})

app.listen(3000, () =>{
    console.log('Server is running on port 3000')
})

