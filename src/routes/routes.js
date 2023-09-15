const express = require('express');
const router = express.Router();
const connection = require('../db/connection.js')

router.get('/products', (req, res) => {
  const sql = 'SELECT * FROM mercadorias'
  connection.query(sql, (error, result) => {
    if (error) {
      res.status(404).json({
        'erro' : error,
      })
    } else {
      res.status(200).json(
        result
      )
    }
  })
})

router.get('/products/:id', (req, res) => {
  const id = req.params.id
  const sql = "SELECT * FROM mercadorias WHERE Codigo=?"
  connection.query(sql, id, (error, result) => {
    if (error) {
      res.status(404).json({
        'erro': error
      })
    } else {
      res.status(200).json(
        result
      )
    }
  })
})

router.post('/order', (req, res) => {
  const order = req.body
  const sql = "INSERT INTO pedidos SET ?;"
  connection.query(sql, order, (error, result) => {
    if (error) {
      res.status(404).json({
        'erro': error
      })
    } else {
      res.status(201).json(
        result
      )
    }
  })
})

// router.put('/order/:id', (req, res) => {

// })

// router.delete('/order/:id', (req, res) => {

// })

module.exports = router;