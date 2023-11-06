const nodemailer = require("nodemailer");

const emailController = {}

const transporter = nodemailer.createTransport({
    host: "smtp.forwardemail.net",
    port: 465,
    secure: true,
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: "REPLACE-WITH-YOUR-ALIAS@YOURDOMAIN.COM",
      pass: "REPLACE-WITH-YOUR-GENERATED-PASSWORD",
    },
  });


emailController.enviarEmail = async (req, res) => {

    return res.json({ mensaje: 'Ingresó correctamente'});

    }

module.exports = emailController;