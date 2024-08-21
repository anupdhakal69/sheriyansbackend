const express = require("express");
const app = express();
const path = require("path")
const userModel = require("./models/user")

app.set("view engine","ejs")
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(express.static(path.join(__dirname,"public")))

app.get("/", (req,res) => {
    res.render("index")
});

app.get("/read", async (req,res) => {
    let users = await userModel.find()
    res.render("read",{users})
})

app.post("/create", async (req,res) => {
    let {name,email,image} = req.body
    let createdUser = await userModel.create({
                            name,
                            email,
                            image
                        })
    res.send(createdUser)      
    
    res.redirect("/read")
})

app.get("/update", async (req,res) => {
    let user = await userModel.findOne({_id: req.params.id})
    res.render("update",{user})
})

app.get("/delete/:id", async (req,res) => {
    await userModel.findOneAndDelete({_id: req.params.id})
    res.redirect("/read")
})

app.listen(3000)