const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const cors = require("cors");

//Load environment variables
dotenv.load();
const { USER_NAME, PASSWORD, EMAIL_HOST } = process.env;
const PORT = process.env.PORT || 4000;

const app = express();

//Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  cors({
    origin: ["http://gh05d.de", "http://www.gh05d.de"],
    credentials: true // <-- REQUIRED backend setting
  })
);
app.use(express.static("./build"));

app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "./build", "index.html"));
});

app.post("/send", (req, res) => {
  const output = `
    <p>Dude, you have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>
      <li>Name: ${req.body.name}</li>
      <li>Phone: ${req.body.phone}</li>
      <li>Email: ${req.body.email}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
  `;

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: EMAIL_HOST,
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: USER_NAME,
      pass: PASSWORD
    }
  });

  transporter.verify((err, success) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Server is up and running and ready to take your messages");
    }
  });

  // setup email data with unicode symbols
  let mailOptions = {
    from: '"Nodemailer Service" <foo@blurdybloop.com>', // sender address
    to: "pascal.clanget@googlemail.com", // list of receivers
    subject: "Bro, new contact request ✔", // Subject line
    text: "New Contact Request", // plain text body
    html: output // html body
  };

  //send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }

    res.send(true);
    console.log("Message sent: %s", info.messageId);
  });
});

app.listen(
  PORT,
  console.log(`Server running on port ${PORT}\nPress CTRL + C to exit`)
);
