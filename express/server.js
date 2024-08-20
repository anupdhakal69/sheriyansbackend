const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.send("Hello World")
})
app.get('/profile',(req,res)=>{
    res.send("<h1>This profile is of Mr.Anup handsome hehe</h1>")
})

app.listen(4000)