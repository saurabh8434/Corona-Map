const express = require('express');
const app = express();
const port = 8000;

app.use(express.static(__dirname+'/public'))

app.get('/',(req,res)=>{
    res.status(200).render('index.html');
})

app.listen(port,()=>{
    console.log(`Site opened on port ${port}`);
})