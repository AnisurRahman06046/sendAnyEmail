const nodemailer = require("nodemailer");

const createTransporter = () => {
  return nodemailer.createTransport({
    service: process.env.NODEMAIL_SERVICE,
    auth: {
      user: process.env.NODEMAIL_EMAIL,
      pass: process.env.NODEMAIL_PASSWORD,
    },
  });
};

const sendAnyEmail = async (email, subject, htmlContent) => {
  try {
    const transporterInstance = createTransporter(); // Use a different variable name here

    const mailOptions = {
      from: process.env.NODEMAIL_EMAIL,
      to: email,
      subject,
      html: htmlContent,
    };

    await transporterInstance.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
        throw new Error(error);
      } else {
        console.log("Email sent:", info.response);
      }
    });
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
};

module.exports = { sendAnyEmail };
