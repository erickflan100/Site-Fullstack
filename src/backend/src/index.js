const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./models/UserData')

const app = express()
require('./config/dbConfig')

app.use(cors())
app.use(express.json())
app.use(express.Router())

mongoose.connect('mongodb+srv://erickflan10:erickzin@cluster0.sql0tdi.mongodb.net/usuario?retryWrites=true&w=majority')
    .then(() => {
    app.listen(3333)
    console.log('conectou')
    })
    .catch((err) => console.log(err))

app.get('/', (req, res) => {
    return res.json({
        succes: true
    })
})

app.post('/', async (req, res) => {
    const {username, password} = req.body

    if(!username){
        return res.status(422).json({ msg: 'O usuário tem que ser preenchido.' })
    }

    if(!password){
        return res.status(422).json({ msg: 'A senha está vazia.' })
    }

    const user = await User.findOne({ username : username})

    if(!user){
        return res.status(422).json({ msg: 'Usuário Inválido' })
    }

    const checkPass = await User.findOne({ password : password })

    if(!checkPass){
        return res.status(422).json({ msg: 'Senha Inválida' })
    }

    try {
        return res.status(200).json({ msg: 'Usuário logado com sucesso' })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ msg: 'Ocorreu um erro no servidor' })
    }
})
