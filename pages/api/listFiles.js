import { listFiles } from '../../utils/googleDrive';

export default async function handler(req, res) {
  try {
    const files = await listFiles();
    res.status(200).json(files);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
