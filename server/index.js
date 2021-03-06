require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const { EMAIL_USERNAME, EMAIL_PASSWORD, NOTIFICATION_FROM, NOTIFICATION_LIST} = process.env

const app = express();
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));
// const route = express.Router();

// app.use('/v1', route);
// app.listen(SERVER_PORT, () => {
//     console.log(`Server is listening on ${SERVER_PORT}`)
// })

// serve up production assets
app.use(express.static('client/build'));
// let the react app to handle any unknown routes 
// serve up the index.html if express does'nt recognize the route
const path = require('path');
app.get('*', (req, res) => {
res.sendFile(path.resolve('src', 'header', 'Header.js'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`)
})


app.post('/api/form', (req, res) => {
  nodemailer.createTestAccount((err, account) => {
      const htmlEmail = `
      <h4>Consultation Request Information:</h4>
          <p>Name: ${req.body.name}</p>
          <p>Email Address: ${req.body.email}</p>
          <p>Phone Number: ${req.body.phone}</p>
      <p>Comments: ${req.body.comments}</p>
      `

      const transporter = nodemailer.createTransport({
        host: 'smtp.live.com', // hostname
        secureConnection: false, // use SSL
        port: 587, // port for secure SMTP
          auth: {
                user: EMAIL_USERNAME,
                pass: EMAIL_PASSWORD,
            },
            tls:{
              ciphers:'SSLv3'
          }
        });

      const mailOptions = {
          from: NOTIFICATION_FROM,  // sender address
          to: NOTIFICATION_LIST,  // list of receivers
          subject: 'You have received a Consultation Request',
          text: req.body.message,
          html: htmlEmail
        };
      
      transporter.sendMail(mailOptions, (err, info) => {
          if (err) {
              return console.log(err)
          }
          console.log('Message sent: %s', htmlEmail)
      })
  })

})