const express = require('express')
const router = express.Router()
const upload = require('../middlewares/multer/multer')
const uploadFiles = require('../controllers/uploadefile') 

router.post('/upload', upload.fields([
  { name: "singleUpload", maxCount: 1 },
  { name: "multipleUpload", maxCount: 2 },
  { name: "vedioUpload", maxCount: 1 }
]), uploadFiles)

module.exports = router