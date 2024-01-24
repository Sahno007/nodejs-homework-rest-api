const nodemailer = require("nodemailer");
require("dotenv").config();

const { META_MAIL_PASS } = process.env;

const nodemailerConfig = {
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "turnskin90@gmail.com",
    pass: META_MAIL_PASS,
  },
};

const transport = nodemailer.createTransport(nodemailerConfig);

const sendEmail = async (data) => {
  const email = { ...data, from: "turnskin90@gmail.com" };
  await transport.sendMail(email);
  return true;
};

module.exports = sendEmail;