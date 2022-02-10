const express = require('express');

const app = express();
app.set('port', process.env.PORT || 3000);

// routes

app.get('/', (req,res) => {
  res.send('Welcome to Aldos Api')
})

// server running

app.listen(app.get('port'), ()=> {
  console.log('Server is running on port', app.get('port'))
})