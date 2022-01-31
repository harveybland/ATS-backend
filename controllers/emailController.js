var nodemailer = require('nodemailer');
const { google } = require('googleapis');
require('dotenv').config();

const CLIENT_ID =
  '177543007062-d0m4pi2nv0rrqdf015ek61p6hfs9i5bn.apps.googleusercontent.com';
const CLIENT_SECRET = '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';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const REFRESH_TOKEN =
  '1//04VFhdj5qh3FACgYIARAAGAQSNwF-L9IrWOHDPZxUuOkkAzdrERdrn5Wc3n6WUd_xLGPU3cbja_kID0cJ74DEbXqD55jIio5ebg0';

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

async function sendMail() {
  try {
    const accessToken = await oAuth2Client.getAccessToken();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'Oauth2',
        user: 'hrbland43@gmail.com',
        pass: 'Rupert2303!',
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });

    const mailOptions = {
      from: 'hrbland43@gmail.com',
      to: 'harvey.bland@genius.online',
      subject: 'Sending Email using Node.js',
      text: 'That was way way too easy!',
      html: '<h1>That was way way too hard!</h1>',
    };

    const result = await transporter.sendMail(mailOptions);
    return result;
  } catch (error) {
    return error;
  }
}

sendMail()
  .then((result) => console.log('Email sent... ', result))
  .catch((error) => console.log(error.message));
