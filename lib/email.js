require ("../settings");
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');

const mailer = {
  inboxGmailRegist: (email, codeverify) => {
    try {
      const inboxGmail = `<div
        style="width: 600px; height: 500px;margin: auto;font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;">
        <div
            style="line-height: 2; letter-spacing: 0.5px; position: relative; padding: 10px 20px; width: 540px;min-height: 360px; margin: auto; border: 1px solid #DDD; border-radius: 14px;">
            <h3>Welcome to ShanBots Api - an awesome REST API!</h3>
            <p>
                Terimakasih sudah mendaftar! You must follow this link 
                Anda harus mengikuti tautan ini dalam 30 menit setelah registrasi untuk mengaktifkan akun Anda:
            </p>
            <a style="cursor: pointer;text-align: center; display: block; width: 160px; margin: 30px auto; padding: 10px 10px; border: 1px solid #00FFFA; border-radius: 14px; color: #FF5700; text-decoration: none; font-size: 1rem; font-weight: 500;"
                href="${codeverify}">Verifikasi Sekarang</a>
            <span style="display: block;">Jika kamu tidak melakukan tindakan itu, silakan abaikan saja <br>email ini.
<br>
<br>
If you have any problem, please contact via <span
                    style="color: #4D96FF;"><a href="https://api.whatsapp.com/send?phone=6283146993017">WhatsApp</a></span></span>
            <span style="display: block;"><br>Regards,<br>ShanBot × Ikhsan</span>
        </div>
    </div>
      `;

      let transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
          // ENV
          user: your_email,
          pass: email_password,
        },
      });
      let mailOptions = {
        from: '"ShanBot RestAPI" <no-reply@gmail.com>',
        to: email,
        subject: `Verify Email Anda - ShanBots RestAPI`,
        html: inboxGmail,
      };
      transporter.sendMail(mailOptions, (err) => {
        if (err) {
          console.log(err);
        }
      });
    } catch (error) {
      console.log(error);
    }
  }
};
module.exports = mailer;
