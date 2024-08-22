// const cookieParser = require('cookie-parser');
// app.use(cookieParser());
// res.cookie("name","anup")   ---to set cookie
// app.get('/other', (req, res) => {
//     console.log(req.cookies);
// });

const express = require('express');
const app = express();
const path = require('path');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const usermodel = require('./models/user');
const jwt = require('jsonwebtoken');

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());


app.get('/', (req, res) => {
   res.render('index');
});

app.post('/create', (req, res) => {
    let { username, email, password, age } = req.body;

    bcrypt.genSalt(10,(err,salt) => {
        bcrypt.hash(password,salt, async(err,hash) => {

            let createdUsers = await usermodel.create({
                username,
                email,
                password: hash,
                age
        })

        let token = jwt.sign({email},"secretkey");
        res.cookie('token',token,);
        res.send(createdUsers);
    })

    });
})

app.listen(3000, () => {
    console.log(`Server is running on port ${3000}`);
});