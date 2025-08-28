const express = require('express')
const { v4: uuidv4 } = require('uuid');

const app = express()
app.use(express.json())

const dados = []


function middleware (req, res, next){
    const {method, url} = req
    const router = `[${method}] ${url}`
    console.log(router)
    next()
}

app.use(middleware)

app.get('/projects', (req, res) =>{
    return res.json(dados)
})

app.post('/projects', (req, res)=>{
    const { name, age } = req.body
    
    const dado = {
        id: uuidv4(),
        name,
        age
    }

    dados.push(dado)
    return res.sendStatus(201)
})

app.put('/projects/:id', (req, res) => {
    const { id } = req.params
    const { age, name } = req.body
    
    const index = dados.findIndex(dado => dado.id === id)

    if (index < 0){
        return res.json({error: 'Dado not found'}).status(404)
    }
    if (!name || !age){
        return res.json({error: 'Name and age are required'}).status(400)
    }

    dados[index] = {
        id,
        name,
        age
    }

    return res.json(dados[index]).status(204)
})

app.delete('/projects/:id', (req, res) => {
    const {id } = req.params
    const index = dados.findIndex(dado => dado.id === id)

    if (index < 0){
        return res.json({error: 'Dado not found'}).status(404)
    }

    dados.splice(index, 1)
    return res.sendStatus(204)
})

app.listen(3000, () =>{
    console.log('Server is running on port 3000')
})

