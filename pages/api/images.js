import { google } from 'googleapis';
import fs from 'fs';
import path from 'path';

const CREDENTIALS_PATH = path.join(process.cwd(), 'credentials.json');
const TOKEN_PATH = path.join(process.cwd(), 'token.json');

const SCOPES = ['https://www.googleapis.com/auth/drive.readonly'];
const FOLDER_ID = '1_-A_Qw5n_RU4Z4Ur4L4KQ4ZLOAc5HpqY'; // Replace with your folder ID

function authorize(credentials, callback) {
  const { client_secret, client_id, redirect_uris } = credentials.web;
  const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);

  fs.readFile(TOKEN_PATH, (err, token) => {
    if (err) {
      console.error('Error reading token:', err);
      return getAccessToken(oAuth2Client, callback);
    }
    oAuth2Client.setCredentials(JSON.parse(token));
    callback(oAuth2Client);
  });
}

function getAccessToken(oAuth2Client, callback) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });
  console.log('Authorize this app by visiting this url:', authUrl);
  // Implement logic to get access token from user
}

function listFiles(auth, res) {
  const drive = google.drive({ version: 'v3', auth });
  drive.files.list({
    q: `'${FOLDER_ID}' in parents`,
    pageSize: 10,
    fields: 'nextPageToken, files(id, name, webViewLink, webContentLink)',
  }, (err, response) => {
    if (err) {
      console.error('Error fetching files:', err);
      return res.status(500).json({ error: err.message });
    }
    const files = response.data.files;
    if (!files.length) {
      console.log('No files found.');
    }
    res.status(200).json({ files });
  });
}

export default function handler(req, res) {
  fs.readFile(CREDENTIALS_PATH, (err, content) => {
    if (err) {
      console.error('Error loading client secret file:', err);
      return res.status(500).json({ error: 'Error loading client secret file' });
    }
    authorize(JSON.parse(content), (auth) => listFiles(auth, res));
  });
}
