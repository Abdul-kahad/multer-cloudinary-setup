const FilesUpload = require('../models/fileUploadModel')

const uploadFiles = async (req, res) => {
  try { 
    const singleUpload = req.files?.singleUpload?.[0]?.secure_url || null
    const multipleUpload = req.files?.multipleUpload || []
    const vedioUpload = req.files?.vedioUpload?.[0]?.secure_url || null

    // ensure at least one file is uploaded
    if (!singleUpload && multipleUpload.length === 0 && !vedioUpload) {
      return res.status(400).json({ message: "Please upload at least one file" })
    }

    const multipath = multipleUpload.map(file => file.secure_url)

    const newFile = new FilesUpload({
      ...(singleUpload && { singleUpload }),       
      ...(multipath.length > 0 && { multipleUpload: multipath }), 
      ...(vedioUpload && { vedioUpload }),             
    }) 

    await newFile.save()

    res.status(200).json({
      message: 'File uploaded successfully',
      file: newFile
    })

  } catch (error) {
    console.log("Error in upload", error)
    res.status(500).json({ message: "Server error", error: error.message })
  }
}

module.exports =  uploadFiles 