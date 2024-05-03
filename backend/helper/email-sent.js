const nodemailer = require("nodemailer");
async function emailHandler(user) {
    const transport = nodemailer.createTransport({
        //smtp
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });
      const info = await transport.sendMail({
        from: process.env.SMTP_USER,
         to: `${user},ketan12pawar@gmail.com,saurabhsharma5312@gmail.com`,
         subject: "Welcome Email",
         html: `<b>hello   user welcome in my website.com 2023 ,thank you from shubham </b>`,
      });
      return info;
}

module.exports =emailHandler;