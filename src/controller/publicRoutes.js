const request = require('request')
const { body } = require('express-validator')

const index = [
    (req, res)=>{
        res.render('index')
    }
]

const apply = [
    (req, res)=>{
        res.render('apply')
    }
]

module.exports = { 
    index,
    apply 
}