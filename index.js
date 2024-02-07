const nodemailer = require("nodemailer");
const chalk = require("chalk");

const createTransporter = () => {
  return nodemailer.createTransport({
    service: process.env.NODEMAIL_SERVICE,
    auth: {
      user: process.env.NODEMAIL_EMAIL,
      pass: process.env.NODEMAIL_PASSWORD
    }
  });
};

const sendAnyEmail = async (email, subject, htmlContent) => {
  try {
    const transporterInstance = createTransporter(); // Use a different variable name here

    const mailOptions = {
      from: process.env.NODEMAIL_EMAIL,
      to: email,
      subject,
      html: htmlContent
    };

    await transporterInstance.sendMail(mailOptions, function (error, info) {
      if (error) {
        return console.log(
          chalk.bold.red(
            `\n✦ Oops! Email sending failed.Check your auth credentials.\n`
          )
        );
      }

      console.log(
        chalk.bold.yellow("\n✲ Email sent successfully:"),
        info.response + "\n"
      );
    });
  } catch (error) {
    console.log(
      chalk.bold.red(
        `\n✦ Oops! Email sending failed. Reason: ${error.message}\n`
      )
    );
  }
};

module.exports = { sendAnyEmail };
