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
    const transporterInstance = createTransporter();

    const mailOptions = {
      from: process.env.NODEMAIL_EMAIL,
      to: email,
      subject,
      html: htmlContent,
    };

    // Wrap the sendMail function in a Promise
    const sendMailPromise = () => {
      return new Promise((resolve, reject) => {
        transporterInstance.sendMail(mailOptions, function (error, info) {
          if (error) {
            console.log(error);
            reject(error);
          } else {
            console.log("Email sent:", info.response);
            resolve(info);
          }
        });
      });
    };

    // Use await to wait for the Promise to resolve or reject
    const info = await sendMailPromise();

    return info;
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
};

module.exports = { sendAnyEmail };