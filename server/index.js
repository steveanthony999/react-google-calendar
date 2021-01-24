require('dotenv').config();
const { google } = require('googleapis');

const { OAuth2 } = google.auth;

const oAuth2Client = new OAuth2(process.env.GOOGLE_CLIENT_ID, process.env.GOOGLE_CLIENT_SECRET);

oAuth2Client.setCredentials({ refresh_token: process.env.GOOGLE_REFRESH_TOKEN });

const calendar = google.calendar({ version: 'v3', auth: oAuth2Client });

const eventStartTime = new Date();
eventStartTime.setDate(eventStartTime.getDate() + 2);

const eventEndTime = new Date();
eventEndTime.setDate(eventEndTime.getDate() + 2);
eventEndTime.setMinutes(eventEndTime.getMinutes() + 45);

const event = {
  summary: 'This is my test summary',
  location: '975 Seven Hills Dr, Henderson, NV 89052',
  description: 'This is my test description',
  start: {
    dateTime: eventStartTime,
    timeZone: 'America/Los_Angeles',
  },
  end: {
    dateTime: eventEndTime,
    timeZone: 'America/Los_Angeles',
  },
  colorId: 1,
};

calendar.freebusy.query(
  {
    resource: {
      timeMin: eventStartTime,
      timeMax: eventEndTime,
      timeZone: 'America/Los_Angeles',
      items: [{ id: 'primary' }],
    },
  },
  (err, res) => {
    if (err) return console.error('Free Busy Query Error', err);

    const eventsArray = res.data.calendars.primary.busy;

    if (eventsArray.length === 0)
      return calendar.events.insert({ calendarId: 'primary', resource: event }, (err) => {
        if (err) return console.error('Calendar Event Creation Error', err);

        return console.log('Calendar Event Created');
      });

    return console.log('Sorry Im Busy');
  }
);
