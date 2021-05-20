const path = require('path')
const express = require('express');
const bodyParser = require('body-parser');
const hbs = require('hbs')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const publicRoutes = require('./routers/publicRoutes');

const app = express();
const port = process.env.PORT

// Define Path for Expore Configuration
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../template/views')
const partialPath = path.join(__dirname, '../template/partials')
const cssDirectory = path.join(__dirname, '../public/css')

// Set Up handbars Engine and views Location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
app.use(express.static(publicDirectoryPath))

// Middleware
hbs.registerPartials(partialPath)
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(cookieParser('secret'))
app.use(session({ cookie: { maxAge: 3600 } }))

// flash message middleware
app.use((req, res, next) => {
    res.locals.message = req.session.message
    delete req.session.message
    next()
})

// Router Middleware
app.use(publicRoutes)

app.listen(port, console.log(`Sever is running on port ${port}`));