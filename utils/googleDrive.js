const { google } = require('googleapis');
const { authenticate } = require('@google-cloud/local-auth');
const path = require('path');

async function listFiles() {
  const auth = await authenticate({
    keyfilePath: path.join(__dirname, 'credentials.json'), // Ensure the path is correct
    scopes: ['https://www.googleapis.com/auth/drive.readonly'],
  });

  const drive = google.drive({ version: 'v3', auth });

  // Folder ID from the provided URL
  const folderId = '1_-A_Qw5n_RU4Z4Ur4L4KQ4ZLOAc5HpqY';

  const res = await drive.files.list({
    q: `'${folderId}' in parents`,
    pageSize: 10,
    fields: 'files(id, name, mimeType)',
  });

  return res.data.files;
}

module.exports = { listFiles };
