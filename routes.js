const express = require('express');
const routes = express.Router();

// Obteniendo todos los productos

routes.get('/productos', (req,res)=>{
  req.getConnection((err,conn)=>{

    if (err) return res.send(err)

    conn.query('SELECT * FROM product;', (err, products)=>{
      if (err) return res.send(err)

      res.json(products)
    })
  })
})

// Obteniendo todas las categorias

routes.get('/categorias', (req,res) => {
  req.getConnection((err,conn) => {

    if (err) return res.send(err)

    conn.query('SELECT * FROM category;', (err, category) =>{
      if (err) return res.send(err)

      res.json(category)
    })
  })
})



module.exports = routes;
