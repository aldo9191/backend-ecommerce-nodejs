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

// Obteniendo los productos segun la categoria

routes.get('/productosporcategoria', (req,res)=>{
  req.getConnection((err,conn) => {

    if (err) return res.send(err)

    const idCategory = req.query.idCategory

    conn.query(`SELECT * FROM product WHERE category=${idCategory}`, (err, productsbyCategory) =>{
      if (err) return res.send(err)

      res.json(productsbyCategory)
    })
  })
})

// Obteniendo los productos por nombre

routes.get('/productospornombre', (req,res) => {
  req.getConnection((err,conn) =>{

    if (err) return res.send(err)

    const name = req.query.name

    conn.query(`SELECT * FROM product where name like %${name}`, (err, productbyName) => {
      if (err) return res.send(err)

      res.json(productbyName)
    })
  })
})


module.exports = routes;
