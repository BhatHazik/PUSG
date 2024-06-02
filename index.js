const express = require('express');
const dotenv = require('dotenv');
dotenv.config({path: "./config.env"});
const bodyParser = require('body-parser');
const sendOTP = require('./Controllers/userController');
const {sendErrorRes} = require('./Controllers/errorController');
const app = express();

app.use(bodyParser.json());


app.post('/sendOTP', sendOTP.createUserOTP);
app.post('/LoginSendOTP', sendOTP.LoginUserOTP);
app.post('/verifyOTP/:name/:email/:username/:phone_no', sendOTP.verifyOTP);



app.use(sendErrorRes);
const PORT = 4000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
  