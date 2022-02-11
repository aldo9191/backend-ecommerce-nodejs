const express = require('express');
const mysql = require('mysql');
const myconn = require('express-myconnection');

const routes = require('./routes')

const app = express();
app.set('port', process.env.PORT || 3000);
const dbOptions = {
  host:'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com',
  user:'bsale_test',
  port: '3306',
  password:'bsale_test',
  database:'bsale_test'
}

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, 	X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-	Method');
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, 	DELETE');
	res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
	next();
});

// middlewares

app.use(myconn(mysql, dbOptions, 'single'))
app.use(express.json())

// routes

app.get('/', (req,res) => {
  res.send('Welcome to Aldos Api')
})

app.use('/api', routes)

// server running

app.listen(app.get('port'), ()=> {
  console.log('Server is running on port', app.get('port'))
})