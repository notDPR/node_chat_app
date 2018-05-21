const path = require('path');
const express = require('express');
const port = process.env.PORT || 3000 ;
var app = express();

const publicPath = path.join(__dirname,'../public');

// console.log(__dirname + '\..\public') ;
// console.log(publicPath);

app.use(express.static(publicPath));

// app.get('/',(req,res)=>{
//   res.send(index.html);
// });

// ----------------------------------------------- //

app.listen(port , ()=>{
  console.log('ChatApp is live on port',port);
});









app.li
