const nodemailer = require("nodemailer");

export default async function handler(req, res) {

  const data = req.body;

  console.log("body: ", data);

  if (!data.email || !data.message) {
    return res.status(400).json({ error: "Email and text are required."});
  }

  await send(data);

  res.status(201).json({ data: "Message sent!" });
}

const send = async (data) => {

  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "herbert.hilll40@ethereal.email",
      pass: "YSeuDRdJYE3K3Q2cNr",
    },
  });

  const mailOptions = {
    from: data.email,
    to: 'herbert.hilll40@ethereal.email',
    subject: data.subject,
    text: data.message
  };


transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}