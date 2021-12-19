require('dotenv').config();
const path = require('path');
const morgan = require('morgan');
const express = require('express');
const parser = require('body-parser');
const favicon = require('serve-favicon');
const nodemailer = require('nodemailer');
const { body, validationResult } = require('express-validator');
const app = express();

app.use(morgan('dev'));
app.use(parser.json());
app.use(parser.urlencoded({ extended: false }));
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(express.static(path.join(__dirname, './frontend/build')));

// Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

const mailOptions = {
  from: process.env.EMAIL,
  to: process.env.EMAIL,
  subject: 'Message from Portfolio Site',
  html: '<h1>Lorem Ipsum.</h1>',
};

app.post('/message', body('email').isEmail(), (req, res) => {
  if (!validationResult(req).isEmpty()) {
    res.status(400).json('Invalid email.');
  } else {
    mailOptions.html = `<div>
        <h1>Name: ${req.body.name}</h1>
        <h2>Email: ${req.body.email}</h2>
        <p>${req.body.message}</p>
      </div>`;

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });

    res.status(200).json('Message successfully sent.');
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './frontend/build', 'index.html'));
});

app.listen(process.env.PORT || 8080, console.log('Server started.'));
