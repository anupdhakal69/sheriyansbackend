// const cookieParser = require('cookie-parser');
// app.use(cookieParser());
// res.cookie("name","anup")   ---to set cookie
// app.get('/other', (req, res) => {
//     console.log(req.cookies);
// });

const express = require('express');
const app = express();
const bcrypt = require('bcrypt');


app.get('/', (req, res) => {
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash("honolulu", salt, function(err, hash) {
            console.log(hash);
            
        });
    });
});


app.listen(3000, () => {
    console.log(`Server is running on port ${3000}`);
});