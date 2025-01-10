const express = require('express');
const app = express();
const port = 3000;
const sRouter = require('./studentController')

app.use('/mahasiswa', sRouter)

app.listen(port,()=>{
   `Server at http://localhost:${port}`
})
