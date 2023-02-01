const mongoose = require('mongoose')

const dbconfig = 'mongodb+srv://erickflan10:erickzin@cluster0.sql0tdi.mongodb.net/usuario?retryWrites=true&w=majority'

mongoose.set('strictQuery', false)

const connection = mongoose.connect(dbconfig, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

module.exports = connection