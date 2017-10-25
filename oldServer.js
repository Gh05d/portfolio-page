const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const path = require("path");
const nodemailer = require("nodemailer");
const account = require("./pass");

const app = express();

//View engine setup
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

//Static folder
app.use("/src", express.static(path.join(__dirname, "src")));

//Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.render("ContactForm.jsx");
});

app.post("/contactme", (req, res) => {
  const output = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>
      <li>Name: ${req.body.name}</li>
      <li>Email: ${req.body.email}</li>
      <li>Phone: ${req.body.phone}</li>
    </ul>
    <h3>Message:</h3>
    <p>${req.body.message}</p>
  `;

  //Create a reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "mail.google.com",
    port: 587,
    secure: false, //true for 465, false for other ports
    auth: {
      user: account.user,
      pass: account.pass
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  //Setup email data with unicode symbols
  let mailOptions = {
    from: '"Fred Foo" <foo@blurdybloop.com>',
    to: "pascal.clanget@googlemail.com",
    subject: "Hello",
    text: "Hello World!",
    html: output
  };

  //Send email with the defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log("An error occurred:", error);
    }

    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    res.render("contact", { msg: "Email has been sent" });
  });
});

app.listen(4000, () => console.log("Server started..."));
