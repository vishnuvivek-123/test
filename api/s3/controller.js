import {
  DeleteObjectCommand, GetObjectCommand, PutObjectCommand, S3Client,
} from '@aws-sdk/client-s3';
import crypto from 'crypto';
import User from '../../models/user.js';

const s3 = new S3Client({
  region: process.env.S3_REGION,
  credentials: {
    accessKeyId: process.env.S3_ACCESS_KEY_ID,
    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
  },
});
const upload = async (req, res) => {
  if (req.files?.photo) {
    req.body.photo = `profiles/${crypto.randomBytes(8).toString('hex') + (req.files.photo.name)}`;
  }
  const data = {};
  if (req.files?.photo) {
    data.key = req.files.photo.data;
  }
  const options = {
    Bucket: process.env.S3_BUCKET_NAME,
    Key: req.body.photo,
    Body: data.key,
  };
  await s3.send(new PutObjectCommand(options));
  const user = await User.create(req.body);
  return res.json({ user, msg: 'New user created.' });
};

export default upload;
