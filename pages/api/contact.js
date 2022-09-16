const nodemailer = require("nodemailer");

export default async function handler(req, res) {
  const data = req.body;

  if (!data.email || !data.message) {
    return res.status(400).json({ error: "Email and text are required." });
  }

  await send(data);

  res.status(201).json({ data: "Message sent!" });
}

const send = async (data) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    port: 587,
    auth: {
      user: process.env.GMAIL_USER,
      pass: GMAIL_APP_PASS,
    },
    debug: false, // show debug output
    logger: false, // log information in console
  });

  const msg = `Message from contact form on "dimenshteyn.co.il"

  From: ${data.name} ${data.email}
  Tel: ${data.phone}

  ${data.message}`;

  const mailOptions = {
    from: data.email,
    to: process.env.GMAIL_USER,
    subject: data.subject,
    text: msg,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      // console.log(error);
    } else {
      // console.log("Email sent: " + info.response);
    }
  });
};
