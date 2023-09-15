const express = require('express')
const routes = require('./routes/routes.js')
const bp = require('body-parser')

const app = express()
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))
app.use(routes);

module.exports = app;