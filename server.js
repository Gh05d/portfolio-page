const restify = require("restify");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const corsMiddleware = require("restify-cors-middleware");
const dotenv = require("dotenv");

dotenv.load();

//Cors Middleware to prevent cross-domain-errors
const cors = corsMiddleware({
  preflightMaxAge: 5,
  origins: ["*"],
  allowHeaders: ["API-Token"],
  exposeHeaders: ["API-Token-Expiry"]
});

//This is the server
const server = restify.createServer();

//Handle cross-origin problems
server.pre(cors.preflight);
server.use(cors.actual);

//query & bodyparser to use to send data
server.use(
  restify.plugins.queryParser({
    mapParams: true
  })
);

server.use(
  restify.plugins.bodyParser({
    mapParams: true
  })
);

server.use(restify.plugins.fullResponse());

//Setup Gmail to send emails
const smtpTransport = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.USERNAME,
    password: process.env.PASSWORD
  }
});

//The POST using nodemailer
server.post("/contactme", function create(req, res, next) {
  const mail = {
    from: req.params.email,
    to: "pascal.clanget@googlemail.com",
    subject: "Finally, this shit works :-)",
    html:
      "name: <br/>" +
      req.params.nom +
      "<br/> Message: <br/>" +
      req.params.message +
      "<br/>email<br/>" +
      req.params.email
  };

  smtpTransport.sendMail(mail, (err, res) => {
    if (err) {
      console.log("An error occured during sending!");
      console.log(error);
    } else {
      console("Email successfully sent!");
    }

    smtpTransport.close();
  });

  res.send(201, req.params);
});

server.listen(4000);
