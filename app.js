const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const path = require(('path'))
const port = process.env.port || 8050


//Rotas
const user = require('./router/user')
const table = require('./router/table')
const article = require('./router/article')
const base = require('./router/base')
const role = require('./router/role')
const organization = require('./router/organization')


app.use(express.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(cors())
app.use(express.static('public'));
// app.use('/uploads',express.static(__dirname+'uploads'));
// app.use('/uploads',express.static(__dirname));
app.use('/uploads', express.static('uploads'));
// app.use(express.static(path.join('/uploads')));


app.get('/', (req, res) => {
    res.status(200).send({
        status: 200,
        data: {},
        msg: 'hi!'
    })
})


app.use('/mock/user', user)
app.use('/user', user)
app.use('/table', table)
app.use('/article', article)
app.use('/base', base)
app.use('/role', role)
app.use('/organization', organization)

app.listen(port, () => {
    console.log('Servidor rodando na porta 8050')
})
