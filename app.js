const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const port = process.env.port || 8050


//Rotas
const user = require('./router/user')


app.use(express.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(cors())


app.get('/', (req, res) => {
    res.status(200).send({
        status:200,
        data: {},
        msg: 'hi!'
    })
})


app.use('/mock/user', user)

app.listen(port, () => {
    console.log('Servidor rodando na porta 8050')
})