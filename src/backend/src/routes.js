const express = require('express')
const routes = express.Router()
const User = require('./models/UserData.js')

routes.post('/', (req, res) => {
    const { username, password } = req.body

    const user = User.find(async user => user.username === username && user.password === password)

    if(!user){
        return res.status(401).json({ success: false, message: 'Usuário Inválido' })
    }else{
        return res.status(200).json({ success: true, message: 'Conectado' })
    }
})

module.exports = routes