const multer = require('multer');
const cloudinary = require('../cloudinary/cloudinary'); // ← import from your config file
const CloudinaryStorage = require('multer-storage-cloudinary');

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'file_upload',
    allowed_formats: ['jpg', 'jpeg', 'png', 'mp4'],
    resource_type: 'auto',
  },
}); 

const upload = multer({ storage });

module.exports = upload;

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads/')
//   },
//   filename: (req, file, cb) => {
//     const name = Date.now() + path.extname(file.originalname)
//     cb(null, name)
//   }
// })