const express = require('express')
const router = express.Router()

const { json } = require('body-parser')
const { response } = require('express')

router.get('/', (req, res) => {
    res.status(200).send({
        status:200,
        data: {},
        msg: 'hi! User 1'
    })
});
router.post('/verificationCode', (req, res) => {
    res.status(200).send({
        status:200,
        data: req.body ,
        msg: 'hi! verificationCode'
    })
});
router.post('/register', (req, res) => {
    res.status(200).send({
        status:200,
        data: req.body ,
        msg: 'hi! register'
    })
});
router.post('/login', (req, res) => {
    var email = req.body.email
    var senha = req.body.senha
    var response={
        email,
        senha
    }
    res.status(200).send(response)
})

module.exports = router