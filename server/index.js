require('dotenv').config();
const { google } = require('googleapis');

const { OAuth2 } = google.auth;

console.log(process.env.GOOGLE_CLIENT_ID);
