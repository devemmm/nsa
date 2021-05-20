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

const page404 = [
    (req, res)=>{
        res.render('404page')
    }
]
module.exports = { 
    index,
    apply,
    page404 
}